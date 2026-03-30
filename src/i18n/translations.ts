export type Lang = 'cs' | 'en';

export const translations = {
  cs: {
    nav: {
      about: 'O mně',
      tools: 'Nástroje',
      projects: 'Projekty',
      experience: 'Zkušenosti',
      contact: 'Kontakt',
      cv: 'CV',
    },
    hero: {
      greeting: 'Bc. Lukáš Zdenek',
      role: 'Game Developer & Technologist',
      tagline: 'Myšlenka celistvá, rozhodnutí úplné,\ntak se dílo povede.',
      cta: 'Prohlédnout práci',
      ctaCV: 'Stáhnout CV',
      available: 'Dostupný pro freelance & kontrakty',
    },
    about: {
      title: 'O mně',
      p1: 'Vyvíjím hry a technologické prototypy přes patnáct let. Specializuji se na Unity3D, C#, ale stejně dobře si poradím s embedded systémy, automatizací nebo iOS/Android deploymentem.',
      p2: 'V herním průmyslu jsem pracoval s Black Element, Keen Software House, PacoGames, HGames-ArtWorks a dalšími. Posledním projektem je Orbitron: Space Academy na Steamu.',
      p3: 'Mimo kód mě zajímá archeologie, astronomie a elektronická hudba kombinovaná s živými nástroji.',
      location: 'Česká republika',
      availability: 'Freelance / Kontrakt',
    },
    tools: {
      title: 'Nástroje & Technologie',
      subtitle: 'Jádro mého tech stacku',
      items: {
        unity: { name: 'Unity3D', desc: 'PC, Android, iOS, WebGL, Steam' },
        arduino: { name: 'Arduino', desc: 'Embedded, prototypy, IoT' },
        autoit: { name: 'AutoIt', desc: 'Automatizace procesů, scripting' },
        csharp: { name: 'C#', desc: 'Primární jazyk, OOP, patterns' },
        js: { name: 'JavaScript', desc: 'WebGL, web tooling' },
        plc: { name: 'PLC / Yokogawa', desc: 'Průmyslové řídicí systémy' },
      },
    },
    projects: {
      title: 'Projekty',
      subtitle: 'Výběr z portfolia',
      items: {
        orbitron: {
          name: 'Orbitron: Space Academy',
          desc: 'Unity3D hra na Steamu. Vývoj 2021–2024.',
          tags: ['Unity3D', 'C#', 'Steam'],
        },
        carrier: {
          name: 'Carrier Command: Gaea Mission',
          desc: 'Level design, AI scripting, topologie ostrovů pro Black Element studio.',
          tags: ['Level Design', 'AI Scripting', 'Unity3D'],
        },
        rsplan: {
          name: 'RS Plan 095',
          desc: 'Prototyp řídicího systému s vizualizací a real-time daty.',
          tags: ['Prototyping', 'Visualization', 'Arduino'],
        },
        paco: {
          name: 'WebGL Games',
          desc: 'Série WebGL her a jedné Android hry pro PacoGames.',
          tags: ['Unity3D', 'WebGL', 'C#'],
        },
      },
    },
    experience: {
      title: 'Zkušenosti',
      subtitle: 'Kariérní timeline',
      items: [
        { year: '2023–', company: 'IExperta', role: 'Unity3D Contractor', desc: 'C#, nano rendering pipeline' },
        { year: '2021–2024', company: 'Orbitron: Space Academy', role: 'Solo Developer', desc: 'Celý herní vývoj od konceptu po Steam release' },
        { year: '2022', company: 'NotreGame', role: 'Unity3D Developer', desc: 'Optimalizace, C#' },
        { year: '2020–2021', company: 'HGames-ArtWorks', role: 'Unity3D Developer', desc: 'Android hry a addony' },
        { year: '2017', company: 'PacoGames', role: 'Unity3D Developer', desc: 'WebGL hry, C#' },
        { year: '2015', company: 'Fibix Studio', role: 'Unity3D Developer', desc: 'iOS apps pro architekty' },
        { year: '2012–2014', company: 'Bonnel Technology', role: 'µChip Developer', desc: 'Embedded C, mikrokontroléry' },
        { year: '2011', company: 'Keen Software House', role: 'Solo Unity Dev', desc: 'JavaScript, herní mechaniky' },
        { year: '2009–2011', company: 'Black Element', role: 'Level Designer', desc: 'Carrier Command: Gaea Mission' },
        { year: '2007–2008', company: 'ZPA Industry', role: 'PLC Developer', desc: 'Yokogawa průmyslové systémy' },
      ],
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Dostupný pro projekty',
      freelance: 'Freelance',
      contract: 'Kontrakt',
      parttime: '1/2 úvazek',
      tagline: 'Hledáš zkušeného Unity3D developera nebo technologického konzultanta?',
      email: 'Napsat email',
      current: 'Aktuální projekt: nová RTS hra',
    },
    footer: {
      made: 'ProCreation',
      rights: 'Všechna práva vyhrazena',
    },
    cv: {
      title: 'Curriculum Vitae',
      download: 'Tisk / PDF',
      study: 'Vzdělání',
      work: 'Pracovní zkušenosti',
      other: 'Ostatní',
      interests: 'Zájmy',
      commissions: 'Komise & členství',
    },
  },

  en: {
    nav: {
      about: 'About',
      tools: 'Tools',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      cv: 'CV',
    },
    hero: {
      greeting: 'Bc. Lukáš Zdenek',
      role: 'Game Developer & Technologist',
      tagline: 'Idea complete, decision whole,\nthat is how great work is done.',
      cta: 'View work',
      ctaCV: 'Download CV',
      available: 'Available for freelance & contracts',
    },
    about: {
      title: 'About',
      p1: 'I have been developing games and technology prototypes for over fifteen years. My core expertise is Unity3D and C#, but I am equally at home with embedded systems, process automation, and iOS/Android deployment.',
      p2: 'In the games industry I have worked with Black Element, Keen Software House, PacoGames, HGames-ArtWorks and others. My most recent shipped title is Orbitron: Space Academy on Steam.',
      p3: 'Outside of code I am drawn to archaeology, astronomy, and electronic music combined with live instruments.',
      location: 'Czech Republic',
      availability: 'Freelance / Contract',
    },
    tools: {
      title: 'Tools & Technology',
      subtitle: 'The core of my tech stack',
      items: {
        unity: { name: 'Unity3D', desc: 'PC, Android, iOS, WebGL, Steam' },
        arduino: { name: 'Arduino', desc: 'Embedded, prototypes, IoT' },
        autoit: { name: 'AutoIt', desc: 'Process automation, scripting' },
        csharp: { name: 'C#', desc: 'Primary language, OOP, patterns' },
        js: { name: 'JavaScript', desc: 'WebGL, web tooling' },
        plc: { name: 'PLC / Yokogawa', desc: 'Industrial control systems' },
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected portfolio',
      items: {
        orbitron: {
          name: 'Orbitron: Space Academy',
          desc: 'Unity3D game on Steam. Development 2021–2024.',
          tags: ['Unity3D', 'C#', 'Steam'],
        },
        carrier: {
          name: 'Carrier Command: Gaea Mission',
          desc: 'Level design, AI scripting, island topology for Black Element studio.',
          tags: ['Level Design', 'AI Scripting', 'Unity3D'],
        },
        rsplan: {
          name: 'RS Plan 095',
          desc: 'Control system prototype with visualization and real-time data.',
          tags: ['Prototyping', 'Visualization', 'Arduino'],
        },
        paco: {
          name: 'WebGL Games',
          desc: 'Series of WebGL games and one Android title for PacoGames.',
          tags: ['Unity3D', 'WebGL', 'C#'],
        },
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'Career timeline',
      items: [
        { year: '2023–', company: 'IExperta', role: 'Unity3D Contractor', desc: 'C#, nano rendering pipeline' },
        { year: '2021–2024', company: 'Orbitron: Space Academy', role: 'Solo Developer', desc: 'Full game development from concept to Steam release' },
        { year: '2022', company: 'NotreGame', role: 'Unity3D Developer', desc: 'Optimization, C#' },
        { year: '2020–2021', company: 'HGames-ArtWorks', role: 'Unity3D Developer', desc: 'Android games and addons' },
        { year: '2017', company: 'PacoGames', role: 'Unity3D Developer', desc: 'WebGL games, C#' },
        { year: '2015', company: 'Fibix Studio', role: 'Unity3D Developer', desc: 'iOS apps for architects' },
        { year: '2012–2014', company: 'Bonnel Technology', role: 'µChip Developer', desc: 'Embedded C, microcontrollers' },
        { year: '2011', company: 'Keen Software House', role: 'Solo Unity Dev', desc: 'JavaScript, game mechanics' },
        { year: '2009–2011', company: 'Black Element', role: 'Level Designer', desc: 'Carrier Command: Gaea Mission' },
        { year: '2007–2008', company: 'ZPA Industry', role: 'PLC Developer', desc: 'Yokogawa industrial systems' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Available for projects',
      freelance: 'Freelance',
      contract: 'Contract',
      parttime: '1/2 time',
      tagline: 'Looking for an experienced Unity3D developer or technology consultant?',
      email: 'Send email',
      current: 'Current project: new RTS game',
    },
    footer: {
      made: 'ProCreation',
      rights: 'All rights reserved',
    },
    cv: {
      title: 'Curriculum Vitae',
      download: 'Print / PDF',
      study: 'Education',
      work: 'Work Experience',
      other: 'Other',
      interests: 'Interests',
      commissions: 'Commissions & Memberships',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
