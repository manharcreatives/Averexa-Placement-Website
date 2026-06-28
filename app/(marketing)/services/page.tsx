import type { Metadata } from 'next'
import { pageMetadata } from '@/config/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildServiceSchema } from '@/lib/schemas/service'
import { services } from '@/content/services'
import { ServicesHero } from '@/components/sections/services/ServicesHero'
import { ServiceGridSection } from '@/components/sections/services/ServiceGridSection'
import { ServicesFAQSection } from '@/components/sections/services/ServicesFAQSection'
import { CTASection } from '@/components/sections/home/CTASection'

export const metadata: Metadata = pageMetadata({
  title: 'Our Services',
  description:
    'IT placement, non-IT placement, executive search, resume optimization, interview preparation, and career guidance — end-to-end support for your US & Canada career move.',
})

export default function ServicesPage() {
  return (
    <main id="main-content">
      {services.map((service) => (
        <JsonLd
          key={service.id}
          schema={buildServiceSchema({
            name: service.title,
            description: service.description,
            url: '/services',
          })}
        />
      ))}
      <ServicesHero />
      <ServiceGridSection />
      <ServicesFAQSection />
      <CTASection />
    </main>
  )
}
