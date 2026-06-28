'use client'

import { motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type ProcessStepCardProps = {
  stepNumber: number
  icon: IconName
  title: string
  description: string
  className?: string
}

export function ProcessStepCard({
  stepNumber,
  icon,
  title,
  description,
  className,
}: ProcessStepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn('relative flex gap-4 rounded-xl p-6 glass border border-white/8', className)}
    >
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-sm font-bold text-emerald-500 leading-none">{stepNumber}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <Icon name={icon} size="sm" className="text-emerald-500 flex-shrink-0" aria-hidden="true" />
          <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
        </div>
        <p className="body-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
