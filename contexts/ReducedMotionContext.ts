import { createContext } from 'react'

export type ReducedMotionContextType = {
  shouldReduceMotion: boolean
}

export const ReducedMotionContext = createContext<ReducedMotionContextType>({
  shouldReduceMotion: false,
})
