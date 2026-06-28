import { sendContactEmails } from './email.service'
import { appendContactToSheet } from './sheets.service'

type ContactData = {
  fullName: string
  email: string
  phone: string
  targetJobTitle: string
  description?: string
}

export async function processContactSubmission(data: ContactData): Promise<void> {
  const [emailResult, sheetsResult] = await Promise.allSettled([
    sendContactEmails(data),
    appendContactToSheet(data),
  ])

  if (emailResult.status === 'rejected' && sheetsResult.status === 'rejected') {
    throw new Error('All notification channels failed')
  }
}
