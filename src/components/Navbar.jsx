import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Stories' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold tracking-tight">NeoTopo</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full px-4 py-2 transition-colors">
            Get Started
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-6 py-4 space-y-3 bg-black/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="inline-block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full px-4 py-2" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
