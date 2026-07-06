import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/wulfri";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [featured, ...rest] = blogPosts;
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-linen">
        <div className="container-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-6">Insights & Journal</p>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.05]">
              Sharpen your <span className="italic text-primary">investment lens</span>.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-ivory">
        <div className="container-full">
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-10 items-center card-lift bg-linen">
            <div className="aspect-[4/3] overflow-hidden image-zoom">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4 text-xs">
                <span className="text-primary tracking-[0.2em] uppercase">{featured.category}</span>
                <span className="text-stone">•</span>
                <span className="text-muted-foreground">{featured.date}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 leading-[1.15]">{featured.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-stone mb-6">
                <Clock className="w-3 h-3" /> {featured.readTime}
              </div>
              <Link to="#" className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-primary link-underline">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-full">
          <div className="grid md:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group card-lift">
                <div className="aspect-[4/3] overflow-hidden image-zoom mb-6">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase mb-3">
                  <span className="text-primary">{post.category}</span>
                  <span className="text-stone">•</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="text-xs text-stone flex items-center gap-2"><Clock className="w-3 h-3" />{post.readTime}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
