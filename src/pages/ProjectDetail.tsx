import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Check, Download, MessageCircle, ArrowLeft, ChevronLeft, ChevronRight, Calendar, ShieldCheck, TrendingUp, Wallet, Building2, Sparkles, PlayCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProjectBySlug, projectDetailContent, WHATSAPP_NUMBER } from "@/data/wulfri";
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
  const specialLandingRoute =
    project.slug === "emirates-parks-gardens"
      ? "/emirates-parks-gardens"
      : project.slug === "lushville-estate"
        ? "/lushville-estate"
        : null;
  const heroImage = project.heroImage || project.gallery[activeImg] || project.gallery[0];
  const detailContent = projectDetailContent[project.slug];
  const previewImages = detailContent?.galleryPreview?.length ? detailContent.galleryPreview : project.gallery;

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

            {detailContent && (
              <>
                <div>
                  <p className="eyebrow mb-4">{detailContent.eyebrow}</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">{detailContent.heading}</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {detailContent.highlights.map((u, i) => (
                      <motion.div
                        key={u.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-linen border border-border p-6 hover:border-primary transition-colors"
                      >
                        <h3 className="font-serif text-lg text-charcoal mb-1">{u.title}</h3>
                        <p className="text-sm text-stone">{u.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-4">Estate Video</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">Take a virtual tour.</h2>
                  <div className="relative aspect-video bg-charcoal overflow-hidden group cursor-pointer">
                    <img
                      src={previewImages[0]}
                      alt={`${project.name} video preview`}
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
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">{detailContent.previewHeading}</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {previewImages.map((src, i) => (
                      <motion.div
                        key={`${src}-${i}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`overflow-hidden ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-square"}`}
                      >
                        <img src={src} alt={`${project.name} view ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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

  <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-6">
    Locate this development
  </h2>

  {project.mapEmbed ? (
    <>
      <div className="overflow-hidden rounded-xl border border-border shadow-md">
        <iframe
          src={project.mapEmbed}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${project.name} Google Map`}
        />
      </div>

      {project.mapLink && (
        <div className="mt-5 text-center">
          <a
            href={project.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition"
          >
            <MapPin className="w-5 h-5" />
            Open in Google Maps
          </a>
        </div>
      )}
    </>
  ) : (
    <div className="rounded-xl border border-border bg-linen p-12 text-center">
      <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
      <p className="text-muted-foreground">
        Map location will be available soon.
      </p>
    </div>
  )}
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
