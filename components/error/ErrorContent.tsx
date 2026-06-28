'use client'

import { CTAButton } from '@/components/ui/CTAButton'

type ErrorContentProps = {
  reset?: () => void
}

export function ErrorContent({ reset }: ErrorContentProps) {
  return (
    <div className="min-h-screen bg-ink-900 flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-4">Something went wrong</p>
      <h1 className="text-white font-bold mb-4 text-4xl">Unexpected Error</h1>
      <p className="text-white/60 text-lg mb-8 max-w-md">
        We hit an unexpected issue. Our team has been notified. Please try again.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {reset && (
          <button
            onClick={reset}
            className="h-11 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Try Again
          </button>
        )}
        <CTAButton label="Back to Home" href="/" />
      </div>
    </div>
  )
}
