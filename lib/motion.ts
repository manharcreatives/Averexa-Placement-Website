import type { Variants } from 'motion/react'

export const BRAND_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
export const EASE_OUT = [0, 0, 0.2, 1] as [number, number, number, number]
export const EASE_IN = [0.4, 0, 1, 1] as [number, number, number, number]
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as [number, number, number, number]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: BRAND_EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: EASE_OUT },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: BRAND_EASE },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: BRAND_EASE },
  },
}

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15, ease: 'linear' },
  },
}

export function staggerContainer(staggerDelay = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: BRAND_EASE },
  },
}
