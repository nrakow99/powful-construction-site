"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  const [submitted, setSubmitted] = useState(false)
  const [projectType, setProjectType] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-28 bg-foreground text-primary-foreground scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <p className="text-primary-foreground/60 text-xs md:text-sm tracking-[0.25em] uppercase mb-5">
              Contact
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.12] tracking-tight mb-5 text-balance">
              Let&apos;s talk about your project
            </h2>

            <p className="text-primary-foreground/75 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Whether you are planning a custom home, a major addition, or a full interior remodel, we are happy to
              discuss your goals and explain how we work. Reach out by phone, email, or the form — we respond promptly.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
              <a
                href="tel:+14086877607"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-6 py-3 text-sm hover:bg-primary-foreground/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                408-687-7607
              </a>
              <a
                href="mailto:powfulconstruction@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-6 py-3 text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email us
              </a>
            </div>

            <div className="space-y-2 text-sm text-primary-foreground/65">
              <p>Powful Construction, Inc.</p>
              <p>License #853051</p>
              <p>Silicon Valley, CA, USA</p>
            </div>
          </div>

          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-lg font-medium mb-2">Thank you for reaching out.</p>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                  We&apos;ve received your message and will be in touch shortly. For immediate questions, call{" "}
                  <a href="tel:+14086877607" className="underline underline-offset-2 hover:text-primary-foreground">
                    408-687-7607
                  </a>
                  .
                </p>
                <a
                  href="mailto:powfulconstruction@gmail.com"
                  className="inline-flex items-center gap-2 text-sm hover:text-primary-foreground/80 transition-colors"
                >
                  powfulconstruction@gmail.com
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary-foreground/80">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-foreground/80">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary-foreground/80">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="408-555-0100"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-primary-foreground/80">
                      City
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="e.g. Palo Alto"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-primary-foreground/80">
                      Project Type
                    </Label>
                    <Select name="projectType" value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger
                        id="projectType"
                        className="w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                      >
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-construction">New Construction</SelectItem>
                        <SelectItem value="addition">Home Addition</SelectItem>
                        <SelectItem value="renovation">Renovation / Remodel</SelectItem>
                        <SelectItem value="other">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-primary-foreground/80">
                      Estimated Budget
                    </Label>
                    <Select name="budget">
                      <SelectTrigger
                        id="budget"
                        className="w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                      >
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="250-500k">$250k – $500k</SelectItem>
                        <SelectItem value="500k-1m">$500k – $1M</SelectItem>
                        <SelectItem value="1m-plus">$1M+</SelectItem>
                        <SelectItem value="undecided">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-primary-foreground/80">
                    Timeline
                  </Label>
                  <Select name="timeline">
                    <SelectTrigger
                      id="timeline"
                      className="w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                    >
                      <SelectValue placeholder="When are you hoping to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-3">Within 3 months</SelectItem>
                      <SelectItem value="3-6">3 – 6 months</SelectItem>
                      <SelectItem value="6-12">6 – 12 months</SelectItem>
                      <SelectItem value="12-plus">12+ months</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary-foreground/80">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, property, and what you are looking to accomplish."
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-primary-foreground text-foreground hover:bg-primary-foreground/90 px-8"
                >
                  Request a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
