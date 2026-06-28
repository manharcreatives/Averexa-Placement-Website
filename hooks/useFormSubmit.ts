'use client'

import { useState, useCallback } from 'react'
import type { APIResponse } from '@/types/api'

export type FormSubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function useFormSubmit<T>(endpoint: string) {
  const [status, setStatus] = useState<FormSubmitStatus>('idle')

  const onSubmit = useCallback(
    async (data: T) => {
      setStatus('loading')

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        const result = (await response.json()) as APIResponse<unknown>

        if (result.success) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    },
    [endpoint],
  )

  const reset = useCallback(() => {
    setStatus('idle')
  }, [])

  return { onSubmit, status, reset }
}
