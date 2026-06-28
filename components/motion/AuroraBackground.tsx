'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type AuroraBackgroundProps = {
  children: React.ReactNode
  className?: string
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin: '200px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)}>
      {isVisible && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              100deg,
              #1A8A71 10%,
              #0F5E48 15%,
              #B5EACC 20%,
              #001413 25%,
              #1A8A71 30%
            )`,
            backgroundSize: '200% 200%',
            backgroundPosition: '50% 50%',
            opacity: 0.18,
            animation: 'aurora 60s linear infinite',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
