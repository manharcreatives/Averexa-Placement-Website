import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import type { APIResponse } from '@/types/api'
import { env } from '@/config/env'
import { checkRateLimit } from '@/lib/rate-limit'
import { processContactSubmission } from '@/services/contact.service'

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  targetJobTitle: z.string().min(2),
  description: z.string().max(500).optional().transform(v => (v === '' ? undefined : v)),
  turnstileToken: z.string().min(1),
})

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  if (!env.CLOUDFLARE_TURNSTILE_SECRET_KEY) return true

  const body = new URLSearchParams({
    secret: env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
    response: token,
  })
  if (ip) body.set('remoteip', ip)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  })
  const data = (await res.json()) as { success: boolean }
  return data.success === true
}

export async function POST(request: NextRequest): Promise<NextResponse<APIResponse<null>>> {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.', code: 'RATE_LIMITED' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.', code: 'BAD_REQUEST' },
      { status: 400 },
    )
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: 'Invalid form data.', code: 'VALIDATION_ERROR' },
      { status: 422 },
    )
  }

  const { fullName, email, phone, targetJobTitle, description, turnstileToken } = parsed.data
  const contactData = {
    fullName,
    email,
    phone,
    targetJobTitle,
    ...(description !== undefined && { description }),
  }

  const turnstileOk = await verifyTurnstile(turnstileToken, ip)
  if (!turnstileOk) {
    return NextResponse.json(
      {
        success: false,
        error: 'Security verification failed. Please refresh and try again.',
        code: 'TURNSTILE_FAILED',
      },
      { status: 400 },
    )
  }

  try {
    await processContactSubmission(contactData)
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to process your enquiry. Please try again later.',
        code: 'SERVICE_ERROR',
      },
      { status: 503 },
    )
  }

  return NextResponse.json({ success: true, data: null })
}
