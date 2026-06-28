'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Icon } from '@/components/ui/Icon'
import { useReducedMotionContext } from '@/hooks/useReducedMotionContext'
import { cn } from '@/lib/utils'
import type { FormSubmitStatus } from '@/hooks/useFormSubmit'

type SubmitButtonProps = {
  status: FormSubmitStatus
  idleLabel?: string
  loadingLabel?: string
  successLabel?: string
  errorLabel?: string
  className?: string
}

const stateConfig = {
  idle: { label: 'Submit', icon: 'ArrowRight' as const },
  loading: { label: 'Submitting…', icon: 'Loader2' as const },
  success: { label: 'Sent!', icon: 'CheckCircle' as const },
  error: { label: 'Try Again', icon: 'AlertCircle' as const },
}

export function SubmitButton({
  status,
  idleLabel,
  loadingLabel,
  successLabel,
  errorLabel,
  className,
}: SubmitButtonProps) {
  const { shouldReduceMotion } = useReducedMotionContext()
  const isLoading = status === 'loading'

  const labels: Record<FormSubmitStatus, string> = {
    idle: idleLabel ?? stateConfig.idle.label,
    loading: loadingLabel ?? stateConfig.loading.label,
    success: successLabel ?? stateConfig.success.label,
    error: errorLabel ?? stateConfig.error.label,
  }

  const stateColors: Record<FormSubmitStatus, string> = {
    idle: 'bg-emerald-500 hover:bg-emerald-400',
    loading: 'bg-emerald-600 cursor-wait',
    success: 'bg-emerald-400',
    error: 'bg-red-500 hover:bg-red-400',
  }

  return (
    <button
      type="submit"
      disabled={isLoading}
      aria-live="polite"
      aria-busy={isLoading}
      className={cn(
        'relative h-11 px-6 rounded-lg font-medium text-sm text-white overflow-hidden',
        'inline-flex items-center justify-center gap-2',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
        'disabled:cursor-wait',
        stateColors[status],
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="inline-flex items-center gap-2"
        >
          <Icon
            name={stateConfig[status].icon}
            size="sm"
            aria-hidden="true"
            className={cn(status === 'loading' && 'animate-spin')}
          />
          {labels[status]}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
