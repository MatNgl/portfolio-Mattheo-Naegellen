import { Github, Linkedin, Mail } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import BigTitle from '../shared/BigTitle'
import { personalInfo } from '../../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-white/[0.05]">
      <BigTitle line1="Contact" />

      <AnimatedSection delay={0.1}>
        <p className="text-sm text-white/35 leading-relaxed max-w-lg -mt-4 mb-8">
          Disponible en CDI à partir de {personalInfo.availableFrom} · {personalInfo.location}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="flex flex-wrap gap-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-[14px] bg-primary text-white font-medium text-sm hover:bg-primary/80 transition-all duration-300 active:scale-[0.97]"
        >
          <Mail size={15} />
          {personalInfo.email}
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-[14px] glass text-white/60 font-medium text-sm hover:text-white hover:bg-white/[0.07] transition-all duration-300 active:scale-[0.97]"
        >
          <Linkedin size={15} />
          LinkedIn
        </a>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-[14px] glass text-white/60 font-medium text-sm hover:text-white hover:bg-white/[0.07] transition-all duration-300 active:scale-[0.97]"
        >
          <Github size={15} />
          GitHub
        </a>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-16 pt-6 border-t border-white/[0.05]">
        <p className="text-xs text-white/20">
          Matthéo Naegellen - {new Date().getFullYear()}
        </p>
      </AnimatedSection>
    </section>
  )
}
