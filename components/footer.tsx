import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-14 md:py-20 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-foreground font-medium text-base tracking-tight">Powful Construction, Inc.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-4">
              Custom homes, major additions, and interior remodels for homeowners across Silicon Valley. Licensed,
              experienced, and built on trust.
            </p>
            <p className="text-muted-foreground text-sm">License #853051</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-foreground transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="tel:+14086877607" className="hover:text-foreground transition-colors">
                  408-687-7607
                </a>
              </li>
              <li>
                <a href="mailto:powfulconstruction@gmail.com" className="hover:text-foreground transition-colors">
                  powfulconstruction@gmail.com
                </a>
              </li>
              <li>Silicon Valley, CA, USA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Powful Construction, Inc. All rights reserved.</p>
          <p>California Contractor License #853051</p>
        </div>
      </div>
    </footer>
  )
}
