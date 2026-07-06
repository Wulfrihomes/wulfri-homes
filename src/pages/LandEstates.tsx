import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByType } from "@/data/wulfri";
import { motion } from "framer-motion";
import { MapPin, Zap, Droplets, Shield, Trees, Home } from "lucide-react";

const infrastructure = [
  { icon: MapPin, title: "Road Network", desc: "Interlocked & tarred roads throughout" },
  { icon: Droplets, title: "Drainage", desc: "Underground stormwater management" },
  { icon: Zap, title: "Electricity", desc: "Solar street lights + grid connection" },
  { icon: Shield, title: "Security", desc: "24/7 gatehouse + perimeter CCTV" },
  { icon: Trees, title: "Green Areas", desc: "Landscaped parks & recreational zones" },
  { icon: Home, title: "Gate House", desc: "Grand estate entrance with concierge" },
];

const plotSizes = [
  { size: "300 sqm", desc: "Perfect for compact family homes and starter investments." },
  { size: "500 sqm", desc: "Ideal for standard detached homes with room to breathe." },
  { size: "600 sqm", desc: "Generous plots suited to luxury builds and dual-purpose use." },
  { size: "1000 sqm", desc: "Estate-grade plots for signature villas and compounds." },
];

const LandEstates = () => {
  const land = getProjectsByType("Land");
  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-6">Land Estates</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
              Own a piece of Nigeria's <span className="italic text-primary">appreciating</span> future.
            </h1>
            <p className="text-lg text-ivory/70 leading-relaxed">
              Master-planned residential estates with verified titles, world-class infrastructure and payment plans engineered for every income tier.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container-full">
          <p className="eyebrow mb-4">Available Plot Sizes</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 max-w-2xl leading-[1.1]">
            Sized for every ambition.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotSizes.map((p, i) => (
              <motion.div key={p.size} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-8 bg-linen card-lift">
                <div className="font-serif text-4xl text-primary mb-4">{p.size}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-linen">
        <div className="container-full">
          <p className="eyebrow mb-4">Estate Infrastructure</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 max-w-2xl leading-[1.1]">
            Delivered before allocation, guaranteed.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {infrastructure.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-ivory p-8 md:p-10">
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-serif text-2xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container-full">
          <p className="eyebrow mb-4">Available Land Estates</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 leading-[1.1]">Browse our developments.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {land.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandEstates;
