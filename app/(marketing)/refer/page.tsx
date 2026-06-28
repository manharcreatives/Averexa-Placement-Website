import type { Metadata } from 'next'
import { pageMetadata } from '@/config/seo'
import { ReferHero } from '@/components/sections/refer/ReferHero'
import { ReferStepsSection } from '@/components/sections/refer/ReferStepsSection'
import { ReferralFormSection } from '@/components/sections/refer/ReferralFormSection'
import { CTASection } from '@/components/sections/home/CTASection'

export const metadata: Metadata = pageMetadata({
  title: 'Refer & Earn',
  description:
    'Know someone exceptional? Refer them to Averexa and earn a reward when they are successfully placed in a full-time role across the US and Canada.',
})

export default function ReferPage() {
  return (
    <main id="main-content">
      <ReferHero />
      <ReferStepsSection />
      <ReferralFormSection />
      <CTASection />
    </main>
  )
}
