'use client'

import { motion, useTransform } from 'motion/react'
import { useLenisScroll } from '@/hooks/useLenisScroll'

export function ScrollProgressBar() {
  const { scrollProgress } = useLenisScroll()
  const width = useTransform(scrollProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0])

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] z-[100] pointer-events-none"
      style={{
        width,
        opacity,
        background: 'linear-gradient(90deg, #1A8A71, #B5EACC)',
      }}
    />
  )
}
