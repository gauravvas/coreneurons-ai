import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gaurav Vashisht — CoreNeurons.ai",
  description:
    "20+ years of enterprise AI, ERP transformation, IPO readiness, and finance leadership. Certified Agentic AI PM · AAAI · ACM · IEEE.",
};

const stats = [
  { value: "20+", label: "Years of Enterprise Experience" },
  { value: "$12M+", label: "Technology Portfolios Managed" },
  { value: "40–45%", label: "Consistent Cost Reduction Delivered" },
  { value: "5", label: "Countries of Global Delivery" },
];

const credentials = [
  "Certified Agentic AI Product Manager (Maven)",
  "Member, AAAI — Association for the Advancement of AI",
  "Member, ACM — Association for Computing Machinery",
  "Member, IEEE",
  "SOX / ITGC Framework Design",
  "SEC Compliance & IPO Readiness",
  "Oracle EBS & Oracle Cloud Certified",
  "NetSuite · Workday · BlackLine Expert",
];

const achievements = [
  {
    icon: "🏛️",
    metric: "15+",
    label: "ERP Platforms",
    detail:
      "Designed and delivered end-to-end ERP transformations across Oracle EBS, Oracle Cloud, NetSuite, Workday, and 15+ adjacent platforms — for global enterprises and high-growth tech companies alike.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: "📈",
    metric: "IPO",
    label: "Readiness Expert",
    detail:
      "Operated on both sides of the IPO journey — building institutional-grade financial controls, SOX/ITGC frameworks, and audit infrastructure for private companies going public, and sustaining compliance for those already listed.",
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: "🤖",
    metric: "0→1",
    label: "Enterprise AI Adoption",
    detail:
      "Built and led a cross-functional AI pod inside a regulated financial organization — evaluating, governing, and deploying AI tools across CFO, CISO, CLO, and IT. Moved from pilot to production without compliance or security exposure.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: "💹",
    metric: "40%",
    label: "Cost Reduction Delivered",
    detail:
      "Rebuilt Finance systems foundations to support IPO-level scrutiny at a high-growth digital asset company. Delivered 40% cost reduction while expanding global capability — lean teams that punch above their weight.",
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
];

const platforms = [
  "Oracle EBS", "Oracle Cloud", "NetSuite", "Workday",
  "BlackLine", "Kyriba", "Brex", "Agiloft",
  "SimpleLegal", "ADP", "ZIP", "Salesforce",
];

const industries = [
  "Gaming", "Digital Assets & Crypto", "FinTech",
  "Media & Entertainment", "Enterprise Software",
  "Financial Services", "Legal & Compliance", "SaaS",
];

const countries = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇮🇳", name: "India" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 hero-glow grid-bg overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Founder & CEO — CoreNeurons.ai
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
                Gaurav<br />
                <span className="gradient-text">Vashisht</span>
              </h1>

              <p className="text-xl text-slate-300 font-medium mb-3">
                Enterprise AI Strategist · ERP Architect · IPO Readiness Expert
              </p>

              <p className="text-slate-400 leading-relaxed mb-8 max-w-lg">
                20+ years at the intersection of enterprise technology, finance transformation,
                and artificial intelligence. From Fortune 500 ERP programmes to zero-to-one AI
                adoption inside regulated financial organisations — Gaurav has been the person
                in the room getting it done.
              </p>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Certified Agentic AI PM", "AAAI Member", "ACM Member", "IEEE Member"].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-300"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-7 py-3 rounded-xl text-sm font-semibold text-white btn-primary"
                >
                  Work With Gaurav →
                </Link>
                <Link
                  href="/services"
                  className="px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-white/10 hover:bg-white/5 transition-colors"
                >
                  View Expertise
                </Link>
              </div>
            </div>

            {/* Avatar card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="animate-float w-72 h-72 rounded-3xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-emerald-500/20 border border-white/10 flex flex-col items-center justify-center gap-3">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-4xl shadow-xl">
                    GV
                  </div>
                  <p className="text-white font-semibold text-lg">Gaurav Vashisht</p>
                  <p className="text-slate-400 text-sm">Founder & CEO</p>
                  <div className="flex gap-2">
                    {["🇺🇸", "🇯🇵", "🇮🇳"].map((f) => (
                      <span key={f} className="text-lg">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-3xl bg-blue-500/5 blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="py-14 border-y border-white/5 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE STORY ────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">The Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Two Decades at the <span className="gradient-text">Frontier of Enterprise AI</span>
          </h2>

          <div className="space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              Gaurav Vashisht has spent over two decades doing the work that most consultants only
              advise on. He has been the architect, the programme lead, and the operator — inside
              the machine — on some of the most complex enterprise technology transformations in
              the world.
            </p>
            <p>
              His career spans the full arc of enterprise technology: from designing and delivering
              ERP transformations across <strong className="text-white">Oracle EBS, Oracle Cloud, NetSuite, and Workday</strong> for
              companies ranging from global enterprises to high-growth tech startups, to building
              the <strong className="text-white">institutional-grade financial controls and audit infrastructure</strong> that
              take private companies from Series C to IPO — and keep them compliant afterward.
            </p>
            <p>
              When the AI era arrived, Gaurav was already ahead. As a <strong className="text-white">Certified Agentic AI
              Product Manager</strong> and active member of AAAI, ACM, and IEEE, he built and led a
              cross-functional AI pod inside a regulated financial organisation — evaluating,
              governing, and deploying AI tools across CFO, CISO, CLO, and IT. Not theoretical
              strategy. Working systems that moved the needle.
            </p>
            <p>
              He has delivered programmes across the <strong className="text-white">United States, Japan, Philippines,
              Malaysia, and India</strong> — in industries including gaming, digital assets, media,
              enterprise software, and FinTech. He has managed <strong className="text-white">$12M+ technology portfolios</strong>,
              consistently delivered <strong className="text-white">40–45% cost reductions</strong>, and rebuilt Finance
              organisations from the ground up to support IPO-level scrutiny.
            </p>
            <p>
              Gaurav founded <strong className="text-white">CoreNeurons.ai</strong> to bring this rare combination of hands-on
              technical depth, strategic clarity, and real-world operator experience to
              forward-thinking companies that are serious about AI — and serious about results.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY ACHIEVEMENTS ─────────────────────────────── */}
      <section className="py-24 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Track Record</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              What Gaurav <span className="gradient-text">Has Actually Done</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Not what he advises — what he has personally designed, built, led, and delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((a) => (
              <div
                key={a.label}
                className={`card-hover p-7 rounded-2xl border ${a.border} bg-[#0d1526]`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center text-xl flex-shrink-0`}>
                    {a.icon}
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${a.accent}`}>{a.metric}</div>
                    <div className="text-white font-semibold text-sm">{a.label}</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Credentials & Memberships</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-8">
                Certified. Peer-Recognised. <span className="gradient-text">Battle-Tested.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-[#0d1526]"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-300">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Platforms */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Platforms & Systems</span>
                <p className="text-slate-400 text-sm mt-1 mb-4">
                  Hands-on, production-scale experience — not just paper certifications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/8 text-cyan-300 text-xs font-medium"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Industries</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {industries.map((i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/8 text-purple-300 text-xs font-medium"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH ─────────────────────────────────── */}
      <section className="py-20 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">Global Delivery</span>
            <h2 className="text-3xl font-bold text-white mt-3">
              Delivered Programmes Across <span className="gradient-text">5 Countries</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((c) => (
              <div
                key={c.name}
                className="card-hover flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/8 bg-[#0d1526]"
              >
                <span className="text-3xl">{c.flag}</span>
                <span className="text-white font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative rounded-3xl border border-white/8 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-emerald-500/10 p-12 text-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                GV
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to work with Gaurav?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
                Whether you need a trusted advisor on ERP transformation, IPO readiness,
                or AI adoption — let&apos;s start with a conversation.
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 rounded-xl text-base font-semibold text-white btn-primary"
              >
                Book a Discovery Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
