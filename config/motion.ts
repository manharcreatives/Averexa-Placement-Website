export const MOTION = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.3,
    emphasis: 0.45,
    cinematic: 0.6,
    counter: 0.8,
  },

  ease: {
    brand: [0.16, 1, 0.3, 1] as [number, number, number, number],
    out: [0, 0, 0.2, 1] as [number, number, number, number],
    in: [0.4, 0, 1, 1] as [number, number, number, number],
    inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },

  spring: {
    process: { stiffness: 80, damping: 20 },
    smooth: { stiffness: 120, damping: 25 },
    bouncy: { stiffness: 200, damping: 18 },
  },

  hero: {
    eyebrow: 0.8,
    h1: 0.95,
    subheading: 1.1,
    cta1: 1.25,
    cta2: 1.35,
    trustStrip: 1.45,
    scrollCue: 2.2,
  },

  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
} as const

export type MotionConfig = typeof MOTION
