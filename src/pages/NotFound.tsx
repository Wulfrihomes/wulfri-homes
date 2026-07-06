import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-40 md:py-48 min-h-[70vh] flex items-center">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-8xl md:text-9xl font-serif text-primary/20 mb-4">404</p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-none btn-luxury">
                <Link to="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none">
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
