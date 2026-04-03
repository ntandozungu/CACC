"use client"

import { useInView } from "@/hooks/use-in-view"
import { Heart, Users, HandHeart, BookOpen } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Faith",
    description: "Grounded in the Word of God, we pursue a deep and authentic relationship with Christ.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of togetherness, supporting and uplifting one another.",
  },
  {
    icon: HandHeart,
    title: "Service",
    description: "Called to serve others with compassion, extending God&apos;s love to all.",
  },
  {
    icon: BookOpen,
    title: "Growth",
    description: "Committed to lifelong learning and spiritual development in every season.",
  },
]

export function VisionSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section
      id="vision"
      ref={ref}
      className="py-20 lg:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Our Vision
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Building a Community of Believers
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our vision is to be a thriving church that transforms lives through the Gospel, equips believers for ministry, and impacts our community with the love of Jesus Christ.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className={`text-center p-6 rounded-xl bg-background hover:shadow-lg transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-primary mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Scripture Quote */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-serif text-xl sm:text-2xl text-foreground italic mb-4">
              {'"For where two or three gather in my name, there am I with them."'}
            </p>
            <cite className="text-muted-foreground not-italic">
              — Matthew 18:20
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
