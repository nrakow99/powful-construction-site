"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const processSteps = [
  {
    title: "Consultation",
    description:
      "We start with a direct conversation about your goals — what you want to build or change, your timeline, and what matters most to you in the finished home.",
  },
  {
    title: "Site Walkthrough",
    description:
      "We walk the property together to understand existing conditions, access, and scope. This is where we ask the practical questions that shape an accurate plan.",
  },
  {
    title: "Estimate & Scope",
    description:
      "You receive a clear proposal outlining the work involved, projected timeline, and investment — so you can make an informed decision before moving forward.",
  },
  {
    title: "Planning & Permits",
    description:
      "We handle pre-construction coordination, including drawings, permits, and scheduling — so when construction begins, the project is organized and ready.",
  },
  {
    title: "Construction",
    description:
      "Our team builds with consistent communication, disciplined site management, and the craftsmanship homeowners expect from a project of this scale.",
  },
  {
    title: "Final Walkthrough",
    description:
      "Before we close out, we walk the completed work with you — reviewing details, addressing any final items, and making sure the result meets your expectations.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="process" className="py-24 md:py-28 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.25em] uppercase mb-5">Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.12] tracking-tight mb-5 text-balance">
            A clear path from first call to finished home
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Every Powful project follows a structured process — so you always know where things stand and what comes
            next.
          </p>
        </div>

        {/* Desktop: visible step grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-x-10 gap-y-12">
          {processSteps.map((step, index) => (
            <div key={step.title} className="border-t border-border pt-6">
              <p className="text-muted-foreground/60 text-xs font-medium tracking-widest mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: accordion */}
        <div className="lg:hidden border-t border-border">
          {processSteps.map((step, index) => (
            <div key={step.title} className="border-b border-border">
              <button
                type="button"
                onClick={() => toggleStep(index)}
                aria-expanded={openIndex === index}
                className="w-full py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="flex items-center gap-4 min-w-0">
                  <span className="text-muted-foreground/60 text-xs font-medium tracking-widest shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium">{step.title}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed pb-5 pl-10 pr-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
