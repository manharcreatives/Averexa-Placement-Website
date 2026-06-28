'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Icon } from './Icon'
import type { IconName } from '@/config/icons'

type IconButtonProps = {
  'aria-label': string
  icon: IconName
  onClick?: () => void
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'glass' | 'solid'
  className?: string
  disabled?: boolean
}

const sizeMap = {
  sm: { button: 'h-8 w-8', icon: 'sm' as const },
  md: { button: 'h-10 w-10', icon: 'md' as const },
  lg: { button: 'h-12 w-12', icon: 'lg' as const },
}

const variantMap = {
  ghost: 'hover:bg-white/10 text-white',
  glass: 'glass text-white',
  solid: 'bg-emerald-500 hover:bg-emerald-400 text-white',
}

export function IconButton({
  'aria-label': ariaLabel,
  icon,
  onClick,
  size = 'md',
  variant = 'ghost',
  className,
  disabled = false,
}: IconButtonProps) {
  const { button, icon: iconSize } = sizeMap[size]

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={cn(
        'inline-flex items-center justify-center rounded-md transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        button,
        variantMap[variant],
        className,
      )}
    >
      <Icon name={icon} size={iconSize} aria-hidden="true" />
    </motion.button>
  )
}
