import { motion } from "framer-motion";
import { ShieldCheck, MapPin, TrendingUp, Wallet, Building2, CheckCircle2, Sparkles, ChevronDown, Download } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const gallery = [
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783502045/1000008726_ql5yh6.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609181/1000008727_cdfbxg.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/419A2164-1-scaled_c8ipws.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/0N2A2342-scaled_rqcmck.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/419A2313-1-scaled_myp8hi.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609182/1000008728_gilcja.jpg",
];

const usps = [
  { icon: ShieldCheck, title: "Verified C of O Title", desc: "Genuine title with government-backed documentation" },
  { icon: MapPin, title: "Prime Location", desc: "Ewu-Ode before Interchange, Mowe-Ofada, Ogun" },
  { icon: TrendingUp, title: "40% ROI Projected", desc: "Fast-appreciating corridor with proven historical growth" },
  { icon: Wallet, title: "Flexible Payment", desc: "Outright, 3, 6 and 12-month structured plans" },
  { icon: Building2, title: "Full Infrastructure", desc: "Roads, drainage, security, street lighting delivered" },
  { icon: Sparkles, title: "Ready for Allocation", desc: "Physical allocation within 30 days of full payment" },
];

const plans = [
  { size: "300 sqm", price: "₦8.25M", tag: "Outright" },
  { size: "300 sqm", price: "₦8.85M", tag: "3 Months" },
  { size: "300 sqm", price: "₦9.5M", tag: "6 Months" },
  { size: "300 sqm", price: "₦10.5M", tag: "12 Months" },
  { size: "600 sqm", price: "₦15.5M", tag: "Outright" },
  { size: "600 sqm", price: "₦18.5M", tag: "12 Months" },
];

export default function EmiratesLanding() {
  const hero = "https://res.cloudinary.com/vxtwsudt/image/upload/v1783607231/Emirates_Entrance_r8me9l.jpg";

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32">
        <img
          src={hero}
          alt="Emirates Parks & Gardens entrance"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full flex flex-col items-center">
            <Badge className="bg-[#D97706] border border-[#D97706] text-white backdrop-blur px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-8 font-semibold">
              By Lexshield Properties Limited
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-white">
              Own Land at <span className="text-[#D97706] font-serif italic">Emirates Parks &amp; Gardens</span>
            </h1>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              Premium estate located at Ewu-Ode before Interchange, Mowe-Ofada. Verified titles, gated community, flexible payment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="#lead-form">
                <Button size="lg" className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-full px-8 h-12 shadow-xl font-semibold tracking-wide">
                  Book Free Inspection
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-20 bg-linen">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Why Emirates Parks & Gardens</div>
            <h2 className="font-serif text-4xl text-charcoal">Built for Legacy. Priced for Growth.</h2>
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
            <h2 className="font-serif text-4xl text-charcoal">Life at Emirates Parks</h2>
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
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">Transparent pricing. No hidden charges.</h2>
            <p className="text-stone">Initial deposit of ₦1,000,000. Flexible plans available.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Residential 300sqm",
                popular: true,
                rows: [
                  ["Instant Payment", "₦8.25M"],
                  ["0–3 Months", "₦8.85M"],
                  ["6 Months", "₦9.5M"],
                  ["12 Months", "₦10.5M"],
                ],
              },
              {
                title: "Residential 600sqm",
                popular: false,
                rows: [
                  ["Instant Payment", "₦14.5M"],
                  ["0–3 Months", "₦15.5M"],
                  ["6 Months", "₦16.5M"],
                  ["12 Months", "₦18M"],
                ],
              },
              {
                title: "Commercial Plot",
                popular: false,
                rows: [
                  ["Instant Payment", "₦20M"],
                  ["0–3 Months", "₦21M"],
                  ["6 Months", "₦22M"],
                  ["12 Months", "₦23M"],
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
                <h3 className="font-serif text-2xl text-charcoal mb-6">{plan.title}</h3>
                <div className="flex-1 space-y-0 mb-6">
                  {plan.rows.map(([label, price], idx) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between py-3 ${
                        idx < plan.rows.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-sm text-stone">{label}</span>
                      <span className="font-serif text-lg text-primary font-semibold">{price}</span>
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
            All Prices Inclusive · No Hidden Charges
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
              "Solar Street Lighting",
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
      <section id="lead-form" className="py-24 bg-ivory scroll-mt-24">
        <div className="container-full max-w-3xl">
          <div className="text-center mb-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Secure Your Investment</div>
            <h2 className="font-serif text-4xl text-charcoal mb-4">Only Serious Enquiries. Priority Response.</h2>
            <p className="text-stone">Complete the form and a senior advisor will contact you within 24 hours.</p>
          </div>
          <LeadForm source="Emirates Landing — Bottom" />
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
