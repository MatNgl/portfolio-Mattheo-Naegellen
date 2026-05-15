export const personalInfo = {
  name: 'Matthéo Naegellen',
  firstName: 'Matthéo',
  lastName: 'Naegellen',
  title: 'Développeur Full-Stack',
  tagline: 'Création d\'expériences web fluides, modernes et performantes.',
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
    type: 'alternance' as const,
    company: 'La Banque Postale',
    role: 'Développeur Fullstack',
    period: 'Septembre 2023 - Septembre 2026',
    duration: '3 ans',
    location: 'Paris',
    description: "De la compréhension du besoin à la mise en production, en totale autonomie. Chaque projet suit le même cycle : rencontre avec les MOA, étude de faisabilité, rédaction du cahier des charges et des règles métier, développement, gestion des branches GitLab, planification, mise en recette, puis mise en production avec retours utilisateurs.",
    missions: [
      {
        title: 'MyData — Importation de données',
        description:
          "Interface web permettant aux équipes d'importer des fichiers de données vers les bases internes. Projet géré en totale autonomie de bout en bout.",
        highlights: [
          'Cadrage du besoin et rédaction du cahier des charges avec les MOA',
          "Conception et développement de l'interface d'import (validation, mapping, erreurs)",
          'Création et gestion du schéma de base de données PostgreSQL',
          'Gestion des branches GitLab et du planning de livraison',
          'Mise en recette, corrections, puis déploiement en production',
        ],
        tags: ['PHP', 'PostgreSQL', 'JavaScript', 'Ajax'],
      },
      {
        title: 'Dashboards & Filtrage avancé',
        description:
          "Plusieurs tableaux de bord avec filtrage avancé pour piloter les activités de traitement au quotidien. Navigation en vue macro puis micro.",
        highlights: [
          'Vue macro → micro : ensemble des centres, puis services, puis équipes, puis agents',
          'Filtres multi-critères : périodes, centres, équipes, statuts',
          'Export des données filtres au format tableur',
          "Collaboration avec les équipes métier pour affiner l'ergonomie",
          'Déploiement progressif avec retours terrain intégrés',
        ],
        tags: ['PHP', 'Ajax', 'PostgreSQL', 'JavaScript'],
      },
      {
        title: 'Gestion de listing clients',
        description:
          "Outil complet de gestion et de répartition des dossiers clients entre agents, avec import de fichiers et gestion intelligente des charges de travail.",
        highlights: [
          'Rencontre MOA, étude du besoin, rédaction des spécifications fonctionnelles',
          'Interface de validation et qualification des contacts clients',
          'Répartition intelligente des lots de dossiers entre agents',
          'Gestion des charges de travail avec équilibrage configurable',
          "Import de fichiers en base de données pour alimenter les listes clients",
          'Mise en production avec accompagnement et retours utilisateurs',
        ],
        tags: ['JavaScript', 'PostgreSQL', 'Docker', 'PHP'],
      },
      {
        title: 'Formulaires dossiers anomalies',
        description:
          "Application complète de traitement des anomalies clients : du formulaire de saisie jusqu'à l'interface d'administration, en passant par la liste et le détail des dossiers.",
        highlights: [
          'Étude de faisabilité et rencontre avec les MOA',
          'Rédaction du cahier des charges, des règles métier et des spécifications',
          'Gestion du planning, priorisation des développements et des besoins',
          'Gestion des branches GitLab tout au long du projet',
          'Formulaire de saisie des anomalies avec règles de validation dynamiques',
          'Vue liste et détail des dossiers pour le suivi des traitements',
          "Interface d'administration permettant de paramétrer dynamiquement les contenus du formulaire",
          'Mise en recette, retours MOA, puis mise en production',
        ],
        tags: ['PHP', 'JavaScript', 'PostgreSQL', 'Ajax'],
      },
    ],
  },
  {
    type: 'stage' as const,
    company: 'La Banque Postale',
    role: 'Stagiaire Développeur',
    period: 'Mai 2023 - Juillet 2023',
    duration: '3 mois',
    location: 'Paris',
    description: "Participation active au développement d'applications métier. Montée en compétences sur la stack technique de l'équipe et premiers contacts directs avec les MOA.",
  },
  {
    type: 'stage' as const,
    company: 'La Banque Postale',
    role: 'Stagiaire Développeur',
    period: 'Décembre 2021 - Janvier 2022',
    duration: '2 mois',
    location: 'Paris',
    description: "Découverte de l'environnement professionnel et des outils internes. Premiers développements sur des applications métier existantes.",
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
    tags: ['React', 'NestJS', 'MongoDB', 'API Pokémon'],
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

export const education = [
  {
    degree: 'Mastère Développeur Full-Stack & Management',
    school: 'EFREI Paris',
    period: '2024 - 2026',
    duration: '2 ans',
    alternance: true,
    description: "Formation de haut niveau en développement full-stack et gestion de projet. Projets d'école en équipe sur des architectures modernes et complexes.",
    tags: ['Rust', 'Swift', 'React', 'Angular', 'Micro Frontend', 'Microservices', 'Architecture'],
  },
  {
    degree: "L3 Développeur d'Application",
    school: 'EFREI Paris',
    period: '2023 - 2024',
    duration: '1 an',
    alternance: true,
    description: "Licence professionnelle en développement d'application. Approfondissement de l'architecture logicielle et des bonnes pratiques, en parallèle de l'alternance à La Banque Postale.",
    tags: ['React', 'Angular', 'Node.js', 'TypeScript', 'Design Patterns', 'Architecture'],
  },
  {
    degree: 'BTS SIO',
    school: '',
    period: '2022 - 2024',
    duration: '2 ans',
    alternance: false,
    description: "Fondamentaux de l'informatique : algorithmique, bases de données, développement web et réseaux. Deux stages de 7 semaines en entreprise.",
    tags: ['PHP', 'SQL', 'Algorithmique', 'HTML / CSS', 'Réseaux'],
  },
]

export const skills = {
  Frontend: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'],
  Backend: ['NestJS', 'PHP', 'Node.js', 'REST API'],
  'Base de données': ['PostgreSQL', 'MongoDB', 'Redis'],
  DevOps: ['Docker', 'GitLab', 'VPS', 'Linux'],
  Outils: ['Figma', 'Git', 'Postman'],
}
