'use client'

import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CardSwap.css'

// Register GSAP plugins on client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { customClass?: string }>(
  ({ customClass, ...rest }, ref) => (
    <div ref={ref} {...rest} className={`card-swap-item ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
  )
)
Card.displayName = 'Card'

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
})

const placeNow = (el: HTMLElement, slot: { x: number; y: number; z: number; zIndex: number }, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  })

interface CardSwapProps {
  width?: number | string
  height?: number | string
  cardDistance?: number
  verticalDistance?: number
  skewAmount?: number
  children: React.ReactNode
  triggerRef?: React.RefObject<HTMLElement>
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 40,
  verticalDistance = 50,
  skewAmount = 4,
  children,
  triggerRef
}) => {
  const childArr = useMemo(() => Children.toArray(children), [children])
  const refs = useMemo(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr])
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !container.current) return

    const total = refs.length
    if (total === 0) return

    // Position cards initially
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
      }
    })

    // Create a ScrollTrigger timeline
    const targetTrigger = triggerRef?.current || container.current
    
    // Total steps = total cards - 1 (since 4 cards means 3 swaps to show all of them)
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: targetTrigger,
        start: 'top top',
        end: '+=2500',
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    })

    // Animate swaps on scroll
    // Loop through cards to build a sequential swap timeline
    for (let swapIdx = 0; swapIdx < total - 1; swapIdx++) {
      const label = `swap_${swapIdx}`
      timeline.addLabel(label)

      // The current front card for this swap step
      const frontCardRef = refs[swapIdx]
      
      // 1. Move front card down and out
      if (frontCardRef.current) {
        timeline.to(frontCardRef.current, {
          y: '+=380',
          x: '-=80',
          z: '+=50',
          duration: 0.6,
          ease: 'power1.inOut'
        }, label)
      }

      // 2. Move other cards forward
      for (let cardIdx = swapIdx + 1; cardIdx < total; cardIdx++) {
        const otherCardRef = refs[cardIdx]
        if (otherCardRef.current) {
          // New slot index for this card
          const newSlotIdx = cardIdx - (swapIdx + 1)
          const slot = makeSlot(newSlotIdx, cardDistance, verticalDistance, total)
          
          timeline.to(otherCardRef.current, {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: 0.6,
            ease: 'power1.inOut'
          }, label)

          // Adjust zIndex mid-way
          timeline.set(otherCardRef.current, {
            zIndex: slot.zIndex
          }, `${label}+=0.3`)
        }
      }

      // Also move previously swapped cards forward if any
      for (let prevIdx = 0; prevIdx < swapIdx; prevIdx++) {
        const prevCardRef = refs[prevIdx]
        if (prevCardRef.current) {
          const newSlotIdx = total - 1 - (swapIdx - prevIdx)
          const slot = makeSlot(newSlotIdx, cardDistance, verticalDistance, total)
          timeline.to(prevCardRef.current, {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: 0.6,
            ease: 'power1.inOut'
          }, label)
        }
      }

      // 3. Move old front card to the very back
      if (frontCardRef.current) {
        const backSlotIdx = total - 1
        const backSlot = makeSlot(backSlotIdx, cardDistance, verticalDistance, total)
        
        timeline.set(frontCardRef.current, {
          zIndex: backSlot.zIndex
        }, `${label}+=0.5`)

        timeline.to(frontCardRef.current, {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: 0.5,
          ease: 'power1.inOut'
        }, `${label}+=0.5`)
      }
    }

    return () => {
      // Clean up trigger instance on unmount
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === targetTrigger) {
          trigger.kill()
        }
      })
    }
  }, [cardDistance, verticalDistance, skewAmount, refs, triggerRef])

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<any>, {
          key: i,
          ref: refs[i],
          style: { 
            width, 
            height, 
            position: 'absolute',
            borderRadius: '24px',
            border: '1px solid #E5E7EB',
            background: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
            transformOrigin: 'center center',
            ...(child.props.style ?? {}) 
          }
        })
      : child
  )

  return (
    <div ref={container} className="relative overflow-visible" style={{ width, height }}>
      {rendered}
    </div>
  )
}

export default CardSwap
