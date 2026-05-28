"use client";

import { useState } from "react";

const kpis = [
  {
    icon: "🏛️",
    number: "01",
    title: "ERP Implementation, Migration & Integrations",
    tagline: "20+ years designing and delivering ERP transformations at scale",
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "40–45%", label: "Cost Reduction" },
      { value: "15+", label: "Platforms" },
      { value: "5", label: "Countries" },
    ],
    summary:
      "End-to-end ERP transformations across Oracle EBS, Oracle Cloud, NetSuite, Workday, and 15+ adjacent platforms — for companies ranging from global enterprises to high-growth tech.",
    detail: `Specializes in end-to-end implementations, legacy-to-cloud migrations, and building integration architecture that connects finance, legal, HR, and operational systems into a single source of truth.

Proven track record of reducing costs by 40–45% while improving system reliability, automation, and 24/7 support capability. Has led these programs across the U.S., Japan, Philippines, Malaysia, and India — across industries including gaming, digital assets, media, and enterprise software.`,
    highlights: [
      "Oracle EBS, Oracle Cloud, NetSuite, Workday & 15+ adjacent platforms",
      "Legacy-to-cloud migrations and full lifecycle implementations",
      "Integration architecture connecting Finance, Legal, HR, and Operations",
      "Global delivery across U.S., Japan, Philippines, Malaysia, and India",
      "Industries: gaming, digital assets, media, enterprise software",
    ],
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/25",
    accent: "text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: "📈",
    number: "02",
    title: "IPO Readiness for FinTech & High-Growth Companies",
    tagline: "Rare dual perspective — inside the machine on both sides of IPO",
    stats: [
      { value: "SOX", label: "ITGC Frameworks" },
      { value: "SoD", label: "Enforcement" },
      { value: "RBAC", label: "Access Governance" },
      { value: "SEC", label: "Compliance" },
    ],
    summary:
      "Hands-on IPO readiness experience spanning both public and private high-growth companies — covering financial controls, audit frameworks, and institutional-grade finance infrastructure.",
    detail: `Has operated inside the machine on both sides: building the controls, systems, and audit frameworks that private companies need to get IPO-ready, and maintaining the compliance rigor and reporting standards that public companies must sustain post-listing.

Covers financial controls maturation, SOX/ITGC framework design, Segregation of Duties enforcement, RBAC access governance, and monthly close optimization. Bridges the gap between what finance systems look like at Series C and what auditors, the SEC, and institutional investors demand at IPO.`,
    highlights: [
      "Financial controls maturation from Series C to IPO-ready",
      "SOX/ITGC framework design and implementation",
      "Segregation of Duties (SoD) enforcement and RBAC access governance",
      "Monthly close optimization and audit trail architecture",
      "Stakeholder fluency: CFO, audit committee, external auditors, SEC",
    ],
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/25",
    accent: "text-purple-400",
    glow: "group-hover:shadow-purple-500/10",
  },
  {
    icon: "🤖",
    number: "03",
    title: "AI Adoption Strategy — From 0 to 1",
    tagline: "Certified Agentic AI PM · AAAI · ACM · IEEE member",
    stats: [
      { value: "0→1", label: "AI Deployment" },
      { value: "4+", label: "C-Suite Orgs" },
      { value: "Certified", label: "Agentic AI PM" },
      { value: "Live", label: "AI Governance" },
    ],
    summary:
      "Direct experience leading enterprise AI adoption inside a regulated financial organization — building AI governance frameworks and deploying working systems that reduce headcount dependency.",
    detail: `Built and led a cross-functional AI pod — evaluating, approving, and deploying AI tools across CFO, CISO, CLO, and IT organizations. Helps leadership teams cut through vendor noise, build an AI governance framework, identify the highest-ROI use cases, and move from pilot to production without compliance or security exposure.

Specializes in finance and operations AI — not theoretical AI strategy, but working systems that reduce headcount dependency and accelerate close cycles.`,
    highlights: [
      "Certified Agentic AI Product Manager (Maven) — AAAI, ACM, IEEE member",
      "Built and led cross-functional AI pod across CFO, CISO, CLO, and IT orgs",
      "AI governance framework design for regulated financial organizations",
      "Highest-ROI use-case identification and pilot-to-production roadmaps",
      "Finance & ops AI: close cycle acceleration, headcount dependency reduction",
    ],
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/25",
    accent: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: "🔧",
    number: "04",
    title: "Deep System Knowledge Across the Modern Finance Stack",
    tagline: "$12M+ technology portfolios · Full stack, not just evaluated on paper",
    stats: [
      { value: "$12M+", label: "Tech Portfolios" },
      { value: "15+", label: "Finance Systems" },
      { value: "Full", label: "Stack Coverage" },
      { value: "Real", label: "Operator Experience" },
    ],
    summary:
      "Rare hands-on expertise across the complete enterprise finance technology landscape — knowing not just how each system works, but how they connect and where the hidden costs live.",
    detail: `Understands not just how each system works in isolation, but how they connect — and where the gaps, redundancies, and hidden costs live.

Has managed $12M+ technology portfolios and advised on vendor selection, contract negotiation, implementation sequencing, and build vs. buy decisions — from a position of having actually used and operated these systems at scale, not just evaluated them on paper.`,
    highlights: [
      "Oracle EBS · Oracle Cloud · NetSuite · Workday · BlackLine · Kyriba",
      "Brex · Agiloft · SimpleLegal · ADP · ZIP and more",
      "Cross-system integration architecture and gap analysis",
      "$12M+ technology portfolio management",
      "Vendor selection, contract negotiation, and build vs. buy advisory",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/25",
    accent: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    icon: "📊",
    number: "05",
    title: "Finance Transformation & Scaling Finance Organizations",
    tagline: "From startup chaos to institutional-grade operations",
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "Lean", label: "Global Teams" },
      { value: "IPO", label: "Grade Readiness" },
      { value: "Zero", label: "Over-Engineering" },
    ],
    summary:
      "Helps Finance organizations scale from startup chaos to institutional-grade operations — covering org design, process standardization, automation strategy, and systems architecture.",
    detail: `Has built lean, globally distributed finance and enterprise systems teams that punch above their weight. Delivered 40% cost reduction while expanding capability across a major enterprise systems function. Rebuilt Finance systems foundations to support IPO-level scrutiny at a high-growth digital asset company.

Brings both the strategic lens — what Finance should look like at the next stage — and the execution depth to get there without over-hiring or over-engineering.`,
    highlights: [
      "Org design and process standardization for high-growth Finance teams",
      "Automation strategy and systems architecture at each growth stage",
      "40% cost reduction while expanding global capability",
      "IPO-level Finance systems rebuild at a high-growth digital asset company",
      "Lean globally-distributed teams that punch above their weight",
    ],
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/25",
    accent: "text-orange-400",
    glow: "group-hover:shadow-orange-500/10",
  },
];

