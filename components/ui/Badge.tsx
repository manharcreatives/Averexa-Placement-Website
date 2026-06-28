import { cn } from '@/lib/utils'

type BadgeVariant = 'emerald' | 'muted' | 'outline'

type BadgeProps = {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantMap: Record<BadgeVariant, string> = {
  emerald: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
  muted: 'bg-slate-600/20 text-slate-400 border border-slate-600/20',
  outline: 'bg-transparent text-mint-200 border border-mint-200/30',
}

export function Badge({ children, variant = 'emerald', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5',
        'text-xs font-medium font-mono tracking-wide uppercase',
        variantMap[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
