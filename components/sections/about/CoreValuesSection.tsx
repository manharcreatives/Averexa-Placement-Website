import { coreValues } from '@/content/core-values'
import { CoreValueCard } from '@/components/cards/CoreValueCard'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import { RevealSection } from '@/components/motion/RevealSection'

export function CoreValuesSection() {
  return (
    <section id="core-values" className="section-padding bg-ink-900/95">
      <div className="container-site">
        <RevealSection direction="right">
          <div className="mb-14 flex flex-col items-center gap-4 text-center">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="text-balance max-w-2xl">
              Values We{' '}
              <span className="text-gradient">Live By.</span>
            </h2>
            <p className="body-lg max-w-xl text-white/60">
              Our core values aren&apos;t just words on a wall — they are the principles that guide
              every interaction, every placement, and every relationship we build.
            </p>
          </div>
        </RevealSection>

        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
          delayChildren={0.1}
        >
          {coreValues.map((value) => (
            <CoreValueCard
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
