"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { HighlightedText } from "./highlighted-text"

const ABOUT_IMAGE = "/images/about-project.jpg"
const ABOUT_IMAGE_FALLBACK = "/images/exterior.png"

const trustItems = [
  {
    title: "21+ Years",
    description: "Residential construction experience",
  },
  {
    title: "CA License #853051",
    description: "Licensed California contractor",
  },
  {
    title: "Custom Homes & Additions",
    description: "Built for long-term function and quality",
  },
  {
    title: "Silicon Valley",
    description: "Serving homeowners across the region",
  },
]

export function Philosophy() {
  const [imageSrc, setImageSrc] = useState(ABOUT_IMAGE)

  return (
    <section id="about" className="py-24 md:py-28 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-muted-foreground text-xs md:text-sm tracking-[0.25em] uppercase mb-5">About</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.12] tracking-tight mb-8 text-balance">
              Over 21 years building homes
              <br />
              homeowners <HighlightedText>trust</HighlightedText>
            </h2>

            <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-muted hidden lg:block">
              <img
                src={imageSrc}
                alt="Powful Construction residential project in Silicon Valley"
                className="w-full h-full object-cover object-center"
                onError={() => setImageSrc(ABOUT_IMAGE_FALLBACK)}
              />
            </div>
          </div>

          <div className="lg:pt-16">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:hidden mb-8">
              <img
                src={imageSrc}
                alt="Powful Construction residential project in Silicon Valley"
                className="w-full h-full object-cover object-center"
                onError={() => setImageSrc(ABOUT_IMAGE_FALLBACK)}
              />
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Powful Construction, Inc. specializes in large-scale residential work — new home construction, major
                home additions, and interior remodels. With more than 21 years in the industry, we bring disciplined
                craftsmanship, efficient project management, and careful attention to every detail.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                We work closely with each homeowner from the first conversation forward. Our goal is straightforward: to
                understand your vision, protect your investment, and deliver a home that fits the way you live today and
                the years ahead.
              </p>
            </div>

            <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {trustItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      "py-6 md:py-7",
                      index < trustItems.length - 1 && "max-sm:border-b max-sm:border-border",
                      index < 2 && "sm:border-b sm:border-border",
                      index % 2 === 0 && "sm:border-r sm:border-border sm:pr-8 md:pr-10",
                      index % 2 === 1 && "sm:pl-8 md:pl-10",
                    )}
                  >
                    <p className="text-sm font-medium tracking-tight text-foreground mb-1.5">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
