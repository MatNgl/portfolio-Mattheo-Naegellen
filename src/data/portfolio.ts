export const personalInfo = {
  name: 'Matthéo Naegellen',
  firstName: 'Matthéo',
  lastName: 'Naegellen',
  title: 'Développeur Full-Stack',
  school: 'EFREI Paris',
  degree: 'Master Développeur Fullstack & Management',
  bio: 'Alternant depuis 3 ans à La Banque Postale, je conçois des applications métier de A à Z. Recueil des besoins, maquettes, développement, mise en prod. En parallèle, je crée des projets perso pour résoudre des problèmes concrets.',
  email: 'mattheo.naegellen@gmail.com',
  github: 'https://github.com/MatNgl/',
  githubUsername: 'MatNgl',
  linkedin: 'https://www.linkedin.com/in/mattheo-naegellen/',
  availableFrom: 'Septembre 2026',
}

export const stats = [
  { value: 3, suffix: '+', label: "Ans d'expérience" },
  { value: 12, suffix: '', label: 'Projets complétés' },
]

export const experiences = [
  {
    type: 'stage' as const,
    company: 'La Banque Postale',
    role: 'Stagiaire Développeur',
    period: 'Décembre 2021 - Janvier 2022',
    duration: '2 mois',
    location: 'Paris',
    description: "Découverte de l'environnement professionnel et initiation aux outils internes de développement.",
  },
  {
    type: 'stage' as const,
    company: 'La Banque Postale',
    role: 'Stagiaire Développeur',
    period: 'Mai 2023 - Juillet 2023',
    duration: '3 mois',
    location: 'Paris',
    description: "Participation au développement d'applications métier et montée en compétences sur les technologies de l'équipe.",
  },
  {
    type: 'alternance' as const,
    company: 'La Banque Postale',
    role: 'Développeur Fullstack',
    period: 'Septembre 2023 - Septembre 2026',
    duration: '3 ans',
    location: 'Paris',
    description: "Conception et développement d'applications métier en autonomie : recueil des besoins, maquettes, développement, mise en production.",
    missions: [
      {
        title: 'MyData - Importation de données',
        description:
          "Interface web pour importer des données vers des bases internes. Gestion du projet en autonomie : cadrage des besoins avec les MOA, développement, mise en production.",
        tags: ['PHP', 'PostgreSQL', 'JavaScript'],
      },
      {
        title: 'Dashboard et filtrage',
        description:
          'Tableaux de bord avec filtrage avancé et export pour les équipes métier. Utilisés au quotidien pour piloter les activités de traitement.',
        tags: ['PHP', 'PostgreSQL', 'JavaScript'],
      },
      {
        title: 'Gestion de listing clients',
        description:
          'Outil de répartition des dossiers entre agents. Interface de validation des contacts clients et de gestion des charges de travail.',
        tags: ['JavaScript', 'PostgreSQL', 'Docker', 'PHP'],
      },
      {
        title: 'Formulaires dossiers anomalies',
        description:
          "Formulaires de création de dossiers pour traiter les anomalies clients. Saisie des corrections à apporter et renvoi vers les services concernés.",
        tags: ['PHP', 'JavaScript', 'PostgreSQL'],
      },
    ],
  },
]

export const projects = [
  {
    id: 'pokefolio',
    title: 'Pokefolio',
    subtitle: 'Gestionnaire de collection Pokémon',
    description:
      "Application fullstack pour gérer sa collection de cartes. Prix d'achat, langue, date d'achat, statistiques et système d'amis pour voir les collections des autres.",
    image: '/capture_pokefolio.png',
    logo: '/logo-pokefolio.png',
    url: 'https://www.pokefolio.xyz/login',
    github: 'https://github.com/MatNgl/',
    tags: ['React', 'NestJS', 'MongoDB', 'API Pokemon'],
    color: '#eef6ee',
    accent: '#2d7a2d',
    status: 'live',
  },
  {
    id: 'signalscrap',
    title: 'SignalScrap',
    subtitle: "Surveillance d'annonces en temps réel",
    description:
      'Scraping de Vinted et Cardmarket avec filtres avancés : mots-clés, état, marque, couleur, langue. Notifications Telegram ou mobile. Toutes les 15 secondes.',
    image: '/capture_signalscrap.png',
    logo: '/logo_signalscrap_white.png',
    url: 'https://www.signalscrap.com',
    github: 'https://github.com/MatNgl/',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Chromium'],
    color: '#fff5ec',
    accent: '#c46a00',
    status: 'live',
  },
  {
    id: 'pokemon-tracker',
    title: 'Pokemon Price Tracker',
    subtitle: 'Suivi de prix en direct',
    description:
      "Bot de surveillance sur les sites de vente Pokémon. Détecte les nouveaux articles et les changements de prix, envoie les notifications sur Telegram.",
    image: '/capture_botpokemon.png',
    url: undefined,
    github: 'https://github.com/MatNgl/',
    tags: ['Node.js', 'Telegram API', 'Scraping'],
    color: '#eef2fc',
    accent: '#1a4fa0',
    status: 'live',
  },
  {
    id: 'vitrine-resto',
    title: 'Vitrine Restaurateurs',
    subtitle: 'En développement',
    description:
      "Proposition de sites vitrines sur mesure pour restaurateurs. Gestion du menu, page contact et design adapté à chaque établissement.",
    image: '/capture_ventesiterestaurant.png',
    url: undefined,
    github: undefined,
    tags: ['React', 'Design', 'UX', 'Tailwind'],
    color: '#fdf8ec',
    accent: '#a07000',
    status: 'wip',
  },
]

export const skills = {
  Frontend: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'],
  Backend: ['NestJS', 'PHP', 'Node.js', 'REST API'],
  'Base de données': ['PostgreSQL', 'MongoDB', 'Redis'],
  DevOps: ['Docker', 'GitHub', 'VPS', 'Linux'],
  Outils: ['Figma', 'Git', 'Postman'],
}
