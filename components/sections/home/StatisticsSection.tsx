'use client'

import { motion } from 'motion/react'
import { stats } from '@/content/stats'
import { CountUp } from '@/components/ui/CountUp'
import { RevealSection } from '@/components/motion/RevealSection'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import { AuroraBackground } from '@/components/motion/AuroraBackground'

const statVariant = {
  hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function StatisticsSection() {
  return (
    <AuroraBackground>
      <section id="stats" aria-label="Our Results" className="relative overflow-hidden section-padding">
        <div className="container-site relative z-10">
          {/* Section header */}
          <RevealSection direction="left">
            <div className="mb-20 flex flex-col gap-3">
              <span className="eyebrow">Our Impact</span>
              <h2
                className="text-white"
                style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: 'clamp(3rem, 6vw, 6rem)',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  lineHeight: 1.0,
                  textTransform: 'uppercase',
                }}
              >
                Results That{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #1A8A71 0%, #B5EACC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Speak for Themselves.
                </span>
              </h2>
            </div>
          </RevealSection>

          {/* Stats — clip-wipe reveal with stagger */}
          <StaggerContainer
            className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-5"
            staggerDelay={0.1}
            delayChildren={0.05}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                variants={statVariant}
                className="relative flex flex-col gap-4 px-6 py-8 first:pl-0"
                style={{
                  borderLeft: i !== 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}
              >
                {/* Accent top rule — animates in with a width wipe */}
                <motion.div
                  className="mb-2 h-px"
                  initial={{ width: 0 }}
                  whileInView={{ width: '2rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ background: 'rgba(26,138,113,0.7)' }}
                />

                {/* Number */}
                <div className="flex items-baseline gap-0.5">
                  {stat.prefix && (
                    <span
                      className="text-emerald-400"
                      style={{
                        fontFamily: 'var(--font-condensed)',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {stat.prefix}
                    </span>
                  )}
                  <span
                    className="text-white"
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)',
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: '0.02em',
                    }}
                  >
                    <CountUp value={stat.value} />
                  </span>
                  {stat.suffix && (
                    <span
                      className="text-emerald-400"
                      style={{
                        fontFamily: 'var(--font-condensed)',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p
                  className="text-white/45 leading-snug"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Bottom tagline */}
          <RevealSection delay={0.3}>
            <p
              className="mt-16 max-w-lg text-white/30"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}
            >
              Real outcomes for real professionals — built through trust, expertise, and relentless advocacy.
            </p>
          </RevealSection>
        </div>
      </section>
    </AuroraBackground>
  )
}
