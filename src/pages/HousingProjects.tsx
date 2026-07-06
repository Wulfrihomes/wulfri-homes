import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByType } from "@/data/wulfri";
import { motion } from "framer-motion";

const categories = [
  { name: "Terrace Duplex", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
  { name: "Semi Detached", img: "https://images.unsplash.com/photo-1600566753051-6057d5906cdb?w=800&q=80" },
  { name: "Fully Detached", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
  { name: "Apartments", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" },
  { name: "Luxury Villas", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
  { name: "Smart Homes", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80" },
];

const HousingProjects = () => {
  const housing = getProjectsByType("Housing");
  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-linen overflow-hidden">
        <div className="container-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-6">Housing Projects</p>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.05] mb-8">
              Homes engineered for <span className="italic text-primary">modern Nigerian</span> living.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From compact starter homes to signature villas, each Wulfri residence is designed with intention, built with craft, and finished to endure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container-full">
          <p className="eyebrow mb-4">Home Categories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 leading-[1.1]">
            Choose the home that fits your life.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative aspect-[4/3] overflow-hidden image-zoom card-lift cursor-pointer">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-2xl text-ivory">{c.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-linen">
        <div className="container-full">
          <p className="eyebrow mb-4">Available Homes</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 leading-[1.1]">Signature developments.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {housing.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HousingProjects;
