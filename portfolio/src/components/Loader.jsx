import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = [
    'initializing_system.exe',
    'loading_components.js',
    'mounting_portfolio.jsx',
    'ready ✓',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 1.2
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress > 20) setPhase(1)
    if (progress > 55) setPhase(2)
    if (progress > 85) setPhase(3)
  }, [progress])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-ink-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Animated orb */}
      <div className="relative mb-12">
        <motion.div
          className="w-24 h-24 rounded-full border border-acid/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-glow/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-4 h-4 rounded-full bg-acid"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="absolute inset-0 rounded-full"
          style={{ boxShadow: '0 0 60px rgba(168,255,62,0.15)' }} />
      </div>

      {/* Progress info */}
      <div className="w-64 space-y-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-xs text-white/40">Loading</span>
          <span className="font-mono text-xs text-acid">{Math.round(progress)}%</span>
        </div>

        {/* Bar */}
        <div className="h-px bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full loader-bar rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Phase text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={phase}
            className="font-mono text-xs text-white/40 text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {phases[phase]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
