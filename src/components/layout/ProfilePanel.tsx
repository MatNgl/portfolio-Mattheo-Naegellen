import { Github, Linkedin, Mail, Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function ProfilePanel() {
  return (
    <div className="bg-white rounded-[32px] p-5 flex flex-col items-center text-center shadow-2xl shadow-black/10 relative overflow-hidden z-10">
      
      {/* Decorative top-left dashes */}
      <svg className="absolute -top-2 -left-2 w-32 h-32 text-primary z-20 pointer-events-none" viewBox="0 0 100 100">
        <circle cx="10" cy="10" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
      </svg>

      {/* Photo */}
      <motion.div {...fadeUp(0.1)} className="w-full relative mb-6">
        <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 shadow-md">
          <img
            src="/Photo_pro_mattheo.png"
            alt={personalInfo.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h2 {...fadeUp(0.15)} className="text-[26px] xl:text-[28px] font-extrabold text-slate-900 leading-tight mb-2 tracking-tight z-10">
        {personalInfo.name}
      </motion.h2>

      {/* Connector icon with curved dashed line */}
      <motion.div {...fadeUp(0.18)} className="relative flex justify-center w-full mb-4">
         {/* Dashed line going from left edge curving to the center */}
         <svg className="absolute top-1/2 -left-5 w-[calc(50%+1rem)] h-16 text-primary pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M -10 100 Q 60 100 90 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
         </svg>
         
         <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 z-10 relative">
           <Flame size={18} strokeWidth={2.5} />
         </div>
      </motion.div>

      {/* Function / Title */}
      <motion.p {...fadeUp(0.2)} className="text-[14px] xl:text-[15px] text-slate-500 font-medium leading-relaxed px-2 mb-8">
        {personalInfo.title}
      </motion.p>

      {/* Social links */}
      <motion.div {...fadeUp(0.3)} className="flex items-center justify-center gap-6 w-full pb-2">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-subtle hover:scale-110 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} strokeWidth={2} />
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-subtle hover:scale-110 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={22} strokeWidth={2} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-primary hover:text-primary-subtle hover:scale-110 transition-all duration-300"
          aria-label="Email"
        >
          <Mail size={22} strokeWidth={2} />
        </a>
      </motion.div>
    </div>
  )
}
