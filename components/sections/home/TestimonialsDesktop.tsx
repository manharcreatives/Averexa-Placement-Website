'use client'

import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { testimonials } from '@/content/testimonials'

const colA = [testimonials[0]!, testimonials[1]!, testimonials[2]!]
const colB = [testimonials[3]!, testimonials[4]!, testimonials[0]!]

function ScrollColumn({
  items,
  duration,
  reverse = false,
}: {
  items: typeof colA
  duration: number
  reverse?: boolean
}) {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden" style={{ height: '520px' }}>
      <div
        className="flex flex-col gap-4"
        style={{
          animation: `testimonial-scroll-${reverse ? 'up' : 'down'} ${duration}s linear infinite`,
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.animationPlayState = 'running'
        }}
        onFocus={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused'
        }}
        onBlur={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.animationPlayState = 'running'
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard
            key={`${t.id}-${i}`}
            quote={t.quote}
            name={t.name}
            role={t.title}
          />
        ))}
      </div>

      {/* Fade top/bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink-900 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-900 to-transparent" aria-hidden="true" />
    </div>
  )
}

export function TestimonialsDesktop() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <ScrollColumn items={colA} duration={18} />
        <ScrollColumn items={colB} duration={22} reverse />
      </div>

      <style>{`
        @keyframes testimonial-scroll-down {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes testimonial-scroll-up {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
