"use client"

import { useInView } from "@/hooks/use-in-view"
import { Clock, Radio, PlayCircle } from "lucide-react"

const serviceTimes = [
  {
    name: "Sunday Worship",
    time: "9:00 AM & 11:00 AM",
    description: "Join us for worship, prayer, and an inspiring message.",
  },
  {
    name: "Bible Study",
    time: "Wednesday 7:00 PM",
    description: "Dive deeper into God&apos;s Word with our midweek study.",
  },
  {
    name: "Prayer Meeting",
    time: "Friday 6:30 PM",
    description: "Come together in prayer and fellowship.",
  },
  {
    name: "Youth Service",
    time: "Saturday 5:00 PM",
    description: "Engaging services designed for our young people.",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Church Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Join Us in Worship
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether in person or online, we invite you to experience the presence of God with us.
          </p>
        </div>

        {/* Service Times */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {serviceTimes.map((service, index) => (
            <div
              key={service.name}
              className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <Clock className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-accent font-medium mb-2">{service.time}</p>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Live Stream & Sermons */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Live Stream */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Radio className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Live Stream
              </h3>
              <span className="px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full animate-pulse">
                LIVE
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              {"Can't"} make it in person? Join our live broadcast every Sunday.
            </p>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=UCYour_Channel_ID&autoplay=0"
                title="Church Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Placeholder when stream is offline */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center p-8">
                  <Radio className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Live stream will appear here during service times
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sermons Playlist */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <PlayCircle className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Recent Sermons
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Missed a service? Catch up on our latest messages.
            </p>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PLYour_Playlist_ID&autoplay=0"
                title="Church Sermons Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center p-8">
                  <PlayCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Sermon playlist will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
