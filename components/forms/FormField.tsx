'use client'

import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Icon } from '@/components/ui/Icon'
import { FormError } from './FormError'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  error?: string | undefined
  leadingIcon?: IconName
  hint?: string | undefined
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(function FormField(
  { label, name, error, leadingIcon, hint, className, ...rest },
  ref,
) {
  const errorId = error ? `${name}-error` : undefined
  const hintId = hint ? `${name}-hint` : undefined

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={name} className={cn(error && 'text-red-400')}>
        {label}
      </Label>

      <div className="relative">
        {leadingIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
            <Icon name={leadingIcon} size="sm" aria-hidden="true" />
          </span>
        )}
        <Input
          ref={ref}
          id={name}
          name={name}
          aria-invalid={!!error}
          aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
          className={cn(leadingIcon && 'pl-9', error && 'border-red-400 focus-visible:ring-red-400', className)}
          {...rest}
        />
      </div>

      {hint && !error && (
        <p id={hintId} className="text-xs text-white/40">
          {hint}
        </p>
      )}

      <FormError message={error} id={errorId} />
    </div>
  )
})
