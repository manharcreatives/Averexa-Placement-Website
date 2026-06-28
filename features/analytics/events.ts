import type { FormName, CTALocation, ScrollDepth } from '@/types/analytics'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type DataLayerEvent = Record<string, unknown>

function pushEvent(event: DataLayerEvent): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(event)
}

/** Fired on a successful contact or referral submission. */
export function trackFormSubmit(formName: FormName): void {
  pushEvent({ event: 'form_submit', form_name: formName })
}

/** Fired when a primary CTA button is clicked. */
export function trackCTAClick(label: string, location?: CTALocation | string): void {
  pushEvent({ event: 'cta_click', cta_label: label, cta_location: location ?? 'unknown' })
}

/** Fired at 25/50/75/100% scroll-depth milestones. */
export function trackScrollDepth(depth: ScrollDepth): void {
  pushEvent({ event: 'scroll_depth', depth })
}

/** Fired on client-side route changes. */
export function trackPageView(path: string): void {
  pushEvent({ event: 'page_view', page_path: path })
}

/**
 * Updates Google Consent Mode based on the cookie banner choice.
 * Denied by default (set in the consent-default script); granted only on Accept.
 */
export function updateAnalyticsConsent(granted: boolean): void {
  if (typeof window === 'undefined') return
  const value = granted ? 'granted' : 'denied'
  // gtag queues into dataLayer; safe to call even before GTM loads.
  window.gtag?.('consent', 'update', {
    analytics_storage: value,
    ad_storage: value,
  })
  pushEvent({ event: 'consent_update', analytics_consent: value })
}
