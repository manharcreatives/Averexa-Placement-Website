'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotionContext } from '@/hooks/useReducedMotionContext'

export function SpotlightCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef<number>(0)
  const { shouldReduceMotion } = useReducedMotionContext()

  useEffect(() => {
    if (shouldReduceMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x, y } = mouseRef.current
      if (x < 0) {
        animFrameRef.current = requestAnimationFrame(draw)
        return
      }
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300)
      gradient.addColorStop(0, 'rgba(26,138,113,0.07)')
      gradient.addColorStop(1, 'rgba(26,138,113,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      animFrameRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    animFrameRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
