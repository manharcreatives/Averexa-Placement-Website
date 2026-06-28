import { cn } from '@/lib/utils'

type ContainerSize = 'narrow' | 'default' | 'wide' | 'full'

type ContainerProps = {
  children: React.ReactNode
  size?: ContainerSize
  className?: string
  as?: React.ElementType
}

const sizeMap: Record<ContainerSize, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-[80rem]',
  wide: 'max-w-[96rem]',
  full: 'max-w-none',
}

export function Container({
  children,
  size = 'default',
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'w-full mx-auto px-6 lg:px-12',
        sizeMap[size],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
