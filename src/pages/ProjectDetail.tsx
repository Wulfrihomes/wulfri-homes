import { LeadForm } from "@/components/LeadForm";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Check, Download, MessageCircle, ArrowLeft, Calendar, PlayCircle } from "lucide-react";
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
          <Link to="/projects" className="btn-gold mt-6">
            Browse All Projects
          </Link>
        </div>
      </Layout>
    );
  }

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Wulfri Homes, I'm interested in ${project.name}. Please share more details.`
  )}`;

  const related = projects.filter((p) => p.type === project.type && p.id !== project.id).slice(0, 3);
  const heroImage = project.heroImage || project.gallery[activeImg] || project.gallery[0];
  const detailContent = projectDetailContent[project.slug];
  const previewImages = detailContent?.galleryPreview?.length ? detailContent.galleryPreview : project.gallery;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[650px] pt-24 overflow-hidden bg-charcoal">
        <img src={heroImage} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/70" />

        <div className="relative container-full h-full flex flex-col justify-between pb-12">
          {/* Top Metadata Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white hover:text-[#D97706] w-fit transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-2">
                <span className="px-4 py-1 text-[10px] tracking-[0.2em] uppercase bg-[#D97706] text-white font-semibold">
                  {project.status}
                </span>
                <span className="px-4 py-1 text-[10px] tracking-[0.2em] uppercase border border-white/40 text-white">
                  {project.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-charcoal/40 backdrop-blur-sm px-3 py-1 text-xs border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                <span>
                  {project.location}, {project.state} State
                </span>
              </div>
            </div>
          </div>

          {/* Centralized Hero Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center mx-auto max-w-4xl my-auto px-4"
          >
            {/* Dynamic Developer Tag */}
            <div className="inline-block bg-[#D97706] text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-6 py-2 rounded-full mb-3 shadow-md">
              {project.developer || "By Lexshield Properties Limited"}
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.15] mb-6 drop-shadow-sm">
              {project.type === "Housing" ? "Acquire Luxury at " : "Own Land at "}
              <span className="text-[#D97706] italic font-semibold">{project.name}</span>
            </h1>

            <p className="text-sm md:text-base text-white/90 max-w-2xl leading-relaxed mb-8 drop-shadow-sm">
              Prime location in {project.location}, {project.state} State. Verified titles, excellent infrastructure, and
              flexible payment plans.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 h-12 bg-[#D97706] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#b56205] transition-all transform hover:scale-105 shadow-lg"
            >
              Book Free Inspection
            </Link>
          </motion.div>

          <div className="hidden md:block h-4" />
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-full max-w-5xl space-y-20">
          <div>
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-6">About this development</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
          </div>

          {detailContent && (
            <>
              <div>
                <p className="eyebrow mb-4">{detailContent.eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">
                  {detailContent.heading}
                </h2>
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
                      <p className="text-sm text-charcoal/75 leading-relaxed">{u.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Estate Video Section */}
              <div>
                <p className="eyebrow mb-4">Estate Video</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">Take a virtual tour.</h2>
                {project.youtubeVideoId ? (
                  <div className="relative aspect-video bg-charcoal overflow-hidden border border-border shadow-md">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                      title={`${project.name} Virtual Tour`}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video bg-charcoal overflow-hidden group cursor-pointer">
                    <img
                      src={previewImages[0]}
                      alt={`${project.name} video preview`}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle
                        className="w-20 h-20 text-primary drop-shadow-lg group-hover:scale-110 transition-transform"
                        strokeWidth={1.2}
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 text-ivory text-xs tracking-[0.2em] uppercase bg-charcoal/60 px-3 py-1">
                      Coming soon
                    </div>
                  </div>
                )}
              </div>

              <div>
                <p className="eyebrow mb-4">Estate Preview</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-8">
                  {detailContent.previewHeading}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {previewImages.map((src, i) => (
                    <motion.div
                      key={`${src}-${i}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`overflow-hidden ${
                        i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto" : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${project.name} view ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
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
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-[1.15] mb-6">Locate this development</h2>
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
                      <MapPin className="w-5 h-5" /> Open in Google Maps
                    </a>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-xl border border-border bg-linen p-12 text-center">
                <MapPin className="w-10 h-10 text-[#D97706] mx-auto mb-3" />
                <p className="text-muted-foreground">Map location will be available soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Section */}
      {project.pricingTiers && project.pricingTiers.length > 0 && (
        <section className="py-24 bg-white border-t border-border">
          <div className="container-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] tracking-[0.3em] uppercase bg-red-50 text-[#C2410C] px-3 py-1 font-bold rounded-sm">
                Pricing
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-3">
                Transparent pricing. No hidden charges.
              </h2>
              <p className="text-muted-foreground text-sm">
                Initial deposit of{" "}
                <span className="font-semibold text-charcoal">
                  {project.slug === "country-home-estate"
                    ? "₦300,000"
                    : project.slug === "zylus-olumo-pride"
                    ? "₦1,000,000"
                    : "₦1,000,000"}
                </span>
                . Flexible plans available.
              </p>
            </div>

            {/* Pricing Cards */}
            <div
              className={`grid gap-8 items-start max-w-6xl mx-auto px-4 ${
                project.pricingTiers.length === 1
                  ? "grid-cols-1 max-w-md"
                  : project.pricingTiers.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl"
                  : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {project.pricingTiers.map((tier) => (
  <div
    key={tier.title}
    className={`relative bg-white p-8 border ${
      tier.popular ? "border-[#C2410C] ring-1 ring-[#C2410C]" : "border-gray-200"
    } transition-all shadow-sm flex flex-col`}
  >
    {tier.popular && (
      <div className="absolute -top-3 left-4 bg-[#C2410C] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1">
        Most Popular
      </div>
    )}

    <h3 className="font-serif text-2xl text-charcoal mb-8 mt-2">
      {tier.title}
    </h3>

    <div className="space-y-4 mb-8 flex-grow">
      {tier.plans.map((plan) => (
        <div
          key={plan.label}
          className="flex justify-between items-center pb-3 border-b border-gray-100 text-sm"
        >
          <span className="text-muted-foreground">{plan.label}</span>
          <span className="font-serif font-medium text-[#C2410C] text-base">
            {plan.value}
          </span>
        </div>
      ))}
    </div>

    <button
      type="button"
      onClick={() =>
        document.getElementById("reserve-plot")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      className="w-full h-12 bg-[#111111] text-white text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center justify-center hover:bg-charcoal/90 transition-colors text-center"
    >
      Reserve This Plot
    </button>
  </div>
))}
            </div>

            <div className="text-center mt-12 text-[10px] tracking-[0.25em] text-stone uppercase font-medium">
              All Prices Inclusive • No Hidden Charges
            </div>
          </div>
        </section>
      )}
<section
  id="reserve-plot"
  className="py-20 md:py-28 bg-[#FAF8F5]"
>
  <div className="container-narrow px-4">
    {/* Top Header Text */}
    <div className="text-center mb-10">
      <p className="text-[10px] tracking-[0.35em] uppercase text-[#D97706] font-bold mb-3">
        SECURE YOUR INVESTMENT
      </p>

      <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-3">
        Only Serious Enquiries. Priority Response.
      </h2>

      <p className="text-xs md:text-sm text-charcoal/70">
        Complete the form and a senior advisor will contact you within 24 hours.
      </p>
    </div>

    {/* Lead Form Component matching uploaded layout */}
    <LeadForm
      source={`${project.name} Project Page`}
      projectInterest={project.name}
      variant="premium"
    />
  </div>
</section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-24 bg-linen">
          <div className="container-full">
            <p className="eyebrow mb-4">Related Projects</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12">You may also like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProjectDetail;