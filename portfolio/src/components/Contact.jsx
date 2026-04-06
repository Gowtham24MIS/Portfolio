import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, ArrowUpRight } from 'lucide-react'
import { personal } from '../data'
import emailjs from '@emailjs/browser'

const socials = [
  { icon: Github, label: 'GitHub', href: personal.github, handle: '@alexrivera' },
  { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin, handle: 'in/alexrivera' },
  { icon: Twitter, label: 'Twitter', href: personal.twitter, handle: '@alexrivera' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
  e.preventDefault()

  emailjs.send(
    'service_gnvy4wh',    // from EmailJS dashboard
    'template_jc6ky8h',   // from EmailJS dashboard
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    '3bOFCYjy0uUPLunWw'     // from EmailJS dashboard
  )
  .then(() => setSent(true))
  .catch(() => alert('Something went wrong, try again.'))
}

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-8"
        style={{ background: 'radial-gradient(circle, #a8ff3e08, transparent)' }} />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-5"
        style={{ background: 'radial-gradient(circle, #6ee7f7, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Open to internships, collaborations, and interesting conversations about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Email card */}
            <a href={`mailto:${personal.email}`}
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-acid/30 transition-all duration-300 hover:-translate-y-1 group block"
              data-hover>
              <div className="w-12 h-12 rounded-xl bg-acid/10 border border-acid/20 flex items-center justify-center text-acid flex-shrink-0">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs text-white/30 mb-1">EMAIL</div>
                <div className="font-body text-white/80 text-sm">{personal.email}</div>
              </div>
              <ArrowUpRight size={16} className="text-white/20 group-hover:text-acid transition-colors" />
            </a>

            {/* Location */}
            <div className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-glow/10 border border-glow/20 flex items-center justify-center text-glow flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-mono text-xs text-white/30 mb-1">LOCATION</div>
                <div className="font-body text-white/80 text-sm">India · Open to Remote</div>
              </div>
            </div>
           {/* WhatsApp */}
            <a
            href="https://wa.me/919840228021?text=Hi%20Gowtham%2C%20I%20saw%20your%20portfolio!%20and%20want%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-acid/30 transition-all duration-300 hover:-translate-y-1 group block"
            data-hover
          >
            <div className="w-12 h-12 rounded-xl bg-acid/10 border border-acid/20 flex items-center justify-center text-2xl flex-shrink-0">
              📱
            </div>
            <div className="flex-1">
              <div className="font-mono text-xs text-white/30 mb-1">WHATSAPP</div>
              <div className="font-body text-white/80 text-sm">+91 9840228021</div>
            </div>
            <ArrowUpRight size={16} className="text-white/20 group-hover:text-acid transition-colors" />
          </a>
              

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="glass rounded-2xl p-4 flex items-center gap-4 hover:border-white/20 transition-all duration-300 group block"
                  data-hover>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-sm text-white/70">{label}</div>
                    <div className="font-mono text-xs text-white/30">{handle}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </a>
              ))}
            </div>

            {/* Availability indicator */}
            <div className="glass rounded-2xl p-5 border-l-2 border-acid/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-acid animate-pulse" />
                <span className="font-mono text-xs text-acid/80">AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <p className="font-body text-xs text-white/40 mt-2">
                Currently open to internships, freelance projects, and collaboration in Web Dev & ML.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-white mb-6">Send a Message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-acid/10 border border-acid/30 flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✓
                  </div>
                  <p className="font-display font-semibold text-acid">Message Sent!</p>
                  <p className="font-body text-sm text-white/40 mt-2">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="Name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={v => setForm({ ...form, name: v })}
                      required
                    />
                    <InputField
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={v => setForm({ ...form, email: v })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/40 mb-2 tracking-wider">MESSAGE</label>
                    <textarea
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                                 font-body text-sm text-white placeholder-white/20
                                 focus:outline-none focus:border-acid/40 focus:bg-acid/5
                                 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center" data-hover>
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InputField({ label, type, placeholder, value, onChange, required }) {
  return (
    <div>

      
      <label className="block font-mono text-xs text-white/40 mb-2 tracking-wider">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                   font-body text-sm text-white placeholder-white/20
                   focus:outline-none focus:border-acid/40 focus:bg-acid/5
                   transition-all duration-300"
      />
    </div>
  )
}
