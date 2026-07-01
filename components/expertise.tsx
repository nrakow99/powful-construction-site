"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Building2, Hammer } from "lucide-react"

const services = [
  {
    title: "New Construction",
    description:
      "Ground-up custom homes designed around how your family lives — from layout and structure through finishes and final details.",
    icon: Home,
  },
  {
    title: "Home Additions",
    description:
      "Second stories, expanded kitchens, new primary suites, and other major additions built to match your home's existing character and quality.",
    icon: Building2,
  },
  {
    title: "Renovations",
    description:
      "Kitchen, bath, and whole-home remodels that improve how you use your space — with the level of finish and care a significant project deserves.",
    icon: Hammer,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-28 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.25em] uppercase mb-5">Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.12] tracking-tight mb-5 text-balance">
            Serious residential construction, start to finish
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            We take on substantial projects — not small repairs. Whether you are building new, expanding, or reimagining
            your home, Powful Construction brings the experience and standards your project requires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-6 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <Icon className="w-8 h-8 mb-4 text-foreground" strokeWidth={1.25} />
                <h3 className="text-lg font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
