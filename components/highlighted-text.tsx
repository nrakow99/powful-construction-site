"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function HighlightedText({ children }: { children: React.ReactNode }) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (spanRef.current) {
      observer.observe(spanRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={spanRef} className="relative inline-block">
      {children}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-px bg-[rgb(251,146,60)]/50 transition-all duration-700 ease-out"
        style={{ width: isVisible ? "100%" : "0%" }}
      />
    </span>
  )
}
