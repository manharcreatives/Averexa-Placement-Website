export type GAEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

export type FormName = 'contact' | 'referral'

export type CTALocation =
  | 'hero'
  | 'navbar'
  | 'cta-section'
  | 'services-page'
  | 'about-page'
  | 'process-page'
  | 'blog-page'
  | 'footer'

export type ScrollDepth = 25 | 50 | 75 | 100
