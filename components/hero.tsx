"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [, setAnimationProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const accumulatedScrollRef = useRef(0)
  const lastTouchY = useRef<number>(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atTopOfPage = window.scrollY === 0

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress >= 1) {
          setAnimationComplete(true)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      } else if (atTopOfPage && animationComplete && e.deltaY < 0) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress < 1) {
          setAnimationComplete(false)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const atTopOfPage = window.scrollY === 0
      const currentTouchY = e.touches[0].clientY
      const deltaY = lastTouchY.current - currentTouchY

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress >= 1) {
          setAnimationComplete(true)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      } else if (atTopOfPage && animationComplete && deltaY < 0) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))

        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)

        if (newProgress < 1) {
          setAnimationComplete(false)
        }

        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      }

      lastTouchY.current = currentTouchY
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [animationComplete])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hously-background.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div
        ref={contentRef}
        className="container mx-auto px-6 md:px-12 lg:pt-0 relative z-10 pb-0 pt-24 md:pt-20"
        style={{
          willChange: "transform",
          transform: "translateY(0px)",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="mb-52 md:mb-44 lg:mb-56 max-w-4xl mx-auto">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-center text-white/70 mb-5">
            Silicon Valley · 21+ Years
          </p>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-medium text-balance text-center text-white mb-6 tracking-tight leading-[1.08] drop-shadow-sm">
            Custom Homes, Additions, and Remodels Built with{" "}
            <span className="text-white/95">Lasting Craftsmanship</span>
          </h1>

          <p className="text-center text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 px-1 drop-shadow-sm">
            Powful Construction, Inc. builds custom homes, major additions, and interior remodels for homeowners across
            Silicon Valley — with over 21 years of experience and a focus on quality you can see and feel.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center pointer-events-auto relative z-30 max-w-md sm:max-w-none mx-auto">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center bg-white text-foreground px-7 py-3 text-sm tracking-wide hover:bg-white/90 transition-colors duration-200"
            >
              View Our Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center border border-white/50 text-white px-7 py-3 text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <img
          src="/images/hously-foreground.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
        />
      </div>

      {animationComplete && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-30">
          <ArrowDown className="w-5 h-5 text-white/60" />
        </div>
      )}
    </section>
  )
}
