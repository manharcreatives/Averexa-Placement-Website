import { cn } from '@/lib/utils'
import { Eyebrow } from './Eyebrow'

type SectionHeaderProps = {
  eyebrow?: string
  heading: string
  intro?: string
  align?: 'left' | 'center'
  headingId?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  align = 'left',
  headingId,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'text-center', className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        id={headingId}
        className={cn(
          'h2 text-white',
          align === 'center' && 'mx-auto max-w-2xl',
        )}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={cn(
            'body-lg text-slate-400 max-w-xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
