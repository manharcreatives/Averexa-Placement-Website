export const site = {
  name: 'Averexa Placement',
  description:
    'Averexa Placement helps ambitious professionals land full-time roles with leading employers across the US and Canada — with guaranteed interviews, expert mock prep, and a dedicated recruiter at every step.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://averexaplacement.com',
  tagline: 'Your Career. Across Borders.',
  // 🔴 Client to provide — placeholders below.
  phone: '+1 000 000 0000',
  email: 'hello@averexaplacement.com',
  whatsapp: '+10000000000',
  social: {
    linkedin: 'https://linkedin.com/company/averexa-placement',
    twitter: 'https://twitter.com/averexa',
  },
  address: {
    // 🔴 Client confirmed a US address exists — exact street to be provided.
    city: 'United States',
    country: 'United States',
  },
  legalName: 'Averexa Placement',
  vatNumber: '',
  foundedYear: 2023,
} as const

export type Site = typeof site
