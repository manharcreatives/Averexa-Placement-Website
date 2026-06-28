import { google } from 'googleapis'
import { env } from '@/config/env'

type ContactData = {
  fullName: string
  email: string
  phone: string
  targetJobTitle: string
  description?: string
}

export async function appendContactToSheet(data: ContactData): Promise<void> {
  if (
    !env.GOOGLE_SHEETS_CLIENT_EMAIL ||
    !env.GOOGLE_SHEETS_PRIVATE_KEY ||
    !env.GOOGLE_SHEETS_SPREADSHEET_ID
  ) {
    throw new Error('Google Sheets credentials not configured')
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: 'Sheet1!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        new Date().toISOString(),
        data.fullName,
        data.email,
        data.phone,
        data.targetJobTitle,
        data.description ?? '',
      ]],
    },
  })
}
