import { Github, Linkedin, Mail } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import MagneticButton from '../shared/MagneticButton'
import { personalInfo } from '../../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Contact</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-text leading-tight">
            Parlons d'un projet
          </h2>
          <p className="mt-4 text-base text-text-muted leading-relaxed max-w-lg mx-auto">
            Je cherche un CDI a partir de {personalInfo.availableFrom}.
            N'hesitez pas a me contacter directement.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-10">
          <MagneticButton
            href={`mailto:${personalInfo.email}`}
            variant="primary"
            className="text-base px-8 py-3.5 mx-auto"
          >
            <Mail size={17} />
            {personalInfo.email}
          </MagneticButton>
        </AnimatedSection>

        <AnimatedSection delay={0.25} className="mt-8 flex items-center justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-medium text-sm"
          >
            <Github size={18} />
            GitHub
          </a>
          <div className="w-px h-4 bg-primary/20" />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-medium text-sm"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.35} className="mt-20 pt-8 border-t border-primary/10">
          <p className="text-xs text-text-muted">
            Matthéo Naegellen - {new Date().getFullYear()}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
