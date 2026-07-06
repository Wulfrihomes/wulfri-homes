import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, ProjectType, ProjectStatus } from "@/data/wulfri";
import { cn } from "@/lib/utils";

const typeFilters: (ProjectType | "All")[] = ["All", "Land", "Housing", "Commercial"];
const statusFilters: (ProjectStatus | "All")[] = ["All", "Available", "Selling Fast", "Upcoming", "Sold Out"];

const Projects = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter");
  const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">(
    initialFilter === "upcoming" ? "Upcoming" : initialFilter === "available" ? "Available" : "All"
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (typeFilter !== "All" && p.type !== typeFilter) return false;
      if (statusFilter !== "All" && p.status !== statusFilter) return false;
      return true;
    });
  }, [typeFilter, statusFilter]);

  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-linen">
        <div className="container-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-4">Our Portfolio</p>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.05] max-w-4xl">
              Every project a <span className="italic text-primary">promise</span> to future generations.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-full">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-border">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone mb-3">Type</div>
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={cn(
                      "px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-all",
                      typeFilter === t
                        ? "bg-charcoal text-ivory border-charcoal"
                        : "bg-transparent text-charcoal/70 border-border hover:border-charcoal"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone mb-3">Status</div>
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={cn(
                      "px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-all",
                      statusFilter === s
                        ? "bg-primary text-ivory border-primary"
                        : "bg-transparent text-charcoal/70 border-border hover:border-primary"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8 text-sm text-muted-foreground">
            Showing <span className="text-charcoal font-medium">{filtered.length}</span> projects
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              No projects match your filters.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
