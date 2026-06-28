'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

type NavLinksProps = {
  orientation?: 'horizontal' | 'vertical'
  onNavigate?: () => void
}

export function NavLinks({ orientation = 'horizontal', onNavigate }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Main navigation">
      <ul
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-row items-center gap-8' : 'flex-col gap-6',
        )}
      >
        {NAV_ITEMS.map(({ label, href }) => {
          const isActive = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

          return (
            <li key={href}>
              <Link
                href={href}
                {...(onNavigate !== undefined && { onClick: onNavigate })}
                {...(isActive && { 'aria-current': 'page' as const })}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded',
                  'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-emerald-500',
                  'after:transition-transform after:duration-200 after:origin-left',
                  isActive
                    ? 'text-white after:scale-x-100'
                    : 'text-white/70 hover:text-white after:scale-x-0 hover:after:scale-x-100',
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
