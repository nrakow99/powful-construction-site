"use client"

import { useState } from "react"
import { HighlightedText } from "./highlighted-text"

const ABOUT_IMAGE = "/images/about-project.jpg"
const ABOUT_IMAGE_FALLBACK = "/images/exterior.png"

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

          <div className="space-y-6 lg:pt-16">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:hidden mb-8">
              <img
                src={imageSrc}
                alt="Powful Construction residential project in Silicon Valley"
                className="w-full h-full object-cover object-center"
                onError={() => setImageSrc(ABOUT_IMAGE_FALLBACK)}
              />
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Powful Construction, Inc. specializes in large-scale residential work — new home construction, major home
              additions, and interior remodels. With more than 21 years in the industry, we bring disciplined
              craftsmanship, efficient project management, and careful attention to every detail.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We work closely with each homeowner from the first conversation forward. Our goal is straightforward: to
              understand your vision, protect your investment, and deliver a home that fits the way you live today and
              the years ahead.
            </p>
            <p className="text-sm text-muted-foreground/80 pt-2">
              Licensed · California #853051 · Serving Silicon Valley
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
