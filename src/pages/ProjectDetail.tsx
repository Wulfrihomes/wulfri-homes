import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Check, Download, MessageCircle, ArrowLeft, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProjectBySlug, WHATSAPP_NUMBER } from "@/data/wulfri";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/wulfri";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");
  const [activeImg, setActiveImg] = useState(0);

  if (!project) {
    return (
      <Layout>
        <div className="container-narrow py-40 text-center">
          <h1 className="font-serif text-4xl mb-4 text-charcoal">Project Not Found</h1>
          <Link to="/projects" className="btn-gold mt-6">Browse All Projects</Link>
        </div>
      </Layout>
    );
  }

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Wulfri Homes, I'm interested in ${project.name}. Please share more details.`
  )}`;

  const related = projects.filter((p) => p.type === project.type && p.id !== project.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero image */}
      <section className="relative h-[80vh] pt-20 overflow-hidden bg-charcoal">
        <img src={project.gallery[activeImg]} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
        <div className="relative container-full h-full flex flex-col justify-end pb-20">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ivory/70 hover:text-primary mb-8 w-fit">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-primary text-ivory">{project.status}</span>
              <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase border border-ivory/30 text-ivory">{project.type}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[0.95] mb-6">{project.name}</h1>
            <div className="flex items-center gap-2 text-ivory/70 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{project.location}, {project.state} State</span>
            </div>
            <p className="text-lg text-ivory/80 max-w-2xl">{project.tagline}</p>
          </motion.div>

          {/* Gallery thumbs */}
          <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 w-20 h-16 md:w-28 md:h-20 overflow-hidden border-2 transition-all ${
                  activeImg === i ? "border-primary" : "border-ivory/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-full grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <p className="eyebrow mb-4">Overview</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-6">About this development</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
            </div>

            {project.plotSizes && (
              <div>
                <p className="eyebrow mb-4">Plot Sizes Available</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.plotSizes.map((s) => (
                    <div key={s} className="p-6 bg-linen text-center">
                      <div className="font-serif text-2xl text-charcoal">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="eyebrow mb-4">Amenities & Infrastructure</p>
              <div className="grid md:grid-cols-2 gap-3">
                {project.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-3 p-4 bg-linen">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-charcoal">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">Location</p>
              <div className="aspect-video bg-linen border border-border flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm">{project.location}</p>
                  <p className="text-xs mt-1">Google Map embed available on request</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="bg-charcoal text-ivory p-8">
              <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">Starting From</div>
              <div className="font-serif text-4xl mb-8">{project.priceFrom}</div>

              <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-4">Payment Plans</p>
              <div className="space-y-3 mb-8">
                {project.paymentPlans.map((p) => (
                  <div key={p.label} className="flex justify-between pb-3 border-b border-ivory/10 text-sm">
                    <span className="text-ivory/70">{p.label}</span>
                    <span className="font-medium text-primary">{p.value}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 h-12 bg-primary text-ivory text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors mb-3">
                <Calendar className="w-4 h-4" /> Book Inspection
              </Link>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 h-12 bg-[#25D366] text-white text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity mb-3">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <button className="w-full inline-flex items-center justify-center gap-2 h-12 border border-ivory/30 text-ivory text-xs tracking-[0.2em] uppercase hover:bg-ivory hover:text-charcoal transition-all">
                <Download className="w-4 h-4" /> Download Brochure
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-24 bg-linen">
          <div className="container-full">
            <p className="eyebrow mb-4">Related Projects</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12">You may also like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProjectDetail;
