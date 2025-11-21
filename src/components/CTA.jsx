export default function CTA() {
  return (
    <section id="cta" className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-white/5 to-transparent p-10 text-center">
          <h3 className="text-2xl sm:text-4xl font-semibold">Chart a clearer path through your data</h3>
          <p className="mt-3 text-white/70">Start free today. Build momentum in minutes.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-emerald-300 transition-colors">Create account</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}
