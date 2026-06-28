import { createContext } from 'react'
import { motionValue, type MotionValue } from 'motion/react'
import type Lenis from 'lenis'

export type LenisContextType = {
  lenis: Lenis | null
  scrollProgress: MotionValue<number>
  scrollY: MotionValue<number>
}

export const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollProgress: motionValue(0),
  scrollY: motionValue(0),
})
