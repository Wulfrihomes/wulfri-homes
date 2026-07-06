import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, ShieldCheck, Wallet, MapPin, TrendingUp, Building2, Handshake, Star, Quote } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects, whyChooseUs, testimonials } from "@/data/wulfri";

const iconMap = { ShieldCheck, Wallet, MapPin, TrendingUp, Building2, Handshake };

const Index = () => {
  const featured = getFeaturedProjects().slice(0, 6);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
            alt="Premium estate aerial"
            className="w-full h-[115%] object-cover"
            style={{ animation: "ken-burns 25s ease-out forwards" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80" />
        </motion.div>

        <motion.div className="relative container-full h-full flex flex-col justify-center pt-20" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                Nigeria's Trusted Real Estate Partner
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-ivory leading-[0.95] tracking-tight mb-8">
              Building Wealth<br />
              Through Smart<br />
              <span className="italic text-primary">Real Estate</span> Investments
            </h1>
            <p className="text-base md:text-lg text-ivory/80 mb-10 leading-relaxed max-w-xl">
              Helping individuals and families own premium lands and beautiful homes across Nigeria with flexible payment plans and verified titles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-gold">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 h-12 px-8 text-xs font-medium tracking-[0.2em] uppercase bg-transparent text-ivory border border-ivory/40 hover:bg-ivory hover:text-charcoal transition-all duration-500">
                Book Site Inspection
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/50">Discover</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowDown className="w-4 h-4 text-ivory/50" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats overlay */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-ivory/10 bg-charcoal/40 backdrop-blur-sm">
          <div className="container-full py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "2,500+", l: "Happy Families" },
              { v: "12+", l: "Premium Estates" },
              { v: "₦45B+", l: "Assets Managed" },
              { v: "8 Yrs", l: "Track Record" },
            ].map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <div className="font-serif text-2xl md:text-3xl text-primary">{s.v}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-ivory/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="eyebrow mb-4">Why Choose Wulfri Homes</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              A partner built on trust, engineered for <span className="italic text-primary">growth</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-ivory p-8 md:p-10 group hover:bg-linen transition-colors"
                >
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all">
                    <Icon className="w-5 h-5 text-primary group-hover:text-ivory transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="container-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="eyebrow mb-4">Featured Developments</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] max-w-2xl">
                Signature projects <span className="italic">redefining</span> Nigerian living.
              </h2>
            </motion.div>
            <Link to="/projects" className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-primary link-underline">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CEO / Trust section */}
      <section className="py-24 md:py-32 bg-charcoal text-ivory overflow-hidden">
        <div className="container-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85"
              alt="Wulfri Homes development"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-ivory/95 backdrop-blur p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">Legacy in Motion</div>
              <div className="font-serif text-xl text-charcoal">Over ₦45B in assets delivered since 2016</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-6">A Message From Our CEO</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.15] mb-8">
              "Real estate isn't just about property. It's about legacy, security and the quiet confidence of ownership."
            </h2>
            <p className="text-ivory/70 leading-relaxed mb-8 max-w-lg">
              At Wulfri Homes, every plot we sell and every home we build is engineered to hold its value for generations. We measure success not in transactions, but in the families whose futures we help secure.
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-ivory/10">
              <div>
                <div className="font-serif text-lg text-ivory">Adekunle Wulfri</div>
                <div className="text-xs tracking-[0.15em] uppercase text-ivory/50">Founder & CEO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="eyebrow mb-4">Client Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              Trusted by families and <span className="italic">investors</span> worldwide.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-linen p-8 md:p-10 relative"
              >
                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-charcoal leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="pt-6 border-t border-border">
                  <div className="font-serif text-lg text-charcoal">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=85" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        <div className="relative container-narrow text-center text-ivory">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-6">Your Next Chapter</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              Ready to invest in <span className="italic text-primary">tomorrow?</span>
            </h2>
            <p className="text-lg text-ivory/70 max-w-xl mx-auto mb-10">
              Book a complimentary site inspection with our client team. Virtual tours available for diaspora clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold">Book Free Inspection</Link>
              <Link to="/projects" className="inline-flex items-center justify-center gap-3 h-12 px-8 text-xs tracking-[0.2em] uppercase border border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal transition-all">
                Browse Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
