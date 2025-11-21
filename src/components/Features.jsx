import { Sparkles, LineChart, Layers, Shield } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Generative visuals',
    desc: 'Bring your narrative to life with adaptive visuals that respond to your story.'
  },
  {
    icon: LineChart,
    title: 'Insight mapping',
    desc: 'Plot KPIs across a living terrain to spot patterns and outliers instantly.'
  },
  {
    icon: Layers,
    title: 'Compositional layers',
    desc: 'Stack segments, cohorts, and experiments as layers you can toggle on and off.'
  },
  {
    icon: Shield,
    title: 'Enterprise ready',
    desc: 'SSO, RBAC, and audit logs out of the box with privacy by design.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Purpose-built for clarity</h2>
          <p className="mt-4 text-white/70">Everything you need to turn raw numbers into narratives that resonate.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/10 text-emerald-300 flex items-center justify-center mb-4">
                <it.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
