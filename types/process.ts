export type ProcessStep = {
  id: string
  number: number
  title: string
  description: string
  scrollThreshold: number
}

export const PROCESS_SCROLL_THRESHOLDS = [0.05, 0.22, 0.40, 0.57, 0.74, 0.90] as const
