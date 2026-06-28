'use client'

import { useCallback, useEffect, useState } from 'react'
import { animate, useMotionValue } from 'motion/react'
import { useReducedMotionContext } from './useReducedMotionContext'

export function useCounterAnimation(finalValue: number, duration = 0.8, decimals = 0) {
  const { shouldReduceMotion } = useReducedMotionContext()
  const motionValue = useMotionValue(0)
  const format = (v: number) => v.toFixed(decimals)
  const [displayValue, setDisplayValue] = useState(
    shouldReduceMotion ? format(finalValue) : format(0),
  )
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (v) => {
      setDisplayValue(format(v))
    })
    return unsubscribe
    // format is stable — decimals doesn't change after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionValue])

  const trigger = useCallback(() => {
    if (hasTriggered) return
    setHasTriggered(true)

    if (shouldReduceMotion) {
      setDisplayValue(format(finalValue))
      return
    }

    void animate(motionValue, finalValue, {
      duration,
      ease: 'easeOut',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasTriggered, shouldReduceMotion, finalValue, duration, motionValue])

  return { displayValue, trigger }
}
