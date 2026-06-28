import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { IconName } from '@/config/icons'

type PillarCardProps = {
  icon: IconName
  title: string
  description: string
  className?: string
}

export function PillarCard({ icon, title, description, className }: PillarCardProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
        <Icon name={icon} size="md" className="text-emerald-500" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
      <p className="body-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  )
}
