'use client'

import { motion } from 'motion/react'
import { processSteps } from '@/content/process-steps'
import { ProcessStepCard } from '@/components/cards/ProcessStepCard'
import { MOTION } from '@/config/motion'
import type { IconName } from '@/config/icons'

/**
 * Sequential card stack used on mobile and as the reduced-motion fallback.
 * No SVG path, no scroll-linked animation — each card reveals independently
 * via `whileInView`. A dashed left border visually connects the steps.
 */
export function ProcessPathMobile() {
  return (
    <div className="relative mx-auto max-w-xl pl-8">
      {/* Dashed connecting line */}
      <div
        className="absolute left-[11px] top-2 bottom-2 w-px border-l-2 border-dashed border-emerald-500/30"
        aria-hidden="true"
      />

      <ol className="flex flex-col gap-6">
        {processSteps.map((step) => (
          <motion.li
            key={step.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: MOTION.ease.brand }}
            className="relative"
          >
            {/* Node marker on the line */}
            <span
              className="absolute -left-8 top-6 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-emerald-500 bg-ink-900"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <ProcessStepCard
              stepNumber={step.number}
              icon={step.icon as IconName}
              title={step.title}
              description={step.description}
            />
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
