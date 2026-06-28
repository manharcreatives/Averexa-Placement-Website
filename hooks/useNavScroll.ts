'use client'

import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { LenisContext } from '@/contexts/LenisContext'

export function useNavScroll(threshold = 60) {
  const { lenis } = useContext(LenisContext)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (lenis) {
      const handler = ({ scroll }: { scroll: number }) => {
        setIsScrolled(scroll >= threshold)
      }
      lenis.on('scroll', handler)
      return () => {
        lenis.off('scroll', handler)
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY >= threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lenis, threshold])

  return isScrolled
}
