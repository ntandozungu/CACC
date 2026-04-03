"use client"

import { useInView } from "@/hooks/use-in-view"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function LocationSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="location"
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
            Visit Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            {"We'd"} Love to See You
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us for a service and experience the warmth of our community firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Grace Community Church
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    123 Faith Avenue<br />
                    Springfield, ST 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+15551234567"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:info@gracecommunity.church"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@gracecommunity.church
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Monday – Friday: 9:00 AM – 5:00 PM<br />
                    Saturday: 10:00 AM – 2:00 PM<br />
                    Sunday: Closed (Worship Services Only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
