import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { personal } from '../data'
import profileImg from '../assets/pmg.png'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: 'radial-gradient(circle, #a8ff3e, transparent)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: 'radial-gradient(circle, #6ee7f7, transparent)' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-[80px] opacity-5"
        style={{ background: 'radial-gradient(circle, #ff6b6b, transparent)' }} />

      {/* Rotating ring decoration */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 opacity-10 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#a8ff3e" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="60" stroke="#6ee7f7" strokeWidth="0.5" strokeDasharray="3 6" />
          <circle cx="100" cy="100" r="40" stroke="#ff6b6b" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={item} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-acid animate-pulse" />
              <span className="section-label">Available for opportunities</span>
            </motion.div>

            <motion.div variants={item}>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white">
                {personal.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span className="gradient-text">{word}</span> : word}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <p className="font-mono text-sm text-acid/80 tracking-wider">
                {personal.role}
              </p>
            </motion.div>

            <motion.div variants={item}>
              <p className="font-body text-white/50 text-lg leading-relaxed max-w-lg">
                {personal.tagline}
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="btn-primary" data-hover>
                View Work
                <ExternalLink size={14} />
              </a>
              <a href={personal.resume} className="btn-outline" data-hover>
                Download CV
                <ArrowDown size={14} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4 pt-2">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: personal.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-acid hover:border-acid/30 transition-all duration-300 hover:scale-110"
                  data-hover
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
              <div className="h-px w-12 bg-white/10" />
              <span className="font-mono text-xs text-white/30">{personal.email}</span>
            </motion.div>
          </motion.div>

          {/* Right — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing ring */}
              <motion.div
                className="absolute -inset-4 rounded-full opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'conic-gradient(from 0deg, #a8ff3e, #6ee7f7, #ff6b6b, #a8ff3e)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Static ring */}
              <div className="absolute -inset-1 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #a8ff3e40, #6ee7f740, #ff6b6b40, #a8ff3e40)',
                  padding: '1px',
                }}
              />

              {/* Image container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden"
              >
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder when no image provided
                  <div className="w-full h-full flex flex-col items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1e1e3d 0%, #0f0f1e 100%)',
                    }}
                  >
                    {/* Abstract avatar */}
                    <div className="w-24 h-24 rounded-full mb-3"
                      style={{
                        background: 'linear-gradient(135deg, #a8ff3e30, #6ee7f730)',
                        border: '1px solid rgba(168,255,62,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                      }}
                    >
                      👤
                    </div>
                    <p className="font-mono text-xs text-white/30 text-center px-4">
                      Add profile.jpg<br/>to src/assets/
                    </p>
                  </div>
                )}

                {/* Glass overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, rgba(7,7,15,0.6), transparent)' }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-12 glass rounded-2xl px-4 py-2.5 text-sm"
              >
                <span className="text-acid font-mono font-medium">2nd yr</span>
                <p className="text-white/50 text-xs">M.Tech Student</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-16 glass rounded-2xl px-4 py-2.5 text-sm"
              >
                <span className="text-glow font-mono font-medium">7+ Projects</span>
                <p className="text-white/50 text-xs">& Growing</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-white/30 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
