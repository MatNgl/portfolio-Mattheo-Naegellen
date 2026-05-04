import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'
import { personalInfo } from '../../data/portfolio'

const cards = [
  {
    label: 'Formation',
    value: 'Master Développeur Fullstack',
    sub: 'EFREI Paris',
    logo: '/Logo_Efrei_2022.svg.png',
  },
  {
    label: 'Alternance',
    value: 'La Banque Postale',
    sub: '3 ans',
    logo: '/Logo_La_Banque_postale_2022.svg.png',
  },
  {
    label: 'Disponible',
    value: personalInfo.availableFrom,
    sub: 'Recherche CDI',
  },
  {
    label: 'Localisation',
    value: 'Région parisienne',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionTitle label="A propos" title="Qui je suis" />
            <AnimatedSection delay={0.05}>
              <p className="text-text-muted leading-relaxed text-base">
                {personalInfo.bio}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="mt-5">
              <p className="text-text-muted leading-relaxed text-base">
                Je pars des besoins, je fais des maquettes Figma quand le projet le justifie,
                puis je vais droit au code. Pas de setup inutile, pas d'over-engineering.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <AnimatedSection key={card.label} delay={i * 0.08}>
                <div className="glass-dark p-5 rounded-[20px] h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  {card.logo && (
                    <img
                      src={card.logo}
                      alt={card.value}
                      className="h-6 object-contain mb-3 opacity-80"
                      draggable={false}
                    />
                  )}
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                    {card.label}
                  </span>
                  <p className="mt-1.5 font-semibold text-text text-sm leading-snug">{card.value}</p>
                  <p className="text-xs text-text-muted mt-1">{card.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
