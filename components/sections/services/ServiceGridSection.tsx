import { services } from '@/content/services'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import { RevealSection } from '@/components/motion/RevealSection'

export function ServiceGridSection() {
  return (
    <section id="services-grid" className="section-padding bg-ink-900">
      <div className="container-site">
        <RevealSection direction="left">
          <div className="mb-14 flex flex-col items-center gap-4 text-center">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="text-balance max-w-2xl">
              Everything You Need to{' '}
              <span className="text-gradient">Land Your Role.</span>
            </h2>
            <p className="body-lg max-w-xl text-white/60">
              From your first profile review to your first day on the job — a complete placement
              service built around your career goals.
            </p>
          </div>
        </RevealSection>

        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.07}
          delayChildren={0.1}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
