import { motion } from "framer-motion";
import { ShieldCheck, MapPin, TrendingUp, Wallet, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Link } from "react-router-dom";

const gallery = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80",
];

const usps = [
  { icon: ShieldCheck, title: "Secure Documentation", desc: "Verified title with government-backed documentation" },
  { icon: MapPin, title: "Prime Ibadan Location", desc: "Lamini-Apete, Ibadan — high-growth residential corridor" },
  { icon: TrendingUp, title: "Fast Appreciation", desc: "Ibadan's fastest-appreciating axis with proven ROI" },
  { icon: Wallet, title: "Flexible Payment", desc: "Instant, 6, 12 and 18-month structured plans" },
  { icon: Building2, title: "Full Infrastructure", desc: "Roads, drainage, security and street lighting delivered" },
  { icon: Sparkles, title: "Developed by Lexshield", desc: "Backed by Lexshield Properties Limited's track record" },
];

export default function LushvilleLanding() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={gallery[0]} alt="Lushville Estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
        </div>
        <div className="relative container-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary bg-primary/20 text-white text-[10px] tracking-[0.3em] uppercase mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Now Selling • Initial Deposit ₦1M
            </div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-primary mb-3">Developed by Lexshield Properties</div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              Lushville<br />
              <span className="text-primary">Estate</span>
            </h1>
            <p className="text-lg text-white/85 mb-10 max-w-xl leading-relaxed">
              A master-planned residential estate in Lamini-Apete, Ibadan. All prices inclusive, no hidden charges — engineered for families and investors seeking long-term value.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-white/15 max-w-lg">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-2">From</div>
                <div className="font-serif text-2xl text-white">₦5.1M</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-2">Location</div>
                <div className="font-serif text-base text-white leading-tight">Lamini-Apete<br />Ibadan</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-2">Deposit</div>
                <div className="font-serif text-2xl text-white">₦1M</div>
              </div>
            </div>
            <a href="#reserve" className="btn-gold inline-block">Reserve Your Plot</a>
          </motion.div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-20 bg-linen">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Why Lushville Estate</div>
            <h2 className="font-serif text-4xl text-charcoal">Ibadan's Next Premier Address.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-ivory border border-border p-8 hover:border-primary transition-colors"
              >
                <u.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-2">{u.title}</h3>
                <p className="text-sm text-stone">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-ivory">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Estate Preview</div>
            <h2 className="font-serif text-4xl text-charcoal">Life at Lushville</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-square"}`}
              >
                <img src={src} alt={`Estate view ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-linen text-charcoal">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="inline-block text-[10px] tracking-[0.3em] uppercase text-primary bg-primary/10 px-3 py-1 mb-4">Pricing</div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">All prices inclusive. No hidden charges.</h2>
            <p className="text-stone">Initial deposit of ₦1,000,000. Flexible plans available.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Residential 300sqm",
                popular: false,
                instant: "₦5.1M",
                rows: [
                  ["6 Months", "₦5.7M"],
                  ["12 Months", "₦6.6M"],
                  ["18 Months", "₦7.5M"],
                ],
              },
              {
                title: "Residential 500sqm",
                popular: true,
                instant: "₦7.3M",
                rows: [
                  ["6 Months", "₦7.9M"],
                  ["12 Months", "₦8.8M"],
                  ["18 Months", "₦9.7M"],
                ],
              },
              {
                title: "Commercial Plot",
                popular: false,
                instant: "₦8.5M",
                rows: [
                  ["6 Months", "₦9.1M"],
                  ["12 Months", "₦10M"],
                  ["18 Months", "₦10.9M"],
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative bg-white p-8 flex flex-col ${
                  plan.popular ? "border-2 border-primary" : "border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl text-charcoal mb-2">{plan.title}</h3>
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-stone mb-1">Instant Payment</div>
                  <div className="font-serif text-4xl text-primary font-semibold">{plan.instant}</div>
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-stone mb-3">Payment Plan</div>
                <div className="flex-1 space-y-0 mb-6">
                  {plan.rows.map(([label, price], idx) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between py-3 ${
                        idx < plan.rows.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-sm text-stone">{label}</span>
                      <span className="font-serif text-lg text-charcoal font-semibold">{price}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#reserve"
                  className="block text-center bg-charcoal text-ivory hover:bg-primary transition-colors py-3 text-xs tracking-[0.2em] uppercase font-medium"
                >
                  Reserve this plot
                </a>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10 text-[10px] tracking-[0.3em] uppercase text-stone">
            All Prices Inclusive · No Hidden Charges · Initial Deposit ₦1M
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-linen">
        <div className="container-full max-w-5xl">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Estate Amenities</div>
            <h2 className="font-serif text-4xl text-charcoal">Everything Delivered Before You Move</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "24/7 Security",
              "Perimeter Fencing",
              "Interlocked Roads",
              "Underground Drainage",
              "Street Lighting",
              "Recreational Park",
              "Green Areas",
              "Estate Gate House",
              "CCTV Coverage",
            ].map((a) => (
              <div key={a} className="flex items-center gap-3 bg-ivory p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-charcoal">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="reserve" className="py-24 bg-ivory">
        <div className="container-full max-w-3xl">
          <div className="text-center mb-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Secure Your Investment</div>
            <h2 className="font-serif text-4xl text-charcoal mb-4">Only Serious Enquiries. Priority Response.</h2>
            <p className="text-stone">Complete the form and a senior advisor will contact you within 24 hours.</p>
          </div>
          <LeadForm source="Lushville Landing — Bottom" projectInterest="Lushville Estate" />
          <p className="text-center mt-8 text-sm text-stone">
            Prefer to browse all our estates?{" "}
            <Link to="/projects" className="text-primary hover:underline">View all projects</Link>
          </p>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
