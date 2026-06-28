export type NavItem = {
  label: string
  href: string
  description?: string
  isExternal?: boolean
}

export type FooterNavGroup = {
  title: string
  items: NavItem[]
}
