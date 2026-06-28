'use client'

import { motion } from 'motion/react'
import { StatCounter } from '@/components/business/StatCounter'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/motion'

type StatCardProps = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  decimals?: number
  className?: string
}

export function StatCard({ value, suffix, prefix, label, decimals, className }: StatCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn('flex flex-col gap-2', className)}
    >
      <StatCounter
        value={value}
        label={label}
        {...(suffix !== undefined && { suffix })}
        {...(prefix !== undefined && { prefix })}
        {...(decimals !== undefined && { decimals })}
      />
    </motion.div>
  )
}
