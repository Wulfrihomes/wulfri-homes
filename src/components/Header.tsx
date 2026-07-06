import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Projects",
    children: [
      { to: "/projects", label: "All Projects" },
      { to: "/land-estates", label: "Land Estates" },
      { to: "/housing", label: "Housing Projects" },
      { to: "/commercial", label: "Commercial Properties" },
    ],
  },
  { to: "/investment", label: "Investment" },
  { to: "/blog", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 border-2 border-primary flex items-center justify-center">
              <span className="font-serif text-lg text-primary">W</span>
            </div>
            <div className="leading-none">
              <div className={cn("font-serif text-xl tracking-tight transition-colors", scrolled ? "text-charcoal" : "text-charcoal")}>
                Wulfri Homes
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-stone mt-1">Est. 2016</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-xs font-medium tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal transition-colors">
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4"
                      >
                        <div className="bg-ivory border border-border shadow-xl py-2 min-w-[240px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-6 py-3 text-xs tracking-[0.1em] uppercase text-charcoal/70 hover:text-primary hover:bg-linen transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className={cn(
                    "text-xs font-medium tracking-[0.15em] uppercase transition-colors link-underline",
                    location.pathname === link.to ? "text-primary" : "text-charcoal/70 hover:text-charcoal"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-gold">
              Book Inspection
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border overflow-hidden bg-ivory"
            >
              <div className="py-6 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="border-b border-border/50">
                      <p className="px-4 py-3 text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-6 py-3 text-sm text-charcoal/80 hover:bg-linen"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to!}
                      className="block px-4 py-3 text-sm font-medium text-charcoal hover:bg-linen"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-4 px-4">
                  <Link to="/contact" className="btn-gold w-full">
                    Book Inspection
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
