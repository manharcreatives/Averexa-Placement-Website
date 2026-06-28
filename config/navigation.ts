export type NavItem = {
  label: string
  href: string
  description?: string
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const ctaNav: NavItem = {
  label: 'Refer & Earn',
  href: '/refer',
}

export const footerNav = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  actions: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Refer & Earn', href: '/refer' },
  ],
} as const
