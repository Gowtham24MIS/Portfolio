import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark')
    document.documentElement.classList.toggle('light')
  }

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className={`min-h-screen bg-ink-950 text-white relative`}>
          {/* Custom cursor (desktop only) */}
          <Cursor />

          {/* Nav */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main content */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  )
}
