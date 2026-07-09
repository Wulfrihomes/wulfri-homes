import { motion } from "framer-motion";
import { ShieldCheck, MapPin, TrendingUp, Wallet, Building2, CheckCircle2, Sparkles, ChevronDown } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const gallery = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
];

const usps = [
  { icon: ShieldCheck, title: "Secure Gated Community", desc: "24/7 security, controlled access and dedicated gate house" },
  { icon: MapPin, title: "Prime Ibadan Location", desc: "Strategically positioned in Lamini-Apete, close to growing infrastructure" },
  { icon: TrendingUp, title: "Flexible Growth Plans", desc: "Plots available with up to 18-month payment flexibility" },
  { icon: Wallet, title: "Transparent Pricing", desc: "All prices are inclusive with no hidden charges" },
  { icon: Building2, title: "Modern Infrastructure", desc: "Interlocked roads, drainage, street lighting and perimeter fencing" },
  { icon: Sparkles, title: "Ready for Ownership", desc: "Ideal for both residential and commercial development" },
];

const plans = [
  { size: "300 sqm", price: "₦5.1M", tag: "Instant" },
  { size: "500 sqm", price: "₦7.3M", tag: "Instant" },
  { size: "Commercial", price: "₦8.5M", tag: "Instant" },
  { size: "300 sqm", price: "₦7.5M", tag: "18 Months" },
];

export default function LushvilleLanding() {
  const hero = gallery[0];

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Lushville Estate entrance"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="bg-[#D97706] border border-[#D97706] text-white backdrop-blur px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-8 font-semibold">
              By Lexshield Properties Limited
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-white">
              Own Land at <span className="text-[#D97706] font-serif italic">Lushville Estate</span>
            </h1>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              Premium residential estate in Lamini-Apete, Ibadan with secure access, flexible payment plans and quality infrastructure.
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

      <section className="py-20 bg-linen">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Why Lushville Estate</div>
            <h2 className="font-serif text-4xl text-charcoal">Developed for comfort, value and long-term growth.</h2>
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

      <section className="py-20 bg-ivory">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Estate Preview</div>
            <h2 className="font-serif text-4xl text-charcoal">A polished estate experience from the first impression.</h2>
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
                <img src={src} alt={`Lushville Estate view ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linen text-charcoal">
        <div className="container-full">
          <div className="text-center mb-14">
            <div className="inline-block text-[10px] tracking-[0.3em] uppercase text-primary bg-primary/10 px-3 py-1 mb-4">Pricing</div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">Transparent pricing. No hidden charges.</h2>
            <p className="text-stone">Flexible payment options available for every buyer profile.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={`${plan.size}-${plan.tag}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative bg-white p-8 flex flex-col border border-border"
              >
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1">
                  {plan.tag}
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-6">{plan.size}</h3>
                <div className="flex-1 space-y-3 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-stone">Starting Price</span>
                    <span className="font-serif text-lg text-primary font-semibold">{plan.price}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-stone">Payment Option</span>
                    <span className="text-sm text-charcoal">{plan.tag}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-stone">Title</span>
                    <span className="text-sm text-charcoal">Inclusive</span>
                  </div>
                </div>
                <a href="#reserve" className="block text-center bg-charcoal text-ivory hover:bg-primary transition-colors py-3 text-xs tracking-[0.2em] uppercase font-medium">
                  Reserve this plot
                </a>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10 text-[10px] tracking-[0.3em] uppercase text-stone">
            All Prices Inclusive • No Hidden Charges
          </div>
        </div>
      </section>

      <section className="py-20 bg-linen">
        <div className="container-full max-w-5xl">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Estate Amenities</div>
            <h2 className="font-serif text-4xl text-charcoal">Everything needed for a premium estate lifestyle.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "24/7 Security",
              "Perimeter Fencing",
              "Interlocked Roads",
              "Underground Drainage",
              "Street Lighting",
              "Estate Gate House",
            ].map((a) => (
              <div key={a} className="flex items-center gap-3 bg-ivory p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-charcoal">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-form" className="py-24 bg-ivory scroll-mt-24">
        <div className="container-full max-w-3xl">
          <div className="text-center mb-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Secure Your Investment</div>
            <h2 className="font-serif text-4xl text-charcoal mb-4">A serious estate with serious opportunity.</h2>
            <p className="text-stone">Complete the form and a senior advisor will contact you within 24 hours.</p>
          </div>
          <LeadForm source="Lushville Landing — Bottom" />
          <p className="text-center mt-8 text-sm text-stone">
            Prefer to browse all our estates?{" "}
            <Link to="/projects" className="text-primary hover:underline">View all projects</Link>
          </p>
        </div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
}
