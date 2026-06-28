export type Testimonial = {
  id: string
  quote: string
  name: string
  title: string
  company: string
  avatar?: string
  rating?: 1 | 2 | 3 | 4 | 5
  type: 'employer' | 'candidate'
}
