"use client"

import { useInView } from "@/hooks/use-in-view"
import { Heart, Building2, CreditCard } from "lucide-react"

const bankDetails = {
  bankName: "First National Bank",
  accountName: "Grace Community Church",
  accountNumber: "1234567890",
  branchCode: "001234",
  swiftCode: "FNBAUS12",
}

export function GivingSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="giving"
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
            Give / Donations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Support Our Ministry
          </h2>
          <p className="text-lg text-muted-foreground">
            Your generous giving enables us to continue our mission of spreading the Gospel, serving our community, and making a lasting impact for the Kingdom of God.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Encouragement Message */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-background rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Why We Give
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Giving is an act of worship that reflects our trust in God and our commitment to His work. Every contribution, no matter the size, makes a difference.
                </p>
                <p>
                  Your tithes and offerings support our ministries, community outreach programs, building maintenance, and missionary work around the world.
                </p>
                <blockquote className="border-l-4 border-accent pl-4 italic text-foreground">
                  {'"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."'}
                  <cite className="block mt-2 text-sm text-muted-foreground not-italic">
                    — 2 Corinthians 9:7
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Banking Details */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-background rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Banking Details
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Bank Name", value: bankDetails.bankName },
                  { label: "Account Name", value: bankDetails.accountName },
                  { label: "Account Number", value: bankDetails.accountNumber },
                  { label: "Branch Code", value: bankDetails.branchCode },
                  { label: "SWIFT Code", value: bankDetails.swiftCode },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Please use your name as the payment reference so we can acknowledge your gift.
              </p>

              {/* Online Giving Button */}
              <div className="mt-8">
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard className="h-5 w-5" />
                  Online Giving Coming Soon
                </button>
                <p className="mt-3 text-xs text-center text-muted-foreground">
                  We are working on providing secure online payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
