export default function ForgeWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-[#e2d9c9]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1a365d] rounded flex items-center justify-center">
              <span className="text-white font-semibold text-lg">F</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">ForgeWorks</span>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-[#2d5a27] transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-[#2d5a27] transition-colors">Pricing</a>
            <a href="mailto:forge@mvforge.io" className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium">Get started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-serif text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            Professional websites<br />for serious landlords.
          </h1>
          <p className="text-xl text-[#4a5568] mb-10 max-w-2xl mx-auto">
            Clean, trustworthy rental property sites that attract qualified tenants and make your business look professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:forge@mvforge.io?subject=ForgeWorks%20Inquiry" className="btn-primary px-8 py-4 rounded-full text-base font-medium">
              Request a site
            </a>
            <a href="#how" className="btn-secondary px-8 py-4 rounded-full text-base font-medium">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-[#e2d9c9] bg-[#f5f1e9]">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-[#4a5568]">
          Built for landlords who want better tenants and a professional online presence
        </div>
      </div>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="heading-serif text-4xl font-semibold tracking-tight mb-3">Simple process. Professional results.</h2>
          <p className="text-[#4a5568]">From inquiry to live site in under two weeks.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Tell us about your portfolio", desc: "Share your properties, branding, and what makes you different." },
            { step: "02", title: "We design your site", desc: "Clean, trustworthy design that reflects your business values." },
            { step: "03", title: "Launch & attract better tenants", desc: "Go live with lead forms, property pages, and professional credibility." },
          ].map((item) => (
            <div key={item.step} className="card p-8 rounded-2xl">
              <div className="text-[#2d5a27] font-mono text-sm tracking-[3px] mb-4">{item.step}</div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-[#4a5568] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#f5f1e9] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="heading-serif text-4xl font-semibold tracking-tight mb-3">Everything you need. Nothing you don&apos;t.</h2>
            <p className="text-lg text-[#4a5568]">Focused on the features that matter most for rental property owners.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 text-lg">
            {[
              "Property showcase pages",
              "Tenant application forms",
              "Professional contact system",
              "Mobile-optimized design",
              "Fast load times",
              "SEO foundation",
              "Easy content updates",
              "Email & phone lead capture",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="text-[#2d5a27] mt-1">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tease */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="heading-serif text-4xl font-semibold tracking-tight mb-4">Transparent pricing.</h2>
          <p className="text-xl text-[#4a5568] mb-10">Custom sites built for your portfolio. No templates, no surprises.</p>
          <a href="mailto:forge@mvforge.io?subject=ForgeWorks%20Pricing" className="inline-block btn-primary px-10 py-4 rounded-full text-lg font-medium">
            Get a custom quote
          </a>
          <p className="mt-4 text-sm text-[#4a5568]">Usually $2,400 – $4,800 per site depending on scope.</p>
        </div>
      </section>

      {/* Contact */}
      <footer className="border-t border-[#e2d9c9] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#1a365d] rounded flex items-center justify-center">
                <span className="text-white font-semibold text-lg">F</span>
              </div>
              <span className="font-semibold text-2xl tracking-tight">ForgeWorks</span>
            </div>
            <p className="text-[#4a5568]">A division of MVForge</p>
          </div>
          <a href="mailto:forge@mvforge.io" className="text-[#2d5a27] hover:underline text-lg">forge@mvforge.io</a>
          <div className="mt-8 text-sm text-[#4a5568]">© {new Date().getFullYear()} ForgeWorks. Built with care in the Midwest.</div>
        </div>
      </footer>
    </div>
  );
}
