import { motion } from "framer-motion";
import { ShieldCheck, MapPin, TrendingUp, Wallet, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Link } from "react-router-dom";

const gallery = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80",
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
  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={gallery[0]} alt="Emirates Parks & Gardens" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
        </div>
        <div className="relative container-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 bg-primary/10 text-primary text-[10px] tracking-[0.3em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Selling Fast • Limited Units
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
              Emirates Parks<br />& Gardens
            </h1>
            <p className="text-lg text-ivory/80 mb-8 max-w-lg">
              A master-planned residential estate on the Lagos-Ibadan corridor. Verified C of O title, world-class infrastructure, and payment plans engineered for wealth creation.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">From</div>
                <div className="font-serif text-3xl text-ivory">₦8.25M</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">Location</div>
                <div className="font-serif text-lg text-ivory">Mowe-Ofada, Ogun</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">Title</div>
                <div className="font-serif text-lg text-ivory">C of O</div>
              </div>
            </div>
            <a href="#reserve" className="btn-gold inline-block">Reserve Your Plot</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="reserve"
          >
            <LeadForm source="Emirates Landing — Hero" />
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
      <section className="py-20 bg-charcoal text-ivory">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Payment Plans</div>
            <h2 className="font-serif text-4xl">Transparent Pricing. Flexible Terms.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-ivory/20 p-8 hover:border-primary transition-colors"
              >
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">{p.tag}</div>
                <div className="font-serif text-3xl mb-1">{p.price}</div>
                <div className="text-sm text-ivory/60">{p.size}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#reserve" className="btn-gold inline-block">Request Full Pricing Pack</a>
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
      <section className="py-24 bg-ivory">
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
