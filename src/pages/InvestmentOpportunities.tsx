import { useState } from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, Building2, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const InvestmentOpportunities = () => {
  const [amount, setAmount] = useState(10000000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(30);

  const futureValue = amount * Math.pow(1 + rate / 100, years);
  const gain = futureValue - amount;

  const format = (n: number) =>
    new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-6">Investment Opportunities</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
              Grow your wealth with <span className="italic text-primary">real assets</span>.
            </h1>
            <p className="text-lg text-ivory/70 leading-relaxed">
              Nigerian land has historically outperformed stocks, bonds and most digital assets over the last decade. Wulfri Homes gives you a structured, low-friction path in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-ivory">
        <div className="container-full grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: TrendingUp, title: "Property Appreciation", desc: "25–40% average yearly appreciation on prime plots." },
            { icon: DollarSign, title: "Rental Income", desc: "Recurring cashflow from residential and commercial units." },
            { icon: BarChart3, title: "Capital Growth", desc: "Long-term wealth compounded by infrastructure development." },
            { icon: Building2, title: "Flexible Plans", desc: "Structured payment schedules aligned to your income." },
          ].map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <p.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-serif text-xl text-charcoal mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-linen">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-5 h-5 text-primary" />
            <p className="eyebrow">ROI Calculator</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 leading-[1.1]">
            See your investment <span className="italic">grow</span>.
          </h2>

          <div className="bg-ivory p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-stone mb-3 block">Investment Amount</label>
                <input
                  type="range"
                  min={1000000}
                  max={100000000}
                  step={500000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="font-serif text-3xl text-charcoal mt-2">{format(amount)}</div>
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-stone mb-3 block">Holding Period (Years)</label>
                <input type="range" min={1} max={15} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-primary" />
                <div className="font-serif text-3xl text-charcoal mt-2">{years} {years === 1 ? "year" : "years"}</div>
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-stone mb-3 block">Annual Appreciation Rate</label>
                <input type="range" min={10} max={50} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-primary" />
                <div className="font-serif text-3xl text-charcoal mt-2">{rate}% / year</div>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 flex flex-col justify-center">
              <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Projected Future Value</div>
              <div className="font-serif text-5xl text-ivory mb-8">{format(futureValue)}</div>
              <div className="space-y-3 pt-6 border-t border-ivory/10">
                <div className="flex justify-between text-sm">
                  <span className="text-ivory/60">Initial Investment</span>
                  <span>{format(amount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ivory/60">Total Gain</span>
                  <span className="text-primary font-medium">+{format(gain)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ivory/60">Multiple</span>
                  <span>{(futureValue / amount).toFixed(2)}x</span>
                </div>
              </div>
              <Link to="/contact" className="mt-8 btn-gold w-full">Start Investing</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Projections are illustrative and based on historical appreciation trends. Past performance does not guarantee future results.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default InvestmentOpportunities;
