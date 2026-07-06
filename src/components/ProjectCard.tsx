import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/wulfri";

const statusStyles: Record<string, string> = {
  Available: "bg-emerald-deep/10 text-emerald-800 border-emerald-800/20",
  "Selling Fast": "bg-primary/10 text-primary border-primary/30",
  Upcoming: "bg-charcoal/10 text-charcoal border-charcoal/20",
  "Sold Out": "bg-destructive/10 text-destructive border-destructive/20",
};

export const ProjectCard = ({ project, index = 0 }: { project: Project; index?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link to={`/project/${project.slug}`} className="group block card-lift bg-card">
        <div className="relative aspect-[4/3] overflow-hidden image-zoom">
          <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-3 py-1 text-[10px] tracking-[0.2em] uppercase border ${statusStyles[project.status]}`}>
              {project.status}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-ivory/90 text-charcoal">
              {project.type}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="text-xs tracking-[0.2em] uppercase text-ivory flex items-center gap-2">
              View Details <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-stone mb-2">
            <MapPin className="w-3 h-3" />
            <span>{project.location}</span>
          </div>
          <h3 className="font-serif text-2xl text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.tagline}</p>
          <div className="flex items-end justify-between pt-4 border-t border-border/60">
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-stone">Starting From</div>
              <div className="font-serif text-xl text-charcoal">{project.priceFrom}</div>
            </div>
            <div className="text-xs text-primary tracking-[0.15em] uppercase link-underline">Explore</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
