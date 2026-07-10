import { motion } from "framer-motion";
import { ShieldCheck, MapPin, TrendingUp, Wallet, Building2, CheckCircle2, Sparkles, ChevronDown } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { projectLandingConfigs } from "@/data/wulfri";

const iconMap = {
  ShieldCheck,
  MapPin,
  TrendingUp,
  Wallet,
  Building2,
  Sparkles,
};

export default function ProjectLanding() {
  const location = useLocation();
  const config = projectLandingConfigs[location.pathname.replace(/^\//, "")];

  if (!config) {
    return null;
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <img
          src={config.heroImage}
          alt={config.title}
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full flex flex-col items-center">
            <Badge className="bg-[#D97706] border border-[#D97706] text-white backdrop-blur px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-8 font-semibold">
              {config.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-white">
              {config.title}
            </h1>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              {config.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="#lead-form">
                <Button size="lg" className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-full px-8 h-12 shadow-xl font-semibold tracking-wide">
                  {config.ctaLabel}
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
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Why {config.title.replace("Own Land at ", "").replace("Own at ", "")}</div>
            <h2 className="font-serif text-4xl text-charcoal">Built for value, comfort and long-term growth.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.usps.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-ivory border border-border p-8 hover:border-primary transition-colors"
              >
                {(() => {
                  const Icon = iconMap[Object.keys(iconMap)[i % Object.keys(iconMap).length] as keyof typeof iconMap] || ShieldCheck;
                  return <Icon className="w-8 h-8 text-primary mb-4" />;
                })()}
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
            {config.gallery.map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-square"}`}
              >
                <img src={src} alt={`${config.title} view ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {config.plans.map((plan, i) => (
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
                <a href="#lead-form" className="block text-center bg-charcoal text-ivory hover:bg-primary transition-colors py-3 text-xs tracking-[0.2em] uppercase font-medium">
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
            <h2 className="font-serif text-4xl text-charcoal">Everything required for a premium living experience.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {config.amenities.map((a) => (
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
            <h2 className="font-serif text-4xl text-charcoal mb-4">Only serious enquiries. Priority response.</h2>
            <p className="text-stone">Complete the form and a senior advisor will contact you within 24 hours.</p>
          </div>
          <LeadForm source={config.source} />
          <p className="text-center mt-8 text-sm text-stone">
            Prefer to browse all our estates?{' '}
            <Link to="/projects" className="text-primary hover:underline">View all projects</Link>
          </p>
        </div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
}
