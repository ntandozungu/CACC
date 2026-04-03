"use client"

import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"

const scriptures = [
  {
    verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
  },
  {
    verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
  },
  {
    verse: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
  },
  {
    verse: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3",
  },
]

export function ScriptureSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { ref, isInView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % scriptures.length)
        setIsTransitioning(false)
      }, 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const currentScripture = scriptures[currentIndex]

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className={`text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Daily Inspiration
        </p>

        <div
          className={`transition-all duration-500 ${
            isTransitioning ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
          } ${isInView ? "" : "opacity-0"}`}
        >
          <blockquote className="mb-6">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic leading-relaxed text-balance">
              {`"${currentScripture.verse}"`}
            </p>
          </blockquote>
          <cite className="text-lg text-primary-foreground/80 not-italic">
            — {currentScripture.reference}
          </cite>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {scriptures.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 300)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-foreground w-6"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to scripture ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
