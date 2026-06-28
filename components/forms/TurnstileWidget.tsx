'use client'

import { useEffect, useRef, useCallback } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string
      remove: (widgetId: string) => void
    }
  }
}

type TurnstileOptions = {
  sitekey: string
  theme?: 'light' | 'dark' | 'auto'
  callback?: (token: string) => void
  'expired-callback'?: () => void
}

type TurnstileWidgetProps = {
  siteKey: string
  onToken: (token: string) => void
  onExpire?: () => void
}

export function TurnstileWidget({ siteKey, onToken, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const onTokenRef = useRef(onToken)
  const onExpireRef = useRef(onExpire)

  useEffect(() => { onTokenRef.current = onToken })
  useEffect(() => { onExpireRef.current = onExpire })

  const renderWidget = useCallback(() => {
    if (!containerRef.current || widgetIdRef.current || !window.turnstile) return
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: 'dark',
      callback: (token) => onTokenRef.current(token),
      'expired-callback': () => onExpireRef.current?.(),
    })
  }, [siteKey])

  useEffect(() => {
    const SCRIPT_ID = 'cf-turnstile-script'
    const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

    if (window.turnstile) {
      renderWidget()
      return
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = SCRIPT_SRC
      script.async = true
      script.defer = true
      script.onload = renderWidget
      document.head.appendChild(script)
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval)
          renderWidget()
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [renderWidget])

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className="min-h-[65px]" />
}
