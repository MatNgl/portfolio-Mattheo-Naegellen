import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Alternance', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div
        className={`flex items-center justify-between w-full max-w-4xl px-5 h-12 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/20'
            : 'bg-white/10 backdrop-blur-md border border-white/15'
        }`}
      >
        <a
          href="#"
          className={`font-semibold text-sm tracking-tight hover:opacity-80 transition-opacity ${scrolled ? 'text-primary' : 'text-white'}`}
        >
          Matthéo Naegellen
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${scrolled ? 'text-text/70 hover:text-primary' : 'text-white/70 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${scrolled ? 'bg-primary text-white hover:bg-primary-light' : 'bg-white text-primary hover:bg-white/90'}`}
          >
            Me contacter
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1 p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-4 h-0.5 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
            style={{ background: scrolled ? '#1a1a2e' : '#fff' }}
          />
          <span
            className={`w-4 h-0.5 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
            style={{ background: scrolled ? '#1a1a2e' : '#fff' }}
          />
          <span
            className={`w-4 h-0.5 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
            style={{ background: scrolled ? '#1a1a2e' : '#fff' }}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[4.5rem] left-4 right-4 md:hidden bg-white/90 backdrop-blur-xl rounded-[20px] border border-white/50 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-text hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex justify-center px-5 py-2 bg-[#19046e] text-white text-sm font-medium rounded-full hover:bg-[#19046e]/90 transition-colors mt-1"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
