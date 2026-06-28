export type Stat = {
  id: string
  value: number
  suffix: string
  prefix?: string
  label: string
  decimals?: number
}

export const stats: Stat[] = [
  {
    id: 'placements',
    value: 120,
    suffix: '+',
    label: 'Successful Placements',
  },
  {
    id: 'success-rate',
    value: 90,
    suffix: '%',
    label: 'Success Rate',
  },
  {
    id: 'experience',
    value: 3,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    id: 'countries',
    value: 2,
    suffix: '',
    label: 'Countries Served',
  },
  {
    id: 'support',
    value: 24,
    suffix: '/7',
    label: 'Candidate Support',
  },
]
