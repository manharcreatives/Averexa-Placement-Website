'use client'

import { SpotlightCursor } from './SpotlightCursor'
import { WhatsAppFAB } from './WhatsAppFAB'
import { CookieConsent } from './CookieConsent'
import { AnalyticsTracker } from '@/features/analytics/AnalyticsTracker'

export function GlobalFloatingUI() {
  return (
    <>
      <SpotlightCursor />
      <WhatsAppFAB />
      <CookieConsent />
      <AnalyticsTracker />
    </>
  )
}
