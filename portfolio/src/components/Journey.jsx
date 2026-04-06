import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timeline } from '../data'

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="journey" ref={ref} className="relative py-32 overflow-hidden">
      {/* Center line glow */}
      <div className="absolute top-32 bottom-32 left-1/2 -translate-x-1/2 w-px timeline-line hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="section-label">Timeline</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            From writing my first HTML tag to implementing neural networks — a timeline of growth.
          </p>
        </motion.div>

        {/* Timeline items */}
        <div className="relative space-y-6 lg:space-y-0">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index, inView }) {
  const isLeft = item.side === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative lg:flex lg:items-center lg:gap-8 mb-8 lg:mb-16
        ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Card */}
      <div className={`lg:w-[calc(50%-3rem)] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className="glass rounded-2xl p-6 hover:border-acid/20 transition-all duration-300 hover:-translate-y-1
                        hover:shadow-[0_0_40px_rgba(168,255,62,0.08)] ml-8 lg:ml-0">
          {/* Year badge */}
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
            <span className="font-mono text-xs text-acid/80 tracking-widest">{item.year}</span>
            <div className="h-px flex-1 bg-acid/20 max-w-[40px]" />
          </div>

          <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
          <p className="font-body text-sm text-white/50 leading-relaxed mb-4">{item.description}</p>

          {/* Tags */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : ''}`}>
            {item.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
          className="w-12 h-12 rounded-full glass border-acid/30 flex items-center justify-center text-xl
                     shadow-[0_0_30px_rgba(168,255,62,0.2)]"
          style={{ borderColor: 'rgba(168,255,62,0.3)' }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Spacer for other side */}
      <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />

      {/* Mobile left icon */}
      <div className="absolute left-0 top-6 w-6 h-6 rounded-full glass flex items-center justify-center text-sm lg:hidden">
        {item.icon}
      </div>
    </motion.div>
  )
}
