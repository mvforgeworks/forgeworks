    tsx
    'use client';
    import React, { useState } from 'react';
    
    export default function MVForgeHome() {
      const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' });
      const [submitted, setSubmitted] = useState(false);
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('[lead]', formData);
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', business: '', message: '' }); }, 2000);
      };
    
      const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    
      return (
        <div className="min-h-screen bg-[#F8F5F0] text-[#2C3E50]">
          <div className="bg-[#0A2540] text-white py-2 text-center text-sm font-medium tracking-[1.5px]">
            OHIO-BUILT • VETERAN-OWNED • NO HYPE — JUST RESULTS
          </div>
    
          <nav className="border-b border-[#E5E0D8] bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#0A2540] flex items-center justify-center rounded"><span className="text-white font-bold text-xl tracking-[-1px]">MV</span></div>
                <div><div className="font-semibold text-2xl tracking-[-1.5px] text-[#0A2540]">MVFORGE</div><div className="text-[10px] text-[#4A5568] -mt-1">SECURE • SELF-OWNED • MASTERED</div></div>
              </div>
              <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                <button onClick={() => scrollTo('products')} className="hover:text-[#0A2540]">PRODUCTS</button>
                <a href="https://forgeworks.mvforge.io" className="hover:text-[#0A2540]">FORGEWORKS</a>
                <a href="https://audit.mvforge.io" className="hover:text-[#0A2540]">AUDITFORGE</a>
                <a href="https://domainforge.mvforge.io" className="hover:text-[#0A2540]">DOMAINFORGE</a>
              </div>
              <button onClick={() => scrollTo('contact')} className="bg-[#0A2540] hover:bg-[#132f52] text-white px-6 py-2.5 rounded-full text-sm font-medium">GET STARTED</button>
            </div>
          </nav>
    
          <section className="max-w-5xl mx-auto px-8 pt-20 pb-16 text-center">
            <div className="inline-block px-4 py-1.5 bg-[#0A2540] text-white text-xs tracking-[2px] mb-6 rounded">LOGAN COUNTY, OHIO • SERVING THE HEARTLAND</div>
            <h1 className="text-6xl md:text-7xl leading-[1.05] tracking-[-2.8px] font-semibold text-[#0A2540] max-w-5xl mx-auto mb-6">
              You’re not just building a website.<br />
              You’re building a <span className="text-[#2E7D32]">Revenue Machine</span>.
            </h1>
            <p className="text-2xl tracking-tight text-[#2C3E50] max-w-3xl mx-auto mb-10">
              Professional websites, cybersecurity, and domain ownership for Ohio small businesses.<br />
              <span className="font-semibold">Landlords &amp; property managers</span> are our top vertical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollTo('contact')} className="bg-[#0A2540] hover:bg-[#132f52] text-white px-10 py-4 rounded-full text-lg font-medium">GET YOUR FREE REVENUE MACHINE ASSESSMENT</button>
              <button onClick={() => scrollTo('products')} className="border border-[#0A2540] hover:bg-[#0A2540] hover:text-white px-10 py-4 rounded-full text-lg font-medium">SEE THE THREE FORGES</button>
            </div>
          </section>
    
          <div className="border-y border-[#E5E0D8] py-6 bg-white">
            <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-[#4A5568] font-medium tracking-wide">
              <div>100-MILE RADIUS • LOGAN • AUGLAIZE • HARDIN • SHELBY</div>
              <div>LANDLORDS • TREE SERVICE • JUNK REMOVAL • TOWING • LANDSCAPING</div>
              <div>VETERAN-OWNED • 30 YEARS IT EXPERIENCE</div>
            </div>
          </div>
    
          <section id="products" className="max-w-7xl mx-auto px-8 pt-20 pb-16">
            <div className="text-center mb-14">
              <div className="text-xs tracking-[3px] text-[#4A5568] mb-2">THREE TOOLS. ONE SHIELD.</div>
              <h2 className="text-5xl tracking-[-2px] font-semibold text-[#0A2540]">The Forge Family</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="uppercase tracking-[2px] text-xs text-[#8B3A3A] mb-4 font-medium">FORGEWORKS</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-4 text-[#0A2540]">High-Converting Websites</h3>
                <p className="text-[#4A5568] mb-8">Professional websites that generate leads for local service businesses and landlords.</p>
                <div className="pt-4 border-t text-xs text-[#4A5568]">Starting at $799 one-time + $49/mo</div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="uppercase tracking-[2px] text-xs text-[#8B3A3A] mb-4 font-medium">AUDITFORGE</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-4 text-[#0A2540]">Cybersecurity Audits</h3>
                <p className="text-[#4A5568] mb-8">Practical cybersecurity audits to protect your business and tenant data.</p>
                <div className="pt-4 border-t text-xs text-[#4A5568]">One-time audit from $1,200</div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="uppercase tracking-[2px] text-xs text-[#8B3A3A] mb-4 font-medium">DOMAINFORGE</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-4 text-[#0A2540]">Domain Strategy &amp; Ownership</h3>
                <p className="text-[#4A5568] mb-8">Secure domain acquisition and full ownership for your brand.</p>
                <div className="pt-4 border-t text-xs text-[#4A5568]">Project-based pricing</div>
              </div>
            </div>
          </section>
    
          <section className="bg-white py-20 border-y border-[#E5E0D8]">
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2E7D32]/10 text-[#2E7D32] text-xs tracking-[2px] rounded-full mb-4">⭐ OHIO VETERAN-OWNED • 30 YEARS IT EXPERIENCE</div>
                <h2 className="text-5xl tracking-[-2px] font-semibold text-[#0A2540]">Real Results from Real Ohio Businesses</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { quote: "MVForge turned our junk removal site into a lead machine. We went from 2-3 calls a week to 15+.", name: "Mike R., Junk Removal, Bellefontaine" },
                  { quote: "The cybersecurity audit gave us peace of mind. Professional, no-nonsense, exactly what a small business needs.", name: "Sarah T., Property Management, Lima" },
                  { quote: "Finally own my domain and website outright. Worth every penny.", name: "Tom K., Tree Service, Wapakoneta" }
                ].map((t, i) => (
                  <div key={i} className="bg-[#F8F5F0] p-8 rounded-2xl border border-[#E5E0D8] hover:shadow-lg transition-all">
                    <p className="text-[#2C3E50] mb-6">"{t.quote}"</p>
                    <div className="font-semibold text-[#0A2540]">— {t.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          <section id="contact" className="max-w-2xl mx-auto px-8 py-20">
            <div className="text-center mb-10">
              <h2 className="text-5xl tracking-[-2px] font-semibold text-[#0A2540] mb-4">Ready to build your Revenue Machine?</h2>
              <p className="text-xl text-[#4A5568]">Get your free assessment. No pressure. Just clarity.</p>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-[#E5E0D8] space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="border border-[#E5E0D8] px-5 py-3.5 rounded-xl" />
                  <input type="email" placeholder="Business Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="border border-[#E5E0D8] px-5 py-3.5 rounded-xl" />
                </div>
                <input type="text" placeholder="Business Type (Landlord, Tree Service, etc.)" required value={formData.business} onChange={e => setFormData({...formData, business: e.target.value})} className="w-full border border-[#E5E0D8] px-5 py-3.5 rounded-xl" />
                <textarea placeholder="Tell us about your current setup" rows={4} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full border border-[#E5E0D8] px-5 py-3.5 rounded-xl" />
                <button type="submit" className="w-full bg-[#0A2540] hover:bg-[#132f52] text-white py-4 rounded-full text-lg font-medium">REQUEST MY FREE ASSESSMENT</button>
              </form>
            ) : (
              <div className="bg-[#2E7D32] text-white p-10 rounded-2xl text-center">
                <div className="text-2xl font-semibold mb-2">Thank you. We’ll be in touch shortly.</div>
              </div>
            )}
          </section>
    
          <footer className="border-t border-[#E5E0D8] py-8 bg-white text-center text-sm text-[#4A5568]">
            © {new Date().getFullYear()} MVForge • Logan County, Ohio
          </footer>
        </div>
      );
    }

