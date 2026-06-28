'use client'

import { ReducedMotionProvider } from './ReducedMotionProvider'
import { LenisProvider } from './LenisProvider'
import { Toaster } from '@/components/ui/sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReducedMotionProvider>
      <LenisProvider>
        {children}
        <Toaster />
      </LenisProvider>
    </ReducedMotionProvider>
  )
}
