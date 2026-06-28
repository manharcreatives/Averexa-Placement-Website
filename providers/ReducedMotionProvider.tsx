'use client'

import { useReducedMotion } from 'motion/react'
import { ReducedMotionContext } from '@/contexts/ReducedMotionContext'

export function ReducedMotionProvider({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <ReducedMotionContext.Provider value={{ shouldReduceMotion }}>
      {children}
    </ReducedMotionContext.Provider>
  )
}
