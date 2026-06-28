'use client'

import { motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { MOTION } from '@/config/motion'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type ProcessNodeContentProps = {
  icon: IconName
  title: string
  description: string
  align: 'left' | 'right'
  active: boolean
}

export function ProcessNodeContent({
  icon,
  title,
  description,
  align,
  active,
}: ProcessNodeContentProps) {
  return (
    <motion.div
      // Content is always present in the DOM (accessible to screen readers and
      // readable without scrolling). Activation only adjusts emphasis.
      initial={false}
      animate={{ opacity: active ? 1 : 0.55, y: active ? 0 : 8 }}
      transition={{ duration: 0.4, ease: MOTION.ease.brand, delay: active ? 0.06 : 0 }}
      className={cn(
        'flex flex-col gap-2 rounded-xl border border-white/8 p-6 glass',
        align === 'left' ? 'text-right items-end' : 'text-left items-start',
      )}
    >
      <div className="flex items-center gap-2">
        <Icon name={icon} size="sm" className="text-emerald-500 flex-shrink-0" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
      </div>
      <p className="body-sm text-white/60 leading-relaxed max-w-sm">{description}</p>
    </motion.div>
  )
}
