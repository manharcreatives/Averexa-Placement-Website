import { Icons, type IconName } from '@/config/icons'
import { cn } from '@/lib/utils'

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
}

type IconProps = {
  name: IconName
  size?: IconSize
  strokeWidth?: number
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
  'aria-label'?: string
}

export function Icon({
  name,
  size = 'md',
  strokeWidth = 1.5,
  className,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
}: IconProps) {
  const LucideIcon = Icons[name]
  const px = sizeMap[size]

  return (
    <LucideIcon
      width={px}
      height={px}
      strokeWidth={strokeWidth}
      className={cn('shrink-0', className)}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    />
  )
}
