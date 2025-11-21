export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-black to-[#060E0A] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Simple, scalable pricing</h2>
          <p className="mt-4 text-white/70">Start free, upgrade when you need more power. No setup fees.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-2 text-white/70">For personal projects and exploration.</p>
            <div className="mt-6 text-4xl font-semibold">$0<span className="text-base text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>Up to 3 projects</li>
              <li>Basic layers</li>
              <li>Community support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-emerald-300 transition-colors">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8 ring-2 ring-emerald-400/40">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-2 text-white/70">For teams shipping data stories every week.</p>
            <div className="mt-6 text-4xl font-semibold">$29<span className="text-base text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>Unlimited projects</li>
              <li>Advanced layers</li>
              <li>Private sharing</li>
              <li>Email support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-emerald-400 text-black font-semibold px-6 py-3 hover:bg-emerald-300 transition-colors">Upgrade</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-white/70">For organizations with advanced needs.</p>
            <div className="mt-6 text-4xl font-semibold">Custom</div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>SSO and RBAC</li>
              <li>Dedicated success manager</li>
              <li>On-prem options</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-emerald-300 transition-colors">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
