import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export const leadSchema = z.object({
  full_name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  country: z.string().trim().max(60).optional().or(z.literal("")),
  project_interest: z.string().max(100).default("Emirates Parks & Gardens"),
  plot_size: z.string().max(60).optional().or(z.literal("")),
  payment_plan: z.string().max(60).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  timeline: z.string().max(60).optional().or(z.literal("")),
  buyer_type: z.string().max(60).optional().or(z.literal("")),
  message: z.string().max(1000).optional().or(z.literal("")),
  source: z.string().max(60).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

function getUtm() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") || undefined,
    utm_medium: p.get("utm_medium") || undefined,
    utm_campaign: p.get("utm_campaign") || undefined,
  };
}

export async function submitLead(input: LeadInput) {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.errors[0].message };
  }
  const payload = { ...parsed.data, ...getUtm() };
  const { error } = await supabase.from("leads").insert(payload as any);
  if (error) return { error: error.message };
  return { error: null };
}
