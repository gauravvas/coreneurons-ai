import Link from "next/link";

const kpiCards = [
  {
    icon: "🏛️",
    num: "01",
    title: "ERP Implementation, Migration & Integrations",
    stat: "40–45% cost reduction",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: "📈",
    num: "02",
    title: "IPO Readiness for FinTech & High-Growth Companies",
    stat: "SOX · ITGC · SoD · SEC",
    accent: "text-purple-400",
    border: "border-purple-500/20",
  },
  {
    icon: "🤖",
    num: "03",
    title: "AI Adoption Strategy — From 0 to 1",
    stat: "Certified Agentic AI PM",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: "🔧",
    num: "04",
    title: "Deep System Knowledge Across the Modern Finance Stack",
    stat: "$12M+ tech portfolios",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    icon: "📊",
    num: "05",
    title: "Finance Transformation & Scaling Finance Organizations",
    stat: "40% cost reduction delivered",
    accent: "text-orange-400",
    border: "border-orange-500/20",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "AI Experts" },
  { value: "12+", label: "Industries Served" },
];

const services = [
  {
    icon: "🧠",
    title: "AI Strategy & Roadmap",
    description:
      "We partner with your leadership to design a clear, actionable AI strategy aligned with your business goals.",
  },
  {
    icon: "⚙️",
    title: "Custom ML Development",
    description:
      "From predictive models to generative AI, we build production-grade machine learning solutions tailored to your data.",
  },
  {
    icon: "🔗",
    title: "Seamless AI Integration",
    description:
      "We integrate AI capabilities into your existing workflows, products, and infrastructure without disruption.",
  },
];

const testimonials = [
  {
    quote:
      "neuro-core.ai transformed our supply chain with a predictive analytics system that cut costs by 23%. Their team is world-class.",
    name: "Sarah Chen",
    role: "CTO, LogiTech Supply",
  },
  {
    quote:
      "From day one, they understood our domain deeply. The NLP pipeline they built processes 10M documents a day flawlessly.",
    name: "Marcus Webb",
    role: "VP Engineering, LegalBase",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 hero-glow grid-bg overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI Consulting & Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Transforming Business<br />
            <span className="gradient-text">with Intelligent AI</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            neuro-core.ai helps forward-thinking companies design, build, and deploy AI solutions
            that drive measurable business outcomes — from strategy to production.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl text-base font-semibold text-white btn-primary"
            >
              Start Your AI Journey →
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-xl text-base font-semibold text-slate-300 border border-white/10 hover:bg-white/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise KPIs */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-5">
              Core Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5 Ways We Drive <span className="gradient-text">Measurable Impact</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Battle-tested expertise spanning ERP transformation, IPO readiness, AI adoption, and
              finance operations — built on decades of hands-on practitioner experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kpiCards.map((k) => (
              <div
                key={k.num}
                className={`card-hover group p-6 rounded-2xl border ${k.border} bg-[#0d1526] flex flex-col gap-3`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{k.icon}</span>
                  <span className={`text-xs font-bold font-mono ${k.accent} opacity-60`}>{k.num}</span>
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug">{k.title}</h3>
                <div className={`mt-auto pt-3 border-t border-white/5 text-xs font-medium ${k.accent}`}>
                  {k.stat}
                </div>
              </div>
            ))}
            {/* CTA card */}
            <div className="card-hover p-6 rounded-2xl border border-white/8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex flex-col items-start justify-between gap-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                See full capability detail, platforms, and client outcomes for each area.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-primary"
              >
                Explore All Expertise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              End-to-end AI services that take you from idea to impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-hover p-7 rounded-2xl border border-white/8 bg-[#0d1526]"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-[#050914]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why <span className="gradient-text">neuro-core.ai</span>?
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We bridge the gap between AI research and real-world business value. Our team of
                ML engineers, data scientists, and AI strategists work as an extension of your
                team — moving fast without cutting corners.
              </p>
              <ul className="space-y-4">
                {[
                  "Domain experts across finance, healthcare, legal, and logistics",
                  "Transparent, milestone-based engagements",
                  "Production-ready code, not just proof-of-concepts",
                  "Ongoing support and model monitoring post-deployment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-primary"
              >
                About Us →
              </Link>
            </div>

            {/* Visual decoration */}
            <div className="relative flex items-center justify-center">
              <div className="animate-float w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center">
                  <span className="text-5xl">🧠</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-blue-500/5 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover p-8 rounded-2xl border border-white/8 bg-[#0d1526]"
              >
                <p className="text-slate-300 text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-[#050914]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build your AI advantage?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Schedule a free discovery call with our team and let&apos;s explore what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl text-base font-semibold text-white btn-primary"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