export default function ExpertiseAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {kpis.map((kpi, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={kpi.number}
            className={`group rounded-2xl border bg-[#0d1526] transition-all duration-300 ${kpi.border} ${
              isOpen ? "shadow-xl " + kpi.glow : "hover:border-opacity-60"
            }`}
          >
            {/* Header — always visible */}
            <button
              className="w-full text-left px-6 py-5 flex items-start gap-4"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="text-2xl mt-0.5 flex-shrink-0">{kpi.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold ${kpi.accent} font-mono`}>{kpi.number}</span>
                  <span className={`text-xs ${kpi.accent} opacity-60`}>—</span>
                  <span className="text-xs text-slate-500 truncate">{kpi.tagline}</span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">{kpi.title}</h3>
                {!isOpen && (
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed line-clamp-2">
                    {kpi.summary}
                  </p>
                )}
              </div>

              {/* Stats pills — compact */}
              <div className="hidden lg:flex items-center gap-2 flex-shrink-0 mr-4">
                {kpi.stats.slice(0, 2).map((s) => (
                  <div
                    key={s.label}
                    className={`px-3 py-1.5 rounded-lg bg-gradient-to-br ${kpi.color} border ${kpi.border} text-center min-w-[64px]`}
                  >
                    <div className={`text-sm font-bold ${kpi.accent}`}>{s.value}</div>
                    <div className="text-[10px] text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border ${kpi.border} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <svg className={`w-3.5 h-3.5 ${kpi.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Expanded content */}
            {isOpen && (
              <div className="px-6 pb-6">
                <div className="border-t border-white/5 pt-5">
                  {/* All 4 stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {kpi.stats.map((s) => (
                      <div
                        key={s.label}
                        className={`p-3 rounded-xl bg-gradient-to-br ${kpi.color} border ${kpi.border} text-center`}
                      >
                        <div className={`text-lg font-bold ${kpi.accent}`}>{s.value}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                        {kpi.detail}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {kpi.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full ${kpi.accent.replace("text-", "bg-")} flex-shrink-0`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
