import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Award, Users, Building, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Award, title: "Integrity", desc: "Every title verified. Every promise kept." },
  { icon: Heart, title: "Client-First", desc: "Your investment success is our benchmark." },
  { icon: Building, title: "Craftsmanship", desc: "World-class standards, locally rooted." },
  { icon: Users, title: "Community", desc: "Building neighborhoods, not just properties." },
];

const timeline = [
  { year: "2016", title: "Founded in Lagos", desc: "Wulfri Homes launches with a single 25-plot estate in Ibeju-Lekki." },
  { year: "2018", title: "Expansion into Ogun", desc: "First Mowe corridor development opens; 100% subscription in 90 days." },
  { year: "2021", title: "Abuja Debut", desc: "Royal Crest Estate launches, marking entry into the FCT luxury market." },
  { year: "2023", title: "10,000+ Subscribers", desc: "Crossed 10,000 subscribers with a 98% client satisfaction rating." },
  { year: "2026", title: "Smart City Vision", desc: "Wulfri Smart City breaks ground — Nigeria's most connected community." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="eyebrow mb-6">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
              A decade of <span className="italic text-primary">quiet excellence</span> in Nigerian real estate.
            </h1>
            <p className="text-lg text-ivory/70 leading-relaxed">
              From a single estate in Ibeju-Lekki to a portfolio spanning three states, Wulfri Homes has quietly built one of Nigeria's most respected real estate portfolios—by keeping every promise, honouring every title, and treating every client like family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-full grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <p className="eyebrow">Our Mission</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-6">
              To make premium property ownership accessible, transparent and profitable for every Nigerian.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We exist to democratize wealth creation through real estate—offering flexible plans, verified titles and world-class infrastructure to buyers at every stage of their journey.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-primary" />
              <p className="eyebrow">Our Vision</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-6">
              To be West Africa's most trusted real estate brand by 2035.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A brand synonymous with integrity, innovation and lasting value—setting the benchmark for how premium real estate is delivered across the continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="container-full">
          <p className="eyebrow mb-4">Core Values</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05] mb-16 max-w-2xl">
            The principles that guide every decision.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <v.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-narrow">
          <p className="eyebrow mb-4 text-center">Our Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05] mb-16 text-center">
            A decade in the making.
          </h2>
          <div className="space-y-12 relative before:absolute before:left-[7.5rem] before:top-2 before:bottom-2 before:w-px before:bg-border hidden md:block">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-[8rem_1fr] gap-8 items-start relative"
              >
                <div className="font-serif text-3xl text-primary">{t.year}</div>
                <div className="relative pl-8">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary" />
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mobile */}
          <div className="md:hidden space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="border-l-2 border-primary pl-6">
                <div className="font-serif text-2xl text-primary">{t.year}</div>
                <h3 className="font-serif text-xl text-charcoal mt-2 mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-charcoal text-ivory text-center">
        <div className="container-narrow">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
            Come see what we've been <span className="italic text-primary">quietly building</span>.
          </h2>
          <Link to="/projects" className="btn-gold">
            Explore Our Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
