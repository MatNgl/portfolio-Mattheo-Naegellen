import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Expérience', href: '#experience' },
  { label: 'Formation', href: '#education' },
  { label: 'Technologies', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-4 px-4"
    >
      {/* Desktop: compact pill, auto width */}
      <div className="hidden md:flex items-center gap-6 px-5 h-11 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 tracking-wide whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
        <div className="w-px h-4 bg-white/[0.1]" />
        <a
          href="#contact"
          className="px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary/80 transition-all duration-300 whitespace-nowrap"
        >
          Me contacter
        </a>
      </div>

      {/* Mobile: full-width pill with name + hamburger */}
      <div className="flex md:hidden items-center justify-between w-full max-w-lg px-5 h-11 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08]">
        <a href="#" className="font-semibold text-sm text-white">
          Matthéo Naegellen
        </a>
        <button
          className="flex flex-col gap-1 p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-4 h-0.5 bg-white transition-all duration-300 block ${
                i === 0 && mobileOpen ? 'rotate-45 translate-y-1.5' : ''
              } ${i === 1 && mobileOpen ? 'opacity-0' : ''} ${
                i === 2 && mobileOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[4rem] left-4 right-4 md:hidden bg-black/80 backdrop-blur-xl rounded-[20px] border border-white/10 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex justify-center px-5 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/80 transition-colors mt-1"
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
