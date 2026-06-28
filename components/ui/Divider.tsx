import { cn } from '@/lib/utils'

type DividerProps = {
  variant?: 'rule'
  className?: string
}

export function Divider({ variant = 'rule', className }: DividerProps) {
  if (variant === 'rule') {
    return (
      <hr
        className={cn('border-t border-emerald-800/30', className)}
        role="separator"
      />
    )
  }

  return null
}
