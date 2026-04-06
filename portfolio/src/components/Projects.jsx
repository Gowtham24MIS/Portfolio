import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'
import { projects } from '../data'

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const colorMap = {
    acid: { text: 'text-acid', border: 'rgba(168,255,62,0.2)', glow: 'rgba(168,255,62,0.08)', badge: 'bg-acid/10 text-acid border-acid/20' },
    glow: { text: 'text-glow', border: 'rgba(110,231,247,0.2)', glow: 'rgba(110,231,247,0.08)', badge: 'bg-glow/10 text-glow border-glow/20' },
    plasma: { text: 'text-plasma', border: 'rgba(255,107,107,0.2)', glow: 'rgba(255,107,107,0.08)', badge: 'bg-plasma/10 text-plasma border-plasma/20' },
  }
  const c = colorMap[project.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="project-card group relative"
      data-hover
    >
      {/* Hover glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{ background: `radial-gradient(400px at 50% 50%, ${c.glow}, transparent)` }}
          />
        )}
      </AnimatePresence>

      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border font-mono ${c.badge}`}>
                <Star size={10} fill="currentColor" />
                Featured
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white transition-colors"
              data-hover>
              <Github size={14} />
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-acid transition-colors"
              data-hover>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Color accent line */}
        <motion.div
          className="h-px mb-4 rounded-full"
          style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
          animate={hovered ? { scaleX: 1.1 } : { scaleX: 1 }}
          style={{ originX: 0, background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
        />

        {/* Title */}
        <h3 className={`font-display font-bold text-xl text-white mb-3 group-hover:${c.text} transition-colors`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-white/50 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-4">
          {project.stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className={`font-mono font-bold text-sm ${c.text}`}>{stat.value}</div>
              <div className="font-body text-xs text-white/30">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className={`px-2.5 py-1 rounded-full text-xs border font-mono ${c.badge}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-display font-semibold
                       bg-white/5 hover:bg-acid hover:text-ink-950 border border-white/10 hover:border-acid
                       text-white/70 transition-all duration-300"
            data-hover>
            Live Demo <ArrowUpRight size={12} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-display font-semibold
                       glass text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
            data-hover>
            <Github size={12} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-5"
        style={{ background: 'radial-gradient(circle, #6ee7f7, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-end justify-between">
            <div>
              <span className="section-label">Work</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex btn-outline text-sm" data-hover>
              <Github size={15} />
              All Projects
            </a>
          </div>
          <p className="text-white/40 mt-4 max-w-xl">
            A collection of projects built from scratch — combining web development and machine learning to solve real problems.
          </p>
        </motion.div>

        {/* 2-col grid for featured, then 2-col for rest */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex" data-hover>
            <Github size={15} />
            See all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
