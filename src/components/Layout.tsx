import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";

interface LayoutProps {
  children: ReactNode;
  transparentHeader?: boolean;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-clip">
      <Header />
      <motion.main
        className="flex-1 pb-20 lg:pb-0 [padding-bottom:calc(env(safe-area-inset-bottom)+5rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
      <FloatingContact />
    </div>
  );
};
