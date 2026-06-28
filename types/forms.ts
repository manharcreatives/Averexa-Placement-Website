import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
  turnstileToken: z.string().min(1, 'Please complete the CAPTCHA'),
})

export const referralFormSchema = z.object({
  referrerName: z.string().min(2).max(100),
  referrerEmail: z.string().email(),
  candidateName: z.string().min(2).max(100),
  candidateEmail: z.string().email(),
  candidatePhone: z.string().optional(),
  candidateRole: z.string().optional(),
  notes: z.string().max(500).optional(),
  turnstileToken: z.string().min(1, 'Please complete the CAPTCHA'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
export type ReferralFormValues = z.infer<typeof referralFormSchema>
