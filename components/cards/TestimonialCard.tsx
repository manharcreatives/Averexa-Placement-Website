import { cn } from '@/lib/utils'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  city?: string
  className?: string
}

export function TestimonialCard({ quote, name, role, city, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'group relative rounded-xl p-6 flex flex-col gap-5',
        'border border-white/[0.07]',
        'transition-all duration-500',
        'hover:border-emerald-500/20',
        className,
      )}
      style={{
        background: 'rgba(255,255,255,0.028)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
        transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(26,138,113,0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)'
      }}
    >
      {/* Decorative open-quote mark */}
      <span
        aria-hidden="true"
        className="absolute top-4 right-5 select-none leading-none text-emerald-500/10"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '5rem',
          lineHeight: 1,
          fontWeight: 700,
          transition: 'color 0.5s ease',
        }}
      >
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote
        className="relative z-10 leading-relaxed text-white/75"
        style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}
      >
        {quote}
      </blockquote>

      {/* Author */}
      <figcaption className="flex items-center gap-3">
        {/* Emerald initial badge */}
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-emerald-400"
          style={{
            background: 'rgba(26,138,113,0.12)',
            border: '1px solid rgba(26,138,113,0.2)',
            fontFamily: 'var(--font-clash, system-ui)',
            letterSpacing: '-0.02em',
          }}
        >
          {name.charAt(0)}
        </div>
        <div className="flex flex-col gap-0.5">
          <span
            className="font-semibold text-white"
            style={{ fontSize: '0.8rem', letterSpacing: '-0.01em' }}
          >
            {name}
          </span>
          <span
            className="text-white/40"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {role}{city && `, ${city}`}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
