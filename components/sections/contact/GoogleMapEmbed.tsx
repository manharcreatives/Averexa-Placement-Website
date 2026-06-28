'use client'

import { useEffect, useRef, useState } from 'react'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25987606699727!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1671234567890!5m2!1sen!2sin'

export function GoogleMapEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section aria-label="Map" className="relative h-80 sm:h-96">
      <div ref={containerRef} className="absolute inset-0">
        {isVisible ? (
          <iframe
            src={MAP_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Averexa service area map"
            className="opacity-70 grayscale"
          />
        ) : (
          <div className="h-full w-full bg-charcoal-800 animate-pulse" />
        )}
      </div>
    </section>
  )
}
