import { useState } from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Check } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER, EMAIL, OFFICE_ADDRESS } from "@/data/wulfri";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Inspection request received", description: "Our client team will confirm your booking within 24 hours." });
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal text-ivory">
        <div className="container-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-6">Get In Touch</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Let's build your <span className="italic text-primary">next chapter</span>.
            </h1>
            <p className="text-lg text-ivory/70 max-w-2xl">
              Book a complimentary site inspection or speak with a client advisor. We respond to every enquiry within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-full grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Book Free Inspection</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">Tell us about your interest</h2>

            {submitted ? (
              <div className="p-10 bg-linen text-center">
                <div className="w-14 h-14 bg-primary text-ivory rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Request Received</h3>
                <p className="text-muted-foreground">Our team will contact you within 24 hours to confirm your inspection date and share directions.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-stone mb-2 block">Full Name *</label>
                  <input required className="w-full h-12 px-4 bg-linen border border-border focus:outline-none focus:border-primary text-charcoal" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-stone mb-2 block">Phone *</label>
                  <input required type="tel" className="w-full h-12 px-4 bg-linen border border-border focus:outline-none focus:border-primary text-charcoal" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-stone mb-2 block">Email *</label>
                  <input required type="email" className="w-full h-12 px-4 bg-linen border border-border focus:outline-none focus:border-primary text-charcoal" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-stone mb-2 block">Country</label>
                  <input className="w-full h-12 px-4 bg-linen border border-border focus:outline-none focus:border-primary text-charcoal" placeholder="Nigeria" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-stone mb-2 block">Project of Interest</label>
                  <select className="w-full h-12 px-4 bg-linen border border-border focus:outline-none focus:border-primary text-charcoal">
                    <option>Emirates Parks & Gardens</option>
                    <option>Lushville Estate</option>
                    <option>The Legacy</option>
                    <option>Zylus Chrystland City</option>
                    <option>Wulfri Smart City</option>
                    <option>Emerald Court</option>
                    <option>Royal Crest Estate</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-stone mb-2 block">Preferred Inspection Date</label>
                  <input type="date" className="w-full h-12 px-4 bg-linen border border-border focus:outline-none focus:border-primary text-charcoal" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-stone mb-2 block">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-linen border border-border focus:outline-none focus:border-primary text-charcoal resize-none" />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-gold w-full md:w-auto">Submit Request</button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <aside className="space-y-8">
            <div className="bg-charcoal text-ivory p-8">
              <h3 className="font-serif text-2xl mb-6">Reach us directly</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-1">Head Office</div>
                    <div className="text-sm text-ivory/80">{OFFICE_ADDRESS}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-1">Phone</div>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-ivory/80 hover:text-primary">{PHONE_NUMBER}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-1">Email</div>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-ivory/80 hover:text-primary">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-1">Hours</div>
                    <div className="text-sm text-ivory/80">Mon–Fri, 9am–5pm / Sat, 9am–1pm WAT</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 h-14 bg-[#25D366] text-white text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </aside>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-linen">
        <div className="aspect-[21/9] bg-charcoal/5 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="font-serif text-2xl text-charcoal">Head Office Location</p>
            <p className="text-sm mt-2">{OFFICE_ADDRESS}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
