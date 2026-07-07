import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2, Search, LogOut, Mail, Phone, MessageCircle, Trash2, TrendingUp, Users, Flame, Clock } from "lucide-react";

interface Lead {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  country: string | null;
  project_interest: string;
  plot_size: string | null;
  payment_plan: string | null;
  budget: string | null;
  timeline: string | null;
  buyer_type: string | null;
  message: string | null;
  source: string | null;
  utm_source: string | null;
  utm_campaign: string | null;
  score: number;
  priority: string;
  status: string;
  admin_notes: string | null;
  created_at: string;
}

const STATUSES = ["new", "contacted", "qualified", "inspection_booked", "closed_won", "closed_lost"];

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selected, setSelected] = useState<Lead | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setLeads((data as Lead[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const ch = supabase
      .channel("leads-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, load)
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, []);

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      if (filterPriority !== "all" && l.priority !== filterPriority) return false;
      if (filterStatus !== "all" && l.status !== filterStatus) return false;
      if (search) {
        const s = search.toLowerCase();
        return (
          l.full_name.toLowerCase().includes(s) ||
          l.email.toLowerCase().includes(s) ||
          l.phone.toLowerCase().includes(s) ||
          (l.project_interest || "").toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [leads, search, filterPriority, filterStatus]);

  const stats = useMemo(() => {
    const hot = leads.filter((l) => l.priority === "hot").length;
    const warm = leads.filter((l) => l.priority === "warm").length;
    const newToday = leads.filter((l) => new Date(l.created_at) > new Date(Date.now() - 86400000)).length;
    return { total: leads.length, hot, warm, newToday };
  }, [leads]);

  const updateLead = async (id: string, patch: Partial<Lead>) => {
    const { error } = await supabase.from("leads").update(patch).eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Updated");
      if (selected?.id === id) setSelected({ ...selected, ...patch } as Lead);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      setSelected(null);
    }
  };

  const priorityColor = (p: string) =>
    p === "hot" ? "bg-red-100 text-red-700 border-red-300" : p === "warm" ? "bg-amber-100 text-amber-700 border-amber-300" : "bg-slate-100 text-slate-600 border-slate-300";

  return (
    <div className="min-h-screen bg-linen">
      {/* Top bar */}
      <header className="bg-charcoal text-ivory border-b border-ivory/10">
        <div className="container-full flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="font-serif text-lg">Wulfri Homes</Link>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ivory/60 hidden sm:inline">{user?.email}</span>
            <button onClick={signOut} className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ivory/80 hover:text-primary">
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="container-full py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: stats.total, icon: Users, color: "text-charcoal" },
            { label: "Hot Leads", value: stats.hot, icon: Flame, color: "text-red-600" },
            { label: "Warm Leads", value: stats.warm, icon: TrendingUp, color: "text-amber-600" },
            { label: "New (24h)", value: stats.newToday, icon: Clock, color: "text-primary" },
          ].map((s) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-ivory border border-border p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-stone">{s.label}</span>
                <s.icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <div className="font-serif text-3xl text-charcoal">{s.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-ivory border border-border p-4 mb-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone" />
            <input
              placeholder="Search name, email, phone, project..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)} className="px-4 py-2 bg-background border border-border text-sm">
            <option value="all">All priorities</option>
            <option value="hot">Hot</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-2 bg-background border border-border text-sm">
            <option value="all">All statuses</option>
            {STATUSES.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
          </select>
        </div>

        {/* Table */}
        <div className="bg-ivory border border-border overflow-hidden">
          {loading ? (
            <div className="p-16 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
          ) : filtered.length === 0 ? (
            <div className="p-16 text-center text-stone">No leads match the filters.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-linen border-b border-border">
                  <tr className="text-left">
                    <th className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-stone">Lead</th>
                    <th className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-stone">Project</th>
                    <th className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-stone">Budget</th>
                    <th className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-stone">Score</th>
                    <th className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-stone">Status</th>
                    <th className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-stone">When</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((l) => (
                    <tr key={l.id} className="border-b border-border/50 hover:bg-linen/60 cursor-pointer" onClick={() => setSelected(l)}>
                      <td className="px-4 py-3">
                        <div className="font-medium text-charcoal">{l.full_name}</div>
                        <div className="text-xs text-stone">{l.email}</div>
                      </td>
                      <td className="px-4 py-3 text-charcoal/80">{l.project_interest}</td>
                      <td className="px-4 py-3 text-charcoal/80">{l.budget || "—"}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 border text-[10px] tracking-[0.15em] uppercase ${priorityColor(l.priority)}`}>
                          {l.priority} · {l.score}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={l.status}
                          onChange={(e) => { e.stopPropagation(); updateLead(l.id, { status: e.target.value }); }}
                          onClick={(e) => e.stopPropagation()}
                          className="px-2 py-1 bg-background border border-border text-xs"
                        >
                          {STATUSES.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-xs text-stone">{new Date(l.created_at).toLocaleString()}</td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={(e) => { e.stopPropagation(); deleteLead(l.id); }} className="text-stone hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail drawer */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-charcoal/50 z-50 flex justify-end"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="w-full max-w-lg bg-ivory h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-serif text-2xl text-charcoal">{selected.full_name}</h2>
                  <span className={`inline-block mt-2 px-2 py-1 border text-[10px] tracking-[0.15em] uppercase ${priorityColor(selected.priority)}`}>
                    {selected.priority} · Score {selected.score}
                  </span>
                </div>
                <button onClick={() => setSelected(null)} className="text-stone hover:text-charcoal text-2xl leading-none">×</button>
              </div>

              <div className="flex gap-2 mb-6">
                <a href={`mailto:${selected.email}`} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-primary text-primary text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-ivory transition-colors">
                  <Mail className="w-4 h-4" /> Email
                </a>
                <a href={`tel:${selected.phone}`} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-primary text-primary text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-ivory transition-colors">
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a
                  href={`https://wa.me/${selected.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-primary text-primary text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-ivory transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>

              <dl className="space-y-3 text-sm">
                {[
                  ["Email", selected.email],
                  ["Phone", selected.phone],
                  ["Country", selected.country],
                  ["Project", selected.project_interest],
                  ["Plot Size", selected.plot_size],
                  ["Payment Plan", selected.payment_plan],
                  ["Budget", selected.budget],
                  ["Timeline", selected.timeline],
                  ["Buyer Type", selected.buyer_type],
                  ["Source", selected.source],
                  ["UTM Source", selected.utm_source],
                  ["UTM Campaign", selected.utm_campaign],
                  ["Submitted", new Date(selected.created_at).toLocaleString()],
                ].filter(([, v]) => v).map(([k, v]) => (
                  <div key={k as string} className="flex justify-between gap-4 border-b border-border/50 py-2">
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-stone">{k}</dt>
                    <dd className="text-charcoal text-right">{v as string}</dd>
                  </div>
                ))}
              </dl>

              {selected.message && (
                <div className="mt-6">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-stone mb-2">Message</div>
                  <p className="text-sm text-charcoal bg-linen p-4 border border-border">{selected.message}</p>
                </div>
              )}

              <div className="mt-6">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2">Admin Notes</label>
                <textarea
                  rows={4}
                  defaultValue={selected.admin_notes || ""}
                  onBlur={(e) => updateLead(selected.id, { admin_notes: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border text-sm focus:outline-none focus:border-primary"
                  placeholder="Follow-up notes, call summary…"
                />
              </div>

              <button
                onClick={() => deleteLead(selected.id)}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-red-300 text-red-600 text-xs tracking-[0.15em] uppercase hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" /> Delete Lead
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
