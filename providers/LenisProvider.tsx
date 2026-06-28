'use client'

import { useEffect, useState } from 'react'
import { useMotionValue } from 'motion/react'
import type Lenis from 'lenis'
import { LenisContext } from '@/contexts/LenisContext'
import { lenisConfig } from '@/lib/lenis'
import { useReducedMotionContext } from '@/hooks/useReducedMotionContext'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const { shouldReduceMotion } = useReducedMotionContext()
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)
  const scrollProgress = useMotionValue(0)
  const scrollY = useMotionValue(0)

  useEffect(() => {
    if (shouldReduceMotion) return

    let rafId: number
    let instance: Lenis | null = null

    async function init() {
      const { default: LenisClass } = await import('lenis')
      instance = new LenisClass(lenisConfig)
      setLenisInstance(instance)

      instance.on('scroll', (l) => {
        scrollProgress.set(l.progress)
        scrollY.set(l.scroll)
      })

      function raf(time: number) {
        instance?.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    void init()

    return () => {
      cancelAnimationFrame(rafId)
      instance?.destroy()
      setLenisInstance(null)
    }
  }, [shouldReduceMotion, scrollProgress, scrollY])

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollProgress, scrollY }}>
      {children}
    </LenisContext.Provider>
  )
}
