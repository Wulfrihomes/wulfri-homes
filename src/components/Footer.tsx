import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { PHONE_NUMBER, EMAIL, OFFICE_ADDRESS } from "@/data/wulfri";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-full py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
                <span className="font-serif text-xl text-primary">W</span>
              </div>
              <div className="leading-none">
                <div className="font-serif text-2xl text-ivory">Wulfri Homes</div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-ivory/50 mt-1">Est. 2016</div>
              </div>
            </Link>
            <p className="mt-6 text-sm text-ivory/60 leading-relaxed max-w-sm">
              Nigeria's trusted real estate development and marketing company. Building generational wealth through verified land and premium homes.
            </p>

            <div className="mt-8">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">Newsletter</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 h-11 px-4 text-sm bg-ivory/5 border border-ivory/15 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="h-11 px-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Projects" },
                { to: "/investment", label: "Investment" },
                { to: "/blog", label: "Blog" },
                { to: "/faqs", label: "FAQs" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ivory/60 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">Properties</h4>
            <ul className="space-y-3">
              {[
                { to: "/land-estates", label: "Land Estates" },
                { to: "/housing", label: "Housing" },
                { to: "/commercial", label: "Commercial" },
                { to: "/projects?filter=upcoming", label: "Upcoming" },
                { to: "/projects?filter=available", label: "Available" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ivory/60 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-ivory/60">
              <li>{OFFICE_ADDRESS}</li>
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="text-ivory/40">Mon–Sat, 9am–6pm WAT</li>
            </ul>

            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-ivory/15 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-full py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Wulfri Homes Limited. All rights reserved. RC 1450832.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-ivory/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-ivory/40 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-ivory/40 hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
