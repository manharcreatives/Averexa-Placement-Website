'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { HeroPosterImage } from './HeroPosterImage'
import { HeroVideo } from './HeroVideo'
import { HeroTextOverlay } from './HeroTextOverlay'
import { HeroScrollCue } from './HeroScrollCue'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const overlayDarkness = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.65])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background media — video on desktop, poster image on mobile */}
      <div className="absolute inset-0" aria-hidden="true">
        {isDesktop ? <HeroVideo style={{ scale: videoScale }} /> : <HeroPosterImage />}
      </div>

      {/* Scroll darkness overlay — matches New Website */}
      <motion.div
        className="absolute inset-0 bg-black"
        aria-hidden="true"
        style={{ opacity: overlayDarkness }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <HeroTextOverlay />
      </motion.div>

      {/* Scroll cue */}
      <HeroScrollCue />
    </section>
  )
}
