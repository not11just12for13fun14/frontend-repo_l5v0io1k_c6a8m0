import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-emerald-300/90 text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live 3D Data Terrain
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-white">
            Illuminate your data landscape
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80">
            A new way to explore metrics with an interactive, topographic canvas. Map trends, surface anomalies, and present insights with cinematic clarity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-emerald-300 hover:text-black transition-colors">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors">
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
