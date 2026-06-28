import Image from 'next/image'
import { cn } from '@/lib/utils'

type OverlayVariant = 'dark-left' | 'dark-top' | 'dark-full' | 'none'

type ImageWithOverlayProps = {
  src: string
  alt: string
  overlayVariant?: OverlayVariant
  priority?: boolean
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

const overlayMap: Record<OverlayVariant, string> = {
  'dark-left':
    'linear-gradient(to right, rgba(0,20,19,0.85) 0%, rgba(0,20,19,0.4) 50%, transparent 100%)',
  'dark-top': 'linear-gradient(to bottom, rgba(0,20,19,0.65) 0%, transparent 60%)',
  'dark-full': 'rgba(0,20,19,0.6)',
  none: 'none',
}

export function ImageWithOverlay({
  src,
  alt,
  overlayVariant = 'dark-left',
  priority = false,
  className,
  fill = true,
  width,
  height,
}: ImageWithOverlayProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          {...(priority && { priority: true })}
          sizes="100vw"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 800}
          height={height ?? 600}
          className="object-cover object-center"
          {...(priority && { priority: true })}
          sizes="100vw"
        />
      )}
      {overlayVariant !== 'none' && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: overlayMap[overlayVariant] }}
        />
      )}
    </div>
  )
}
