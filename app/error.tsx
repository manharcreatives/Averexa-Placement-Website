'use client'

import { ErrorContent } from '@/components/error/ErrorContent'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: Props) {
  return <ErrorContent reset={reset} />
}
