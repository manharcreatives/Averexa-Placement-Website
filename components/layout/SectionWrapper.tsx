import { cn } from '@/lib/utils'

type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
  id?: string
  'aria-labelledby'?: string
}

export function SectionWrapper({
  children,
  className,
  id,
  'aria-labelledby': ariaLabelledBy,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('section-padding', className)}
    >
      {children}
    </section>
  )
}
