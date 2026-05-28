"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#0d1526] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-glow grid-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8">
            Let&apos;s Talk
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Start Your<br />
            <span className="gradient-text">AI Journey Today</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-slate-400 leading-relaxed">
            Tell us about your challenge. Our team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Why talk to us?</h2>
                <ul className="space-y-3">
                  {[
                    "Free 30-minute discovery call",
                    "No pushy sales pitch — honest advice",
                    "Response within 1 business day",
                    "Speak directly with an AI expert",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-white/8 bg-[#0d1526]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white text-sm">hello@coreneurons.ai</p>
                </div>
                <div className="p-5 rounded-2xl border border-white/8 bg-[#0d1526]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Headquarters</p>
                  <p className="text-white text-sm">London, UK</p>
                  <p className="text-slate-400 text-xs mt-0.5">Offices in Singapore & New York</p>
                </div>
                <div className="p-5 rounded-2xl border border-white/8 bg-[#0d1526]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Office Hours</p>
                  <p className="text-white text-sm">Mon – Fri, 9am – 6pm (GMT)</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl mb-6">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Message Received!</h3>
                  <p className="text-slate-400 max-w-xs">
                    Thanks for reaching out. A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Work Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" className="bg-[#0d1526]">Select a service…</option>
                        <option value="strategy" className="bg-[#0d1526]">AI Strategy & Roadmap</option>
                        <option value="ml" className="bg-[#0d1526]">Machine Learning Development</option>
                        <option value="nlp" className="bg-[#0d1526]">Natural Language Processing</option>
                        <option value="data" className="bg-[#0d1526]">Data Engineering & MLOps</option>
                        <option value="integration" className="bg-[#0d1526]">AI Integration & APIs</option>
                        <option value="responsible" className="bg-[#0d1526]">Responsible AI & Governance</option>
                        <option value="other" className="bg-[#0d1526]">Other / Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Tell us about your challenge <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, goal, or the problem you're trying to solve…"
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-base font-semibold text-white btn-primary"
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
