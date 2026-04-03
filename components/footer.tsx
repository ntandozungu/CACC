"use client"

import { Church, Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Missions", href: "#missions" },
  { label: "Visit Us", href: "#location" },
  { label: "Give", href: "#giving" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Church className="h-8 w-8" />
              <span className="font-serif text-xl font-semibold">
                Grace Community
              </span>
            </a>
            <p className="text-primary-foreground/80 mb-6">
              A welcoming community where faith grows, lives are transformed, and everyone belongs.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Service Times</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <strong className="text-primary-foreground">Sunday Worship</strong>
                <br />
                9:00 AM & 11:00 AM
              </li>
              <li>
                <strong className="text-primary-foreground">Bible Study</strong>
                <br />
                Wednesday 7:00 PM
              </li>
              <li>
                <strong className="text-primary-foreground">Prayer Meeting</strong>
                <br />
                Friday 6:30 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-primary-foreground/80 space-y-3">
              <p>
                123 Faith Avenue<br />
                Springfield, ST 12345
              </p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@gracecommunity.church"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@gracecommunity.church
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Grace Community Church. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with love for the glory of God
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
