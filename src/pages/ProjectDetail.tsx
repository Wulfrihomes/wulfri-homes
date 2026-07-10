import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Check, Download, MessageCircle, ArrowLeft, ChevronLeft, ChevronRight, Calendar, ShieldCheck, TrendingUp, Wallet, Building2, Sparkles, PlayCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProjectBySlug, WHATSAPP_NUMBER } from "@/data/wulfri";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/wulfri";

const emiratesUsps = [
  { icon: ShieldCheck, title: "Verified C of O Title", desc: "Genuine title with government-backed documentation" },
  { icon: MapPin, title: "Prime Location", desc: "Ewu-Ode before Interchange, Mowe-Ofada, Ogun" },
  { icon: TrendingUp, title: "40% ROI Projected", desc: "Fast-appreciating corridor with proven historical growth" },
  { icon: Wallet, title: "Flexible Payment", desc: "Outright, 3, 6 and 12-month structured plans" },
  { icon: Building2, title: "Full Infrastructure", desc: "Roads, drainage, security, street lighting delivered" },
  { icon: Sparkles, title: "Ready for Allocation", desc: "Physical allocation within 30 days of full payment" },
];

const emiratesGallery = [
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609182/5fc1b1d0-fd97-4ee0-945e-af4caba951d2_an2bmz.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609181/1000008727_cdfbxg.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/419A2164-1-scaled_c8ipws.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/0N2A2342-scaled_rqcmck.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/419A2313-1-scaled_myp8hi.jpg",
  "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609182/1000008728_gilcja.jpg",
];

const lushvilleGallery = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
];

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
  const specialLandingRoute =
    project.slug === "emirates-parks-gardens"
      ? "/emirates-parks-gardens"
      : project.slug === "lushville-estate"
        ? "/lushville-estate"
        : null;
  const heroImage = project.heroImage || project.gallery[activeImg] || project.gallery[0];
  const lushvilleHighlights = [
  { icon: ShieldCheck, title: "Verified C of O Title", desc: "Genuine title with government-backed documentation" },
  { icon: MapPin, title: "Prime Location", desc: "Strategically positioned in Lamini-Apete, close to University of Ibadan, Ibadan Poly, Lifeforte International School, Lagos-Ibadan train station" },
  { icon: TrendingUp, title: "25% ROI Projected", desc: "Fast-appreciating corridor with proven historical growth" },
  { icon: Wallet, title: "Flexible Payment", desc: "Outright, 3, 6, 12 and 18-month structured plans" },
  { icon: Building2, title: "Full Infrastructure", desc: "Roads, drainage, security, street lighting delivered" },
  { icon: Sparkles, title: "Ready for Allocation", desc: "Physical allocation within 30 days of full payment" },
  ];

  return (
    <Layout>
      {/* Hero image */}
      <section className="relative h-[80vh] pt-20 overflow-hidden bg-charcoal">
        <img src={heroImage} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
        <div className="relative container-full h-full flex flex-col justify-end pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Link to="/projects" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white hover:text-[#D97706] w-fit transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1 text-[10px] tracking-[0.2em] uppercase bg-[#D97706] text-white font-semibold">{project.status}</span>
              <span className="px-4 py-1 text-[10px] tracking-[0.2em] uppercase border border-white/40 text-white">{project.type}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-6">{project.name}</h1>
            <div className="flex items-center gap-2 text-white mb-6">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              <span className="text-base">{project.location}, {project.state} State</span>
            </div>
            <p className="text-lg text-white max-w-2xl leading-relaxed">{project.tagline}</p>
            {specialLandingRoute && (
              <Link to={specialLandingRoute} className="inline-flex items-center mt-8 text-sm font-medium text-[#D97706] hover:text-[#B45309] transition-colors">
                Explore the dedicated project experience →
              </Link>
            )}
          </motion.div>
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

            {project.slug === "lushville-estate" && (
              <>
                <div>
                  <p className="eyebrow mb-4">Why Lushville Estate</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">Developed for comfort, value and long-term growth.</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {lushvilleHighlights.map((item) => (
                      <div key={item.title} className="bg-linen border border-border p-6">
                        <h3 className="font-serif text-lg text-charcoal mb-1">{item.title}</h3>
                        <p className="text-sm text-stone">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-4">Estate Video</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">Take a virtual tour.</h2>
                  <div className="relative aspect-video bg-charcoal overflow-hidden group cursor-pointer">
                    <img
                      src={lushvilleGallery[0]}
                      alt="Lushville Estate video preview"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-20 h-20 text-primary drop-shadow-lg group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                    </div>
                    <div className="absolute bottom-4 left-4 text-ivory text-xs tracking-[0.2em] uppercase bg-charcoal/60 px-3 py-1">
                      Coming soon
                    </div>
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-4">Estate Preview</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">A polished estate experience from the first impression.</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {lushvilleGallery.map((src, i) => (
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
              </>
            )}

            {project.slug === "emirates-parks-gardens" && (
              <>
                {/* Why Emirates Parks & Gardens */}
                <div>
                  <p className="eyebrow mb-4">Why Emirates Parks & Gardens</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">Built for Legacy. Priced for Growth.</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {emiratesUsps.map((u, i) => (
                      <motion.div
                        key={u.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-linen border border-border p-6 hover:border-primary transition-colors"
                      >
                        <u.icon className="w-7 h-7 text-primary mb-3" />
                        <h3 className="font-serif text-lg text-charcoal mb-1">{u.title}</h3>
                        <p className="text-sm text-stone">{u.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Video */}
                <div>
                  <p className="eyebrow mb-4">Estate Video</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">Take a virtual tour.</h2>
                  <div className="relative aspect-video bg-charcoal overflow-hidden group cursor-pointer">
                    <img
                      src={emiratesGallery[0]}
                      alt="Emirates Parks & Gardens video preview"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-20 h-20 text-primary drop-shadow-lg group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                    </div>
                    <div className="absolute bottom-4 left-4 text-ivory text-xs tracking-[0.2em] uppercase bg-charcoal/60 px-3 py-1">
                      Coming soon
                    </div>
                  </div>
                </div>

                {/* Estate Preview */}
                <div>
                  <p className="eyebrow mb-4">Estate Preview</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">Life at Emirates Parks.</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {emiratesGallery.map((src, i) => (
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
              </>
            )}

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
                  <p className="text-xs mt-1">https://goo.gl/maps/cEpwqDCnDJavJ58b7</p>
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

              <Link to={specialLandingRoute || "/contact"} className="w-full inline-flex items-center justify-center gap-2 h-12 bg-primary text-ivory text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors mb-3">
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
