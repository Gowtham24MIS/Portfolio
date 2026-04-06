import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../data'

const stats = [
  { value: '7+', label: 'Projects Built' },
  { value: '2nd', label: 'Year M.Tech' },
  { value: '2', label: 'Core Domains' },
  { value: '∞', label: 'Curiosity' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-acid/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Code block aesthetic */}
            <div className="glass rounded-2xl p-8 font-mono text-sm space-y-3">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-plasma/60" />
                <div className="w-3 h-3 rounded-full bg-acid/60" />
                <div className="w-3 h-3 rounded-full bg-glow/60" />
                <span className="ml-3 text-white/20 text-xs">about.js</span>
              </div>

              <CodeLine delay={0.2} inView={inView}>
                <span className="text-glow/80">const</span>{' '}
                <span className="text-acid">developer</span>{' '}
                <span className="text-white/40">=</span>{' '}
                <span className="text-white/60">{'{'}</span>
              </CodeLine>
              <CodeLine delay={0.3} inView={inView} indent>
                <span className="text-white/50">name</span>
                <span className="text-white/30">:</span>{' '}
                <span className="text-plasma/80">'{personal.name}'</span><span className="text-white/30">,</span>
              </CodeLine>
              <CodeLine delay={0.4} inView={inView} indent>
                <span className="text-white/50">year</span>
                <span className="text-white/30">:</span>{' '}
                <span className="text-plasma/80">'2nd yr Integrated M.Tech'</span><span className="text-white/30">,</span>
              </CodeLine>
              <CodeLine delay={0.5} inView={inView} indent>
                <span className="text-white/50">domains</span>
                <span className="text-white/30">:</span>{' '}
                <span className="text-white/60">['</span>
                <span className="text-acid/80">WebDev</span>
                <span className="text-white/60">', '</span>
                <span className="text-glow/80">MachineLearning</span>
                <span className="text-white/60">'],</span>
              </CodeLine>
              <CodeLine delay={0.6} inView={inView} indent>
                <span className="text-white/50">approach</span>
                <span className="text-white/30">:</span>{' '}
                <span className="text-plasma/80">'from scratch 🧠'</span><span className="text-white/30">,</span>
              </CodeLine>
              <CodeLine delay={0.7} inView={inView} indent>
                <span className="text-white/50">status</span>
                <span className="text-white/30">:</span>{' '}
                <span className="text-acid/80">available</span>{' '}
                <span className="text-white/30">✓</span>
              </CodeLine>
              <CodeLine delay={0.8} inView={inView}>
                <span className="text-white/60">{'}'}</span>
              </CodeLine>

              {/* Cursor blink */}
              <div className="flex items-center gap-1 pt-2">
                <span className="text-white/20">{'>'}</span>
                <motion.div
                  className="w-2 h-4 bg-acid/60"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="font-display font-bold text-2xl gradient-text">{stat.value}</div>
                  <div className="font-body text-xs text-white/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="section-label">About Me</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 leading-tight">
                From Principles<br />
                <span className="gradient-text">to Production</span>
              </h2>
            </div>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>{personal.bio}</p>
              <p>{personal.bio2}</p>
            </div>

            {/* Trait pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['First-principles thinker', 'Open source contributor', 'Math enthusiast', 'Lifelong learner', 'Clean code advocate'].map(trait => (
                <span
                  key={trait}
                  className="glass px-3 py-1.5 rounded-full text-xs text-white/60 font-mono"
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* Currently learning */}
            <div className="glass rounded-2xl p-5 border-l-2 border-acid/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-acid animate-pulse" />
                <span className="font-mono text-xs text-acid/80 tracking-wider">CURRENTLY EXPLORING</span>
              </div>
              <p className="text-white/60 text-sm">
                Deep learning architectures, transformer models, and integrating ML inference into web applications for real-time intelligent features.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CodeLine({ children, delay, inView, indent }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className={`flex items-center gap-1 ${indent ? 'pl-6' : ''}`}
    >
      {children}
    </motion.div>
  )
}
