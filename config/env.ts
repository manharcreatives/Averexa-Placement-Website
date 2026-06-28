import { z } from 'zod'

const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  GOOGLE_SHEETS_CLIENT_EMAIL: z.string().email().optional(),
  GOOGLE_SHEETS_PRIVATE_KEY: z.string().min(1).optional(),
  GOOGLE_SHEETS_SPREADSHEET_ID: z.string().min(1).optional(),
  CLOUDFLARE_TURNSTILE_SECRET_KEY: z.string().min(1).optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

const clientEnvSchema = z.object({
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://averexa.com'),
})

function parseEnv() {
  const serverResult = serverEnvSchema.safeParse(process.env)
  const clientResult = clientEnvSchema.safeParse(process.env)

  const errors: string[] = []

  if (!serverResult.success) {
    errors.push(...serverResult.error.issues.map(i => `  Server: ${i.path.join('.')} — ${i.message}`))
  }
  if (!clientResult.success) {
    errors.push(...clientResult.error.issues.map(i => `  Client: ${i.path.join('.')} — ${i.message}`))
  }

  if (errors.length > 0) {
    throw new Error(`Environment validation failed:\n${errors.join('\n')}`)
  }

  return {
    ...serverResult.data!,
    ...clientResult.data!,
  }
}

export const env = parseEnv()
