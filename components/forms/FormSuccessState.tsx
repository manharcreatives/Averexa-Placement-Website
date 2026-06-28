'use client'

import { motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { BRAND_EASE } from '@/lib/motion'

type FormSuccessStateProps = {
  onReset: () => void
  title?: string
  message?: string
  buttonLabel?: string
}

export function FormSuccessState({
  onReset,
  title = 'Enquiry Sent!',
  message = "We've received your message and will get back to you within 1–2 business days.",
  buttonLabel = 'Submit another enquiry',
}: FormSuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center gap-6 py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15"
      >
        <Icon name="CheckCircle2" size="xl" className="text-emerald-400" aria-hidden="true" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: BRAND_EASE, delay: 0.25 }}
        className="flex flex-col gap-2"
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/60 text-sm max-w-xs">{message}</p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.45 }}
        onClick={onReset}
        className="text-sm text-emerald-400 hover:text-emerald-300 underline-offset-2 hover:underline transition-colors"
      >
        {buttonLabel}
      </motion.button>
    </motion.div>
  )
}
