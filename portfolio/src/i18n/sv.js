// Svenska texter. Samma nycklar som i en.js.
const sv = {
  nav: {
    home: 'Hem',
    about: 'Om mig',
    skills: 'Kompetenser',
    experience: 'Erfarenhet',
    projects: 'Projekt',
    contact: 'Kontakt',
    openMenu: 'Öppna menyn',
    closeMenu: 'Stäng menyn',
  },
  language: {
    label: 'Byt språk',
  },
  theme: {
    toDark: 'Byt till mörkt läge',
    toLight: 'Byt till ljust läge',
  },
  hero: {
    available: 'Öppen för nya möjligheter',
    greeting: 'Hej, jag heter',
    rolePrefix: 'Jag är',
    roles: ['Frontendutvecklare', 'React-utvecklare', 'MERN Stack-utvecklare'],
    intro:
      'Jag bygger snabba, tillgängliga och snygga webbapplikationer med React — från genomarbetade användargränssnitt till fullstack-appar i MERN.',
    ctaProjects: 'Se mina projekt',
    ctaCv: 'Ladda ner CV',
    photoAlt: 'Porträtt av Nikola Zovko',
    scroll: 'Scrolla ner',
  },
  about: {
    eyebrow: 'Om mig',
    title: 'Vem jag är',
    paragraphs: [
      'Jag heter Nikola Zovko och är frontendutvecklare i Stockholm. Jag tog examen som Frontendutvecklare från Jensen Yrkeshögskola i juni 2024 och har sedan dess byggt vidare på mina kunskaper genom en framgångsrik praktikperiod på Wacoco AB — där jag har arbetat med moderna tekniker och verktyg, samarbetat i team och levererat lösningar som möter användarnas behov.',
      'Mitt största intresse ligger inom frontendutveckling, med särskilt fokus på att bygga funktionella och effektiva applikationer med React. Jag brinner för robusta och skalbara lösningar som förbättrar användarupplevelsen, och med god förståelse för designprinciper och användarvänlighet skapar jag produkter som är både tekniskt stabila och visuellt tilltalande.',
      'Jag är en lagspelare som trivs med att lösa problem tillsammans med andra, men jag är också van att arbeta självständigt och tar gärna ansvar för att nå uppsatta mål. Nu söker jag en ny, utmanande roll där jag kan fortsätta växa och bidra till framgångsrika projekt.',
    ],
    facts: {
      location: 'Plats',
      locationValue: 'Stockholm, Sverige',
      education: 'Utbildning',
      educationValue: 'Frontendutvecklare, Jensen YH',
      focus: 'Fokus',
      focusValue: 'React & moderna webbappar',
    },
    stats: {
      projects: 'Byggda projekt',
      technologies: 'Tekniker',
      internships: 'Praktikplatser',
    },
  },
  skills: {
    eyebrow: 'Teknikstack',
    title: 'Kompetenser & verktyg',
    subtitle: 'Teknikerna jag använder för att förvandla idéer till fungerande produkter.',
  },
  experience: {
    eyebrow: 'Resa',
    title: 'Erfarenhet & utbildning',
    items: {
      wacoco: {
        title: 'Frontendutvecklare — Praktik',
        company: 'Wacoco AB',
        location: 'Stockholm, Sverige',
        period: 'Jun 2024 – Nu',
        description:
          'Arbetar med Wacocos webbplats i React och Node.js, bygger återanvändbara React-komponenter och tillämpar moderna komponentmönster.',
      },
      gardeco: {
        title: 'Frontendutvecklare — LIA-praktik',
        company: 'Gardeco Datasystem AB',
        location: 'Stockholm, Sverige',
        period: 'Nov 2023 – Maj 2024',
        description:
          'Arbetade med ett kassasystem i HTML, CSS, React, Node.js och MongoDB, samt med en server som innehöll produktdata, köphistorik och klubbmedlemmar.',
      },
      jensen: {
        title: 'Frontendutvecklare — Yrkeshögskoleutbildning',
        company: 'Jensen Yrkeshögskola',
        location: 'Stockholm, Sverige',
        period: 'Aug 2022 – Jun 2024',
        description:
          'Började med HTML, CSS och JavaScript (inklusive DOM-manipulation), lärde mig UX/UI-design i Figma och gick sedan vidare till att bygga applikationer med React och React Native.',
      },
    },
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Utvalda projekt',
    subtitle: 'Ett urval av det jag har byggt. Klicka på ett projekt för att se mer.',
    viewDetails: 'Visa detaljer',
    about: 'Om projektet',
    features: 'Huvudfunktioner',
    techStack: 'Teknikstack',
    close: 'Stäng',
    demo: 'Live-demo',
    code: 'Källkod',
    prev: 'Föregående projekt',
    next: 'Nästa projekt',
    moreOnGithub: 'Mer på GitHub',
    categories: {
      fullstack: 'Fullstack',
      frontend: 'Frontend',
      mobile: 'Mobilapp',
    },
    items: {
      flux: {
        title: 'Flux Chat',
        description:
          'En chattplattform i realtid byggd med MERN-stacken. Användare skapar ett konto, hittar andra personer, lägger till vänner och chattar privat — meddelanden levereras direkt med Socket.IO och sparas i MongoDB.',
        features: [
          'Privata meddelanden i realtid med skrivindikator',
          'Användarsök, vänförfrågningar och online-/senast aktiv-status',
          'Räknare för olästa meddelanden och filtrering på lässtatus',
          'JWT-autentisering med cookies och rollbaserad åtkomst',
          'Admin-dashboard med statistik och användarhantering',
        ],
      },
      expense: {
        title: 'MERN Utgiftskoll',
        description:
          'En fullstack-app för privatekonomi. Användare håller koll på inkomster och utgifter, sorterar transaktioner i kategorier och följer sitt saldo med interaktiva diagram — i valfri valuta.',
        features: [
          'Registrera inkomster och utgifter med titel, belopp, kategori, datum och beskrivning',
          'Dashboard med interaktiva diagram (Chart.js) och översikt över inkomster, utgifter och saldo',
          'Statistik för de senaste 7 dagarna, månaden och året',
          'Stöd för flera valutor',
          'JWT-autentisering, profiluppdatering och radering av konto',
        ],
      },
      movie: {
        title: 'MERN Filmapp',
        description:
          'En fullstack-app för filmälskare byggd med MERN-stacken. Den använder TMDB API för aktuell information om filmer och tv-serier, och låter användare interagera med innehållet via sitt eget konto.',
        features: [
          'Aktuell data om filmer och tv-serier från TMDB API',
          'Registrera dig, logga in och hantera din profil',
          'Kommentera, favoritmarkera och önskelista filmer och serier',
          'JWT-autentisering och skyddade routes',
        ],
      },
      travel: {
        title: 'MERN Resedagbok',
        description:
          'En digital resedagbok där du håller koll på alla städer och länder du har besökt — med datum, egna anteckningar och intryck, som en resebok full av minnen.',
        features: [
          'Spara städer och länder med besöksdatum, anteckningar, koordinater och flagga',
          'Wikipedia-länk för varje plats',
          'Full CRUD för besök med JWT-autentisering',
          'Dashboard med besöksstatistik per dag, vecka och månad',
        ],
      },
      oasis: {
        title: 'Hotel Wild Oasis',
        description:
          'En intern app för hotellpersonal, byggd med Supabase som backend och React Query för hämtning och cachning av data.',
        features: [
          'Skapa, uppdatera och ta bort stugor',
          'Hantera bokningar, incheckningar och utcheckningar',
          'Dashboard med statistik för de senaste dagarna',
          'Användarkonton: registrering, profiluppdatering och inloggning',
        ],
      },
      chat: {
        title: 'Chattapp — React Native',
        description: 'En mobil chattapp byggd med React Native, där användare kan prata med varandra i realtid.',
        features: [
          'Chatt i realtid med andra användare',
          'Registrering, inloggning och utloggning',
          'Byt användarnamn, lösenord och profilbild',
          'Radera ditt konto',
        ],
      },
      cart: {
        title: 'Produktlista med varukorg',
        description:
          'En produktlista med varukorg där gränssnittet uppdateras på flera ställen utifrån användarens val — och ett PDF-kvitto skapas när ordern bekräftas.',
        features: [
          'Lägg till och ta bort produkter och ändra antal',
          'Varukorg och totalsumma uppdateras direkt',
          'Steg för orderbekräftelse',
          'Automatiskt genererat PDF-kvitto',
        ],
      },
      pizza: {
        title: 'Fast Pizza',
        description: 'En app för pizzabeställning byggd med React, med Redux för global state-hantering.',
        features: [
          'Bläddra i pizzamenyn',
          'Lägg pizzor i varukorgen och ändra antal',
          'Global state med Redux',
          'Lägg en beställning',
        ],
      },
      country: {
        title: 'Landsapp',
        description: 'Utforska alla världens länder med data från REST Countries API.',
        features: ['Data från REST Countries API', 'Sök och filtrera länder', 'Detaljvy för varje land'],
      },
      space: {
        title: 'Space Tourism',
        description:
          'En responsiv webbplats med flera sidor, byggd som en utmaning i samarbete med Scrimba och Kevin Powell.',
        features: [
          'Webbplats med flera sidor byggd i React',
          'Responsiv för mobil, surfplatta och dator',
          'Interaktiva flikar och navigering',
        ],
      },
      todo: {
        title: 'Task To-Do',
        description: 'En att göra-app i React som sparar dina uppgifter i Local Storage, så att inget försvinner.',
        features: ['Lägg till, bocka av och ta bort uppgifter', 'Uppgifter sparas i Local Storage', 'Enkelt och rent gränssnitt'],
      },
      portfolio: {
        title: 'Min portfolio (v1)',
        description: 'Min första personliga webbplats, byggd med React.',
        features: [
          'Intro med skrivmaskinsanimation',
          'Fungerande kontaktformulär med EmailJS',
          'Nedladdningsbart CV på engelska och svenska',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Låt oss arbeta tillsammans',
    text: 'Har du en fråga, ett projekt eller ett jobberbjudande? Skicka ett meddelande så återkommer jag så snart jag kan.',
    emailLabel: 'E-post',
    locationLabel: 'Plats',
    form: {
      firstName: 'Förnamn',
      lastName: 'Efternamn',
      email: 'E-post',
      subject: 'Ämne',
      message: 'Meddelande',
      firstNamePlaceholder: 'Anna',
      lastNamePlaceholder: 'Andersson',
      emailPlaceholder: 'anna@exempel.se',
      subjectPlaceholder: 'Vad gäller det?',
      messagePlaceholder: 'Skriv ditt meddelande här…',
      required: 'Fältet är obligatoriskt',
      invalidEmail: 'Ange en giltig e-postadress',
      send: 'Skicka meddelande',
      sending: 'Skickar…',
    },
    toast: {
      success: 'Tack! Ditt meddelande har skickats.',
      error: 'Något gick fel. Försök igen eller mejla mig direkt.',
      invalid: 'Fyll i alla obligatoriska fält.',
    },
  },
  footer: {
    tagline: 'Frontendutvecklare som bygger moderna och användarvänliga webbupplevelser.',
    rights: 'Alla rättigheter förbehållna.',
    backToTop: 'Till toppen',
  },
}

export default sv
