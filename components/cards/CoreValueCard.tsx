'use client'

import { motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type CoreValueCardProps = {
  icon: IconName
  title: string
  description: string
  className?: string
}

export function CoreValueCard({ icon, title, description, className }: CoreValueCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'flex flex-col gap-4 rounded-xl p-6',
        'glass border border-white/8',
        className,
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
        <Icon name={icon} size="md" className="text-emerald-500" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
        <p className="body-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
