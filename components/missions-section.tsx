"use client"

import { useInView } from "@/hooks/use-in-view"
import { ArrowRight } from "lucide-react"

const missions = [
  {
    title: "Community Food Bank",
    description: "Providing meals and groceries to families in need every Saturday morning at our church campus.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
    tag: "Local Outreach",
  },
  {
    title: "Youth Mentorship Program",
    description: "Connecting young people with mentors who guide them in faith, education, and life skills.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
    tag: "Youth Ministry",
  },
  {
    title: "International Mission Trip",
    description: "Annual mission trips to serve communities abroad, building homes and sharing the Gospel.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    tag: "Global Missions",
  },
  {
    title: "Prison Ministry",
    description: "Bringing hope and the message of redemption to incarcerated individuals through weekly visits.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
    tag: "Outreach",
  },
]

export function MissionsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="missions"
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
            Our Missions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Serving Our Community & Beyond
          </h2>
          <p className="text-lg text-muted-foreground">
            We are called to be the hands and feet of Jesus, reaching out to those in need both locally and around the world.
          </p>
        </div>

        {/* Missions Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <div
              key={mission.title}
              className={`group bg-background rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-card/90 backdrop-blur-sm text-foreground rounded-full">
                  {mission.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {mission.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to get involved in our mission work?
          </p>
          <a
            href="#location"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            Contact Us to Volunteer
          </a>
        </div>
      </div>
    </section>
  )
}
