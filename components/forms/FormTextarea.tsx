'use client'

import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FormError } from './FormError'
import { cn } from '@/lib/utils'

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  name: string
  error?: string | undefined
  hint?: string | undefined
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(function FormTextarea(
  { label, name, error, hint, className, ...rest },
  ref,
) {
  const errorId = error ? `${name}-error` : undefined
  const hintId = hint ? `${name}-hint` : undefined

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={name} className={cn(error && 'text-red-400')}>
        {label}
      </Label>

      <Textarea
        ref={ref}
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
        className={cn(error && 'border-red-400 focus-visible:ring-red-400', className)}
        {...rest}
      />

      {hint && !error && (
        <p id={hintId} className="text-xs text-white/40">
          {hint}
        </p>
      )}

      <FormError message={error} id={errorId} />
    </div>
  )
})
