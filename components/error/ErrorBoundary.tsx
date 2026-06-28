'use client'

import { Component, type ReactNode } from 'react'
import { ErrorContent } from './ErrorContent'

type Props = { children: ReactNode; fallback?: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <ErrorContent reset={() => this.setState({ hasError: false })} />
    }
    return this.props.children
  }
}
