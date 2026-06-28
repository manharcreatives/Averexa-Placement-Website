'use client'

import { useRef, useLayoutEffect, useState, useCallback, useEffect } from 'react'
import { useScroll } from 'motion/react'
import { processSteps } from '@/content/process-steps'
import { ProcessStepCard } from './ProcessStepCard'
import { ZigzagPath } from './ZigzagPath'

interface Pt { x: number; y: number }

export function ProcessPathDesktop() {
  const stepsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 85%', 'end end'],
  })

  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const setCardRef = useCallback((i: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[i] = el
  }, [])

  const [pts, setPts] = useState<Pt[]>([])
  const [svgW, setSvgW] = useState(0)
  const [svgH, setSvgH] = useState(0)

  const measure = useCallback(() => {
    const container = stepsRef.current
    if (!container) return
    const scrollTop = window.scrollY
    const cRect = container.getBoundingClientRect()
    const cTop = cRect.top + scrollTop

    const w = container.offsetWidth
    const h = container.offsetHeight
    setSvgW(w)
    setSvgH(h)

    const newPts: Pt[] = []
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const imgEl = card.querySelector('[data-step-image]') as HTMLElement | null
      if (!imgEl) return

      const ir = imgEl.getBoundingClientRect()
      const cx = ir.left + ir.width / 2 - cRect.left
      const topY = ir.top + scrollTop - cTop
      const botY = ir.bottom + scrollTop - cTop

      if (i === 0) {
        // First image: start at bottom-center
        newPts.push({ x: cx, y: botY })
      } else {
        // Entry at top-center of image
        newPts.push({ x: cx, y: topY })
      }

      if (i < cardRefs.current.length - 1) {
        // Exit at bottom-center of image
        newPts.push({ x: cx, y: botY })
      } else {
        // Last image: end at top-center
        newPts.push({ x: cx, y: topY })
      }
    })
    setPts(newPts)
  }, [])

  useLayoutEffect(() => {
    const t = setTimeout(measure, 250)
    const ro = new ResizeObserver(measure)
    if (stepsRef.current) ro.observe(stepsRef.current)
    return () => { clearTimeout(t); ro.disconnect() }
  }, [measure])

  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  return (
    <div ref={stepsRef} className="relative">
      {pts.length >= 2 && (
        <ZigzagPath points={pts} svgW={svgW} svgH={svgH} scrollYProgress={scrollYProgress} />
      )}

      {processSteps.map((step, i) => (
        <ProcessStepCard key={step.id} step={step} index={i} cardRef={setCardRef(i)} />
      ))}
    </div>
  )
}
