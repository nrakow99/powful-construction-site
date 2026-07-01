"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    closeMobileMenu()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "bg-primary/95 backdrop-blur-md py-2.5 top-3 left-3 right-3 rounded-xl shadow-lg shadow-black/10"
          : "bg-transparent py-3 top-0 left-0 right-0",
      )}
    >
      <nav className="container mx-auto px-5 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0" onClick={scrollToTop}>
          <span className="text-white font-medium text-sm md:text-base tracking-tight leading-tight">
            Powful Construction
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center text-xs md:text-sm px-4 py-2 bg-white text-foreground border border-white/20 hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
        >
          Request a Consultation
        </Link>

        <button
          className="lg:hidden text-white p-1 -mr-1"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[52px] bg-primary/98 backdrop-blur-md z-40">
          <div className="container mx-auto px-5 py-8 flex flex-col h-full">
            <ul className="flex flex-col gap-5 mb-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white text-2xl font-light block py-1"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center text-sm px-5 py-3 bg-white text-foreground hover:bg-white/90 transition-colors duration-200 w-full"
              onClick={closeMobileMenu}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
