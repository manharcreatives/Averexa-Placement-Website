'use client'

import { motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type BentoCardFeaturedProps = {
  icon: IconName
  title: string
  description: string
  badge?: string
  className?: string
}

export function BentoCardFeatured({
  icon,
  title,
  description,
  badge,
  className,
}: BentoCardFeaturedProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative col-span-2 overflow-hidden rounded-xl p-6',
        'border border-emerald-500/30 bg-emerald-500/5',
        'flex flex-col gap-4',
        className,
      )}
    >
      {/* Persistent ambient emerald glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(26,138,113,0.18), transparent)',
        }}
      />

      {/* Glowing border pulse */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        animate={{
          boxShadow: [
            '0 0 0 1px rgba(26,138,113,0.3)',
            '0 0 16px 2px rgba(26,138,113,0.2)',
            '0 0 0 1px rgba(26,138,113,0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/30">
          <Icon name={icon} size="lg" className="text-emerald-400" aria-hidden="true" />
        </div>

        {badge && (
          <span className="ml-auto flex-shrink-0 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-medium text-emerald-400">
            {badge}
          </span>
        )}
      </div>

      <div className="relative flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white leading-snug">{title}</h3>
        <p className="body-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
