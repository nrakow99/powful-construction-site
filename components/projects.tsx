"use client"

import { useState, useEffect, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Wendy Lane",
    category: "New Construction",
    location: "Silicon Valley, CA",
    description:
      "A custom residential project built with careful planning and a focus on quality throughout.",
    image: "/images/projects/wendy-lane-01.jpg",
    fallback: "/images/hously-1.png",
    alt: "Wendy Lane — custom new construction by Powful Construction in Silicon Valley",
  },
  {
    id: 2,
    title: "Teresita Drive",
    category: "Home Addition",
    location: "Silicon Valley, CA",
    description:
      "A major home addition designed to feel like a natural part of the original residence.",
    image: "/images/projects/teresita-drive-01.jpg",
    fallback: "/images/hously-2.png",
    alt: "Teresita Drive — home addition by Powful Construction in Silicon Valley",
  },
  {
    id: 3,
    title: "Center Avenue",
    category: "Renovation",
    location: "Silicon Valley, CA",
    description:
      "An interior renovation focused on improving how the home functions and feels day to day.",
    image: "/images/projects/center-avenue-01.jpg",
    fallback: "/images/hously-3.png",
    alt: "Center Avenue — interior renovation by Powful Construction in Silicon Valley",
  },
]

function ProjectImage({
  src,
  fallback,
  alt,
  hovered,
}: {
  src: string
  fallback: string
  alt: string
  hovered: boolean
}) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`w-full h-full object-cover object-center transition-transform duration-700 ${
        hovered ? "scale-[1.03]" : "scale-100"
      }`}
      onError={() => {
        if (imageSrc !== fallback) setImageSrc(fallback)
      }}
    />
  )
}

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 md:py-28 bg-secondary/50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <div>
            <p className="text-muted-foreground text-xs md:text-sm tracking-[0.25em] uppercase mb-5">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance">
              Selected projects
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            Start a conversation
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                className="relative overflow-hidden aspect-[4/3] mb-5 bg-muted"
              >
                <ProjectImage
                  src={project.image}
                  fallback={project.fallback}
                  alt={project.alt}
                  hovered={hoveredId === project.id}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top pointer-events-none"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1.5">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {project.category} · {project.location}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
