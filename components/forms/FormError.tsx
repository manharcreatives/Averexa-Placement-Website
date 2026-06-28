'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useReducedMotionContext } from '@/hooks/useReducedMotionContext'

type FormErrorProps = {
  message?: string | undefined
  id?: string | undefined
}

export function FormError({ message, id }: FormErrorProps) {
  const { shouldReduceMotion } = useReducedMotionContext()

  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          role="alert"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="text-xs text-red-400 mt-1"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}
