import { useState } from "react";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/wulfri";

const FAQs = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-linen">
        <div className="container-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-6">Frequently Asked</p>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.05]">
              Everything you need to know, <span className="italic text-primary">answered</span>.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-narrow">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
                >
                  <span className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    {openIdx === i ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-charcoal" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-muted-foreground leading-relaxed max-w-3xl">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
