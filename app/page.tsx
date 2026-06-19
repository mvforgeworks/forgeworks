export default function ForgeWorks() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#1f2024]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#7c3aed] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-semibold text-2xl tracking-[-1px]">ForgeWorks</span>
          </div>
          <div className="flex items-center gap-9 text-sm font-medium">
            <a href="#model" className="hover:text-[#d4af37] transition-colors">How it works</a>
            <a href="#tiers" className="hover:text-[#d4af37] transition-colors">Tiers</a>
            <a href="#seo" className="hover:text-[#d4af37] transition-colors">Local SEO</a>
            <a href="mailto:forge@mvforge.io" className="btn-primary px-6 py-2.5 rounded-full text-sm">Get started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-[#111113] border border-[#1f2024] text-sm mb-6">
          Your Digital Revenue Engine
        </div>
        <h1 className="heading-serif text-7xl font-semibold tracking-[-2.5px] leading-none mb-8">
          Forge Leads.<br />Forge Jobs.<br />Forge Growth.
        </h1>
        <p className="max-w-2xl mx-auto text-2xl text-[#a1a1a8] mb-10 tracking-tight">
          We build high-converting niche service websites that deliver exclusive leads and jobs — one client per niche.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:forge@mvforge.io" className="btn-primary px-10 py-4 rounded-full text-lg">Start building revenue</a>
          <a href="#model" className="border border-[#1f2024] hover:bg-[#111113] px-10 py-4 rounded-full text-lg">See the model</a>
        </div>
      </section>

      {/* Model */}
      <section id="model" className="border-y border-[#1f2024] bg-[#111113]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <div className="text-[#d4af37] text-sm tracking-[3px] font-medium">THE FORGEWORKS MODEL</div>
            <h2 className="heading-serif text-5xl font-semibold tracking-tight mt-3">One client. One niche. All the leads.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "We own the niche", desc: "Targeted websites for profitable service industries: Tree Services, Junk Removal, Landscaping, HVAC, and more." },
              { title: "You own the leads", desc: "Exclusive access — no one else in your niche gets the leads or jobs from your site." },
              { title: "We rank locally", desc: "Local SEO, Google Business Profile optimization, citations, and content that wins the map pack." },
            ].map((item, i) => (
              <div key={i} className="card p-8 rounded-2xl">
                <h3 className="font-semibold text-2xl mb-4 tracking-tight">{item.title}</h3>
                <p className="leading-relaxed text-[#a1a1a8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-[#d4af37] text-sm tracking-[3px] font-medium">PRICING</div>
          <h2 className="heading-serif text-5xl font-semibold tracking-tight mt-3 mb-3">Choose your edge.</h2>
          <p className="text-xl text-[#a1a1a8]">All tiers include a high-performing website built for your niche.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Basic", price: "800", features: ["Professionally designed site", "Lead capture forms", "Mobile responsive", "Basic SEO setup", "1 revision round"], popular: false },
            { name: "Intermediate", price: "1,600", features: ["Everything in Basic", "Full Local SEO foundation", "Google Business Profile setup", "Citation building", "Monthly performance report", "Ongoing content updates"], popular: true },
            { name: "Premium", price: "2,800", features: ["Everything in Intermediate", "Advanced Local SEO execution", "Rank tracking & audits", "Premium design customizations", "Priority support", "Monthly strategy calls"], popular: false },
          ].map((tier, index) => (
            <div key={index} className={`tier-card card p-8 rounded-3xl flex flex-col ${tier.popular ? 'popular' : ''}`}>
              <div>
                <div className="font-semibold text-3xl">{tier.name}</div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-6xl font-semibold tabular-nums">${tier.price}</span>
                  <span className="text-[#a1a1a8]">one-time</span>
                </div>
              </div>
              <ul className="mt-9 mb-auto space-y-3 text-[#a1a1a8]">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex gap-3">
                    <span className="text-[#d4af37] mt-1">→</span> {f}
                  </li>
                ))}
              </ul>
              <a href="mailto:forge@mvforge.io?subject=ForgeWorks%20-%20{tier.name}%20Tier" className={`mt-8 block text-center py-4 rounded-2xl text-lg ${tier.popular ? 'btn-gold' : 'border border-[#1f2024] hover:bg-[#111113]'}`}>
                Get started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Local SEO Services */}
      <section id="seo" className="bg-[#111113] border-y border-[#1f2024]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-[#d4af37] text-sm tracking-[3px] font-medium mb-3">LOCAL SEO ENGINE</div>
              <h3 className="heading-serif text-5xl font-semibold tracking-tight leading-none">Rank where it matters most.</h3>
            </div>
            <div className="pt-3 text-xl text-[#a1a1a8] space-y-6">
              <p>Strong websites are only half the battle. We pair every ForgeWorks site with proven local SEO services that drive real results.</p>
              <div className="pt-4 space-y-3 text-lg text-white">
                {["Google Business Profile optimization", "Local citation building", "Targeted location pages", "Map pack ranking audits", "Monthly visibility reports"].map((s, i) => (
                  <div key={i}>• {s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DomainForge integration */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-[#1f2024]">
        <div className="flex flex-col md:flex-row md:items-center gap-y-8 md:justify-between">
          <div>
            <div className="text-[#d4af37] text-sm tracking-[3px] font-medium">POWERED BY DOMAINFORGE</div>
            <div className="heading-serif text-4xl font-semibold tracking-tight mt-2">Smarter domains. Better results.</div>
          </div>
          <a href="https://domainforge.mvforge.io" target="_blank" className="btn-primary px-8 py-4 rounded-full inline-block">Explore DomainForge</a>
        </div>
        <p className="mt-6 text-[#a1a1a8]">Internal access to domain auctions, valuation tools, and premium niche name acquisition.</p>
      </section>

      {/* CTA Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="heading-serif text-6xl tracking-tight font-semibold">Ready to own your niche?</h2>
        <p className="mt-6 text-2xl text-[#a1a1a8]">Let’s build your revenue engine.</p>
        <a href="mailto:forge@mvforge.io" className="btn-gold mt-10 inline-block px-12 py-4 rounded-full text-xl">Contact ForgeWorks</a>
        <div className="mt-20 text-sm text-[#666]">ForgeWorks — A division of MVForge • forge@mvforge.io</div>
      </footer>
    </div>
  );
}
