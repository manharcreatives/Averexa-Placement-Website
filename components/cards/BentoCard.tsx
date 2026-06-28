'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type BentoCardProps = {
  icon: IconName
  title: string
  description: string
  colSpan?: 1 | 2
  className?: string
}

export function BentoCard({ icon, title, description, colSpan = 1, className }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    })
  }

  function handleMouseLeave() {
    setSpotlight((prev) => ({ ...prev, visible: false }))
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative overflow-hidden rounded-xl p-6 glass border border-white/8',
        'flex flex-col gap-4',
        colSpan === 2 && 'col-span-2',
        className,
      )}
    >
      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(200px circle at ${spotlight.x}px ${spotlight.y}px, rgba(26,138,113,0.12), transparent 70%)`,
        }}
      />

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 relative">
        <Icon name={icon} size="md" className="text-emerald-500" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2 relative">
        <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
        <p className="body-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
