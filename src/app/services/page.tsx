import type { Metadata } from "next";
import Link from "next/link";
import ExpertiseAccordion from "@/components/ExpertiseAccordion";

export const metadata: Metadata = {
  title: "Services — CoreNeurons.ai",
  description: "End-to-end AI consulting and engineering services from strategy to production.",
};

const services = [
  {
    icon: "🧭",
    title: "AI Strategy & Roadmap",
    description:
      "We work with your executives to assess your AI readiness, identify high-value opportunities, and design a phased roadmap that delivers quick wins while building towards long-term transformation.",
    highlights: ["AI readiness assessment", "Use-case prioritisation", "Build vs. buy analysis", "ROI modelling"],
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
  },
  {
    icon: "🤖",
    title: "Machine Learning Development",
    description:
      "From supervised learning and deep neural networks to reinforcement learning and generative AI — we design, train, and ship production-grade models that perform reliably at scale.",
    highlights: ["Predictive analytics", "Generative AI & LLMs", "Computer vision", "Anomaly detection"],
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
  },
  {
    icon: "🗣️",
    title: "Natural Language Processing",
    description:
      "Unlock the value trapped in unstructured text. We build NLP solutions for document intelligence, conversational AI, sentiment analysis, information extraction, and multilingual processing.",
    highlights: ["Document intelligence", "Chatbots & virtual agents", "Semantic search", "Text classification"],
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
  },
  {
    icon: "🏗️",
    title: "Data Engineering & MLOps",
    description:
      "Great AI requires great data infrastructure. We build robust data pipelines, feature stores, and MLOps platforms that ensure your models are always trained on fresh, high-quality data.",
    highlights: ["Data pipeline architecture", "Feature stores", "Model monitoring", "CI/CD for ML"],
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
  },
  {
    icon: "🔌",
    title: "AI Integration & APIs",
    description:
      "We seamlessly integrate AI capabilities — whether custom-built or third-party — into your existing products, CRMs, ERPs, and workflows via clean, well-documented APIs.",
    highlights: ["REST & GraphQL APIs", "ERP/CRM integration", "Real-time inference", "Edge deployment"],
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
  },
  {
    icon: "🛡️",
    title: "Responsible AI & Governance",
    description:
      "We help you build AI that your customers, regulators, and stakeholders can trust — with explainability frameworks, bias audits, privacy-preserving techniques, and governance policies.",
    highlights: ["Bias & fairness audits", "Model explainability", "Privacy-preserving ML", "AI policy design"],
    color: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/20",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We learn your business deeply — goals, constraints, data assets, and existing systems." },
  { step: "02", title: "Design", description: "We design a tailored solution architecture and present a clear scope, timeline, and success metrics." },
  { step: "03", title: "Build", description: "Our engineers iterate in tight sprints, keeping you informed with live demos and weekly syncs." },
  { step: "04", title: "Deploy", description: "We ship to production with rigorous testing, monitoring, and a smooth handover to your team." },
  { step: "05", title: "Optimise", description: "We continuously monitor model performance and refine as your data and requirements evolve." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-glow grid-bg overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-8">
            Our Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            End-to-End AI Services<br />
            <span className="gradient-text">From Strategy to Scale</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            Whether you&apos;re just starting your AI journey or scaling an existing capability,
            we have the expertise to take you further.
          </p>
        </div>
      </section>

      {/* Core KPI Expertise — Accordion */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-5">
              Core Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5 Areas Where We Drive <span className="gradient-text">Real Results</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Click any area to see full detail — capabilities, platforms, track record, and what
              sets our approach apart.
            </p>
          </div>
          <ExpertiseAccordion />
        </div>
      </section>

      {/* Additional Services grid */}
      <section className="py-24 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional <span className="gradient-text">Service Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Complementary technical services that power our core engagements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card-hover p-7 rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} bg-[#0d1526]`}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A proven process that minimises risk and maximises the chance of real-world impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p) => (
              <div key={p.step} className="card-hover p-6 rounded-2xl border border-white/8 bg-[#0d1526] text-center">
                <div className="text-2xl font-bold gradient-text mb-3">{p.step}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Financial Services", "Healthcare", "Legal & Compliance",
              "Retail & E-commerce", "Supply Chain & Logistics",
              "Manufacturing", "Media & Entertainment", "Insurance",
              "Telecommunications", "Energy & Utilities", "Government", "Education",
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm hover:border-blue-500/40 hover:text-white transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-slate-400 mb-8">
            Book a free 30-minute discovery call. No commitment — just an honest conversation about
            what AI can do for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white btn-primary"
          >
            Book a Free Call →
          </Link>
        </div>
      </section>
    </>
  );
}
