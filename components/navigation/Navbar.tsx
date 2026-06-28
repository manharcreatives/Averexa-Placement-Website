'use client'

import { useState } from 'react'
import { useNavScroll } from '@/hooks/useNavScroll'
import { NavPill } from './NavPill'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileNavDrawer } from './MobileNavDrawer'
import { cn } from '@/lib/utils'

export function Navbar() {
  const isScrolled = useNavScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          isScrolled ? 'py-2' : 'py-0',
        )}
        role="banner"
      >
        <div className="flex items-center justify-between px-4 md:px-0">
          <NavPill isScrolled={isScrolled} className="flex-1" />

          {/* Mobile hamburger — outside the pill */}
          <div className="md:hidden ml-2">
            <MobileMenuButton
              isOpen={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            />
          </div>
        </div>
      </header>

      <MobileNavDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
