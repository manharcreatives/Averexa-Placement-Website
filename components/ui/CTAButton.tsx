'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Icon } from './Icon'
import { useReducedMotionContext } from '@/hooks/useReducedMotionContext'
import { EASE_OUT, BRAND_EASE } from '@/lib/motion'
import { trackCTAClick } from '@/features/analytics/events'
import type { CTALocation } from '@/types/analytics'

type CTAButtonSize = 'sm' | 'md' | 'lg'

type CTAButtonProps = {
  label: string
  href?: string
  onClick?: () => void
  size?: CTAButtonSize
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  analyticsLocation?: CTALocation | string
}

const sizeMap: Record<CTAButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-12 px-8 text-base gap-2',
}

const baseClasses =
  'relative inline-flex items-center justify-center rounded-lg font-medium text-white bg-emerald-500 select-none cursor-pointer overflow-hidden transition-colors duration-200 focus-visible:outline-none'

export function CTAButton({
  label,
  href,
  onClick,
  size = 'md',
  disabled = false,
  className,
  type = 'button',
  analyticsLocation,
}: CTAButtonProps) {
  const { shouldReduceMotion } = useReducedMotionContext()

  function handleClick() {
    trackCTAClick(label, analyticsLocation)
    onClick?.()
  }

  const motionProps = disabled
    ? {}
    : {
        initial: 'rest',
        whileHover: 'hover',
        whileTap: 'press',
        variants: {
          rest: { y: 0 },
          hover: shouldReduceMotion
            ? { backgroundColor: '#23A88A' }
            : {
                y: -2,
                backgroundColor: '#23A88A',
                boxShadow: '0 0 24px rgba(26,138,113,0.45)',
                transition: { duration: 0.2, ease: EASE_OUT },
              },
          press: { y: 0, boxShadow: '0 0 12px rgba(26,138,113,0.2)' },
        },
      }

  const arrowVariants = {
    rest: { x: 0 },
    hover: shouldReduceMotion ? { x: 0 } : { x: 4, transition: { duration: 0.25, ease: BRAND_EASE } },
    press: { x: 0 },
  }

  const content = (
    <motion.span
      className={cn(baseClasses, sizeMap[size], disabled && 'opacity-50 cursor-not-allowed', className)}
      {...motionProps}
    >
      <span>{label}</span>
      <motion.span variants={arrowVariants} className="flex items-center">
        <Icon name="ArrowRight" size="sm" aria-hidden="true" />
      </motion.span>
    </motion.span>
  )

  if (href && !disabled) {
    return (
      <Link href={href} onClick={handleClick} className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg">
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg"
    >
      {content}
    </button>
  )
}
