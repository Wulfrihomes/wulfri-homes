import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByType } from "@/data/wulfri";
import { motion } from "framer-motion";
import { Building, Store, Warehouse, Briefcase } from "lucide-react";

const types = [
  { icon: Briefcase, title: "Office Spaces", desc: "Grade-A office suites for corporates and startups." },
  { icon: Store, title: "Retail", desc: "High-footfall retail units in mixed-use developments." },
  { icon: Building, title: "Mixed-Use", desc: "Live-work-play communities driving urban value." },
  { icon: Warehouse, title: "Warehousing", desc: "Logistics-grade storage on prime freight corridors." },
];

const CommercialProperties = () => {
  const commercial = getProjectsByType("Commercial");
  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-6">Commercial Properties</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
              Commercial assets that <span className="italic text-primary">work harder</span> for you.
            </h1>
            <p className="text-lg text-ivory/70 leading-relaxed">
              Prime office suites, retail units, warehousing and mixed-use developments engineered for institutional yield.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {types.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-ivory p-8 md:p-10">
                <t.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-linen">
        <div className="container-full">
          <p className="eyebrow mb-4">Available Commercial Assets</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 leading-[1.1]">Investment-grade opportunities.</h2>
          {commercial.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercial.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </div>
          ) : (
            <p className="text-muted-foreground">More commercial listings coming soon.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CommercialProperties;
