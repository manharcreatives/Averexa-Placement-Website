'use client'

import { motion, type MotionValue } from 'motion/react'

type ProcessPathSVGProps = {
  pathLength: MotionValue<number>
}

/**
 * A vertical emerald rail that draws progressively as the user scrolls.
 * `preserveAspectRatio="none"` stretches the line to the container height;
 * `vectorEffect="non-scaling-stroke"` keeps the stroke crisp at 2px.
 */
export function ProcessPathSVG({ pathLength }: ProcessPathSVGProps) {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      viewBox="0 0 2 100"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* Static track */}
      <path
        d="M1 0 L1 100"
        stroke="rgba(148,163,184,0.18)"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
      {/* Animated draw */}
      <motion.path
        d="M1 0 L1 100"
        stroke="#1A8A71"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        style={{ pathLength }}
      />
    </svg>
  )
}
