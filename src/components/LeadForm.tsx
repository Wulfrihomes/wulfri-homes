import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { submitLead, LeadInput } from "@/lib/leads";
import { toast } from "sonner";

interface Props {
  source?: string;
  variant?: "full" | "compact";
  projectInterest?: string;
  className?: string;
}

export const LeadForm = ({
  source = "Emirates Landing",
  variant = "full",
  projectInterest = "Emirates Parks & Gardens",
  className = "",
}: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<LeadInput>({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    project_interest: projectInterest,
    plot_size: "",
    payment_plan: "",
    budget: "",
    timeline: "",
    buyer_type: "",
    message: "",
    source,
  });

  const update =
    (k: keyof LeadInput) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    const { error } = await submitLead(form);

    setSubmitting(false);

    if (error) {
      toast.error(error);
      return;
    }

   // Meta Pixel Lead Conversion Event
if (typeof window !== "undefined" && (window as any).fbq) {
  (window as any).fbq("track", "Lead", {
    content_name: form.project_interest,
    content_category: "Real Estate",
    content_type: "Land Investment",
    source: form.source,
  });
}

    setSubmitted(true);

    toast.success(
      "Thank you — our team will contact you within 24 hours"
    );
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-ivory border border-primary/30 p-10 text-center ${className}`}
      >
        <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />

        <h3 className="font-serif text-2xl text-charcoal mb-2">
          Request Received
        </h3>

        <p className="text-stone">
          A senior advisor will reach out within 24 hours with your
          inspection details and pricing pack.
        </p>
      </motion.div>
    );
  }

  const input =
    "w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none text-sm text-charcoal";

  const label =
    "block text-[11px] tracking-[0.15em] uppercase text-charcoal/70 mb-2";

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-ivory border border-border p-6 sm:p-8 ${className}`}
    >
      <div className="mb-6">
        <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
          Reserve Your Plot
        </div>

        <h3 className="font-serif text-2xl text-charcoal">
          Speak With an Advisor
        </h3>

        <p className="text-sm text-stone mt-1">
          Limited units remaining. Response within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="sm:col-span-2">
          <label className={label}>Full Name *</label>
          <input
            required
            className={input}
            value={form.full_name}
            onChange={update("full_name")}
          />
        </div>

        <div>
          <label className={label}>Email *</label>
          <input
            type="email"
            required
            className={input}
            value={form.email}
            onChange={update("email")}
          />
        </div>

        <div>
          <label className={label}>Phone / WhatsApp *</label>
          <input
            required
            className={input}
            value={form.phone}
            onChange={update("phone")}
            placeholder="+234..."
          />
        </div>

        {variant === "full" && (
          <>
            <div>
              <label className={label}>Country</label>
              <input
                className={input}
                value={form.country}
                onChange={update("country")}
                placeholder="Nigeria, UK, US..."
              />
            </div>

            <div>
              <label className={label}>Buyer Type</label>
              <select
                className={input}
                value={form.buyer_type}
                onChange={update("buyer_type")}
              >
                <option value="">Select…</option>
                <option>End User / Family</option>
                <option>Investor</option>
                <option>Diaspora Investor</option>
                <option>Corporate</option>
              </select>
            </div>

            <div>
              <label className={label}>Plot Size</label>
              <select
                className={input}
                value={form.plot_size}
                onChange={update("plot_size")}
              >
                <option value="">Select…</option>
                <option>300 sqm</option>
                <option>600 sqm</option>
                <option>Commercial</option>
              </select>
            </div>

            <div>
              <label className={label}>Payment Plan</label>
              <select
                className={input}
                value={form.payment_plan}
                onChange={update("payment_plan")}
              >
                <option value="">Select…</option>
                <option>Outright</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>12 Months</option>
              </select>
            </div>

            <div>
              <label className={label}>Budget</label>
              <select
                className={input}
                value={form.budget}
                onChange={update("budget")}
              >
                <option value="">Select…</option>
                <option>Under ₦10M</option>
                <option>₦10M – ₦20M</option>
                <option>₦20M – ₦50M</option>
                <option>₦50M – ₦100M</option>
                <option>Above ₦100M</option>
              </select>
            </div>

            <div>
              <label className={label}>Timeline</label>
              <select
                className={input}
                value={form.timeline}
                onChange={update("timeline")}
              >
                <option value="">Select…</option>
                <option>Immediate (within 1 month)</option>
                <option>Within 3 months</option>
                <option>Within 6 months</option>
                <option>Just exploring</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className={label}>Message (optional)</label>
              <textarea
                rows={3}
                className={input}
                value={form.message}
                onChange={update("message")}
              />
            </div>
          </>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-gold w-full mt-6 flex items-center justify-center gap-2"
      >
        {submitting && (
          <Loader2 className="w-4 h-4 animate-spin" />
        )}

        Request Site Inspection
      </button>

      <p className="text-[11px] text-stone text-center mt-3">
        Your information is confidential and never shared.
      </p>
    </form>
  );
};