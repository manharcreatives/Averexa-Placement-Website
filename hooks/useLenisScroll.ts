'use client'

import { useContext } from 'react'
import { LenisContext } from '@/contexts/LenisContext'

export function useLenisScroll() {
  const { lenis, scrollProgress, scrollY } = useContext(LenisContext)
  return { lenis, scrollProgress, scrollY }
}
