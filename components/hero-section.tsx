"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * 0.3
      hero.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div
        ref={heroRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-slide-up">
          Welcome to Our Church
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 text-balance leading-tight animate-slide-up animation-delay-100">
          A Place of Faith, Hope & Love
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty animate-slide-up animation-delay-200">
          Join our welcoming community as we grow together in faith, serve one another in love, and share the hope that transforms lives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            Join Us Sunday
          </a>
          <a
            href="#vision"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#vision" aria-label="Scroll to next section">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
