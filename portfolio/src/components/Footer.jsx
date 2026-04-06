import { motion } from 'framer-motion'
import { personal } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="font-display font-bold text-lg tracking-tight">
          <span className="text-acid">&lt;</span>
          <span className="text-white">AR</span>
          <span className="text-acid">/&gt;</span>
        </a>

        <p className="font-mono text-xs text-white/20 text-center">
          © {year} {personal.name} · Here to build, learn, and share.
        </p>

        <div className="flex items-center gap-1 font-mono text-xs text-white/20">
          <span>Crafted with</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-plasma mx-1"
          >♥</motion.span>
          <span>& curiosity</span>
        </div>
      </div>
    </footer>
  )
}
