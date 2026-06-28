import { cn } from '@/lib/utils'

type PageWrapperProps = {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main id="main-content" className={cn('flex-1', className)}>
      {children}
    </main>
  )
}
