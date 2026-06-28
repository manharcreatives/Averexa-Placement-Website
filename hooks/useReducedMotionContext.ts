'use client'

import { useContext } from 'react'
import { ReducedMotionContext } from '@/contexts/ReducedMotionContext'

export function useReducedMotionContext() {
  return useContext(ReducedMotionContext)
}
