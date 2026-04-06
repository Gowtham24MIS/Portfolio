import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, techBadges } from '../data'

const colorMap = {
  acid: { bar: '#a8ff3e', glow: 'rgba(168,255,62,0.15)', border: 'rgba(168,255,62,0.2)', text: 'text-acid' },
  glow: { bar: '#6ee7f7', glow: 'rgba(110,231,247,0.15)', border: 'rgba(110,231,247,0.2)', text: 'text-glow' },
  plasma: { bar: '#ff6b6b', glow: 'rgba(255,107,107,0.15)', border: 'rgba(255,107,107,0.2)', text: 'text-plasma' },
}

function SkillBar({ name, level, color, index, inView }) {
  const c = colorMap[color]
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm text-white/70">{name}</span>
        <span className="font-mono text-xs text-white/40">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: c.bar, boxShadow: `0 0 10px ${c.bar}40` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      {/* Bg gradient blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-5"
        style={{ background: 'radial-gradient(circle, #a8ff3e, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="section-label">Technical Arsenal</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Built from the ground up — understanding the mathematics and theory behind every tool.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skills.map((group, gi) => {
            const c = colorMap[group.color]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.15, duration: 0.7 }}
                className="skill-card group"
                style={{ '--hover-border': c.border }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: c.glow, border: `1px solid ${c.border}` }}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className={`font-display font-semibold text-sm ${c.text}`}>{group.category}</h3>
                    <p className="font-mono text-xs text-white/30">{group.items.length} skills</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {group.items.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      color={group.color}
                      index={si + gi * 4}
                      inView={inView}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-6 overflow-hidden"
        >
          <p className="font-mono text-xs text-white/30 text-center mb-5 tracking-widest">TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10
                           hover:border-acid/30 hover:bg-acid/5 transition-all duration-300 cursor-default"
                data-hover
              >
                <span>{tech.icon}</span>
                <span className="font-body text-sm text-white/60">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
