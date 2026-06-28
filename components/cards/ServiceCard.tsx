'use client'

import { motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { TextLinkButton } from '@/components/ui/TextLinkButton'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type ServiceCardProps = {
  icon: IconName
  title: string
  description: string
  href?: string
  className?: string
}

export function ServiceCard({ icon, title, description, href, className }: ServiceCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn(
        'group relative flex flex-col gap-4 rounded-xl p-6',
        'glass border border-white/8',
        className,
      )}
      variants={{
        rest: { y: 0, boxShadow: '0 0 0 rgba(26,138,113,0)' },
        hover: {
          y: -4,
          boxShadow: '0 8px 32px rgba(26,138,113,0.2)',
          transition: { duration: 0.2 },
        },
      }}
    >
      <motion.div
        className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/8"
        variants={{
          rest: { backgroundColor: 'rgba(255,255,255,0.08)' },
          hover: { backgroundColor: 'rgba(26,138,113,0.15)', transition: { duration: 0.2 } },
        }}
      >
        <motion.span
          variants={{
            rest: { color: '#FFFFFF' },
            hover: { color: '#1A8A71', transition: { duration: 0.2 } },
          }}
        >
          <Icon name={icon} size="md" aria-hidden="true" />
        </motion.span>
      </motion.div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
        <p className="body-sm text-white/60 leading-relaxed">{description}</p>
      </div>

      {href && (
        <div className="mt-auto pt-2">
          <TextLinkButton label="Learn more" href={href} />
        </div>
      )}
    </motion.div>
  )
}
