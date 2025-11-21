import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} NeoTopo. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white">Terms</a>
            <a href="/test" className="text-white/60 hover:text-white">System Check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
