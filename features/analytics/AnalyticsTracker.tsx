'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useMotionValueEvent } from 'motion/react'
import { useLenisScroll } from '@/hooks/useLenisScroll'
import { trackPageView, trackScrollDepth } from './events'
import type { ScrollDepth } from '@/types/analytics'

const DEPTHS: ScrollDepth[] = [25, 50, 75, 100]

/**
 * Fires `page_view` on route changes and `scroll_depth` milestones once each
 * per page. Scroll progress is read from Lenis (never native scroll) so it
 * stays consistent with the site's smooth-scroll behaviour.
 */
export function AnalyticsTracker() {
  const pathname = usePathname()
  const { scrollProgress } = useLenisScroll()
  const firedDepths = useRef<Set<ScrollDepth>>(new Set())

  // Page view + reset depth tracking on navigation.
  useEffect(() => {
    trackPageView(pathname)
    firedDepths.current = new Set()
  }, [pathname])

  useMotionValueEvent(scrollProgress, 'change', (progress) => {
    const pct = progress * 100
    for (const depth of DEPTHS) {
      if (pct >= depth && !firedDepths.current.has(depth)) {
        firedDepths.current.add(depth)
        trackScrollDepth(depth)
      }
    }
  })

  return null
}
