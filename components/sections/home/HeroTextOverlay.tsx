'use client'

import { motion } from 'motion/react'
import { CTAButton } from '@/components/ui/CTAButton'
import { OutlineButton } from '@/components/ui/OutlineButton'
import { staggerItem } from '@/lib/motion'

const trustItems = [
  '120+ Placements',
  '90% Success Rate',
  '3+ Years Experience',
  'US & Canada Focus',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.8,
    },
  },
}

export function HeroTextOverlay() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0"
    >
      {/* Title — top center */}
      <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none">
        <motion.h1
          variants={staggerItem}
          className="text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span
            className="block italic font-normal text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-white"
            style={{ letterSpacing: '-0.05em' }}
          >
            Your Next Career
          </span>
          <span
            className="block font-normal text-5xl sm:text-7xl md:text-8xl leading-[0.95] -mt-1 text-white"
            style={{ letterSpacing: '-0.08em' }}
          >
            Move{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1A8A71, #B5EACC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Starts Here.
            </span>
          </span>
        </motion.h1>
      </div>

      {/* Description — bottom left */}
      <motion.div
        variants={staggerItem}
        className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px]"
      >
        <p className="text-sm text-white/80 leading-relaxed">
          We help ambitious professionals land full-time roles with leading employers across the US and
          Canada — with guaranteed interviews, expert preparation, and a dedicated recruiter at every
          step.
        </p>
      </motion.div>

      {/* CTA — bottom right */}
      <motion.div
        variants={staggerItem}
        className="absolute bottom-10 sm:bottom-24 right-10 md:right-14 max-w-[260px] flex flex-col items-start gap-5"
      >
        <div className="flex flex-col items-start gap-3">
          <CTAButton label="Book a Free Consultation" href="/contact" size="md" />
          <OutlineButton label="Start Your Journey" href="/process" />
        </div>
      </motion.div>

      {/* Trust strip — bottom center */}
      <motion.div
        variants={staggerItem}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-x-5 gap-y-2"
      >
        {trustItems.map((item) => (
          <span key={item} className="flex items-center gap-1.5 text-sm text-white/60">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 1.4 }}
              className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20"
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M1.5 4L3.5 6L6.5 2" stroke="#1A8A71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
