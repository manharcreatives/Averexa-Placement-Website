'use client'

import { motion, useTransform } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { useLenisScroll } from '@/hooks/useLenisScroll'
import { useReducedMotionContext } from '@/hooks/useReducedMotionContext'

export function HeroScrollCue() {
  const { scrollY } = useLenisScroll()
  const { shouldReduceMotion } = useReducedMotionContext()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  if (shouldReduceMotion) return null

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon name="ChevronDown" size="md" className="text-white/60" />
      </motion.div>
    </motion.div>
  )
}
