// English texts (default language). Keep the same keys in sv.js.
const en = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  language: {
    label: 'Change language',
  },
  theme: {
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },
  hero: {
    available: 'Open to new opportunities',
    greeting: "Hi, I'm",
    rolePrefix: "I'm a",
    roles: ['Frontend Developer', 'React Developer', 'MERN Stack Developer'],
    intro:
      'I build fast, accessible and good-looking web applications with React — from polished user interfaces to full-stack MERN apps.',
    ctaProjects: 'View my work',
    ctaCv: 'Download CV',
    photoAlt: 'Portrait of Nikola Zovko',
    scroll: 'Scroll down',
  },
  badge: {
    pass: 'Developer pass',
    role: 'Frontend Developer',
    location: 'Location',
    locationValue: 'Stockholm, SE',
    focus: 'Focus',
    focusValue: 'React · MERN',
    projects: 'Projects',
    projectsValue: '{{count}}+ built',
    available: 'Available',
    availableValue: 'Immediately',
    dragHint: 'Drag the badge',
  },
  about: {
    eyebrow: 'About me',
    title: 'Who I am',
    paragraphs: [
      "I'm Nikola Zovko, a frontend developer based in Stockholm. I graduated as a Frontend Developer from Jensen Yrkeshögskola in June 2024 and have since strengthened my skills through a successful internship at Wacoco AB — working with modern tools and technologies, collaborating in a team and delivering solutions that meet users' needs.",
      'My biggest interest is frontend development, with a special focus on building functional and efficient applications with React. I care about robust, scalable solutions that improve the user experience, and with a good understanding of design principles and usability I create products that are both technically solid and visually appealing.',
      "I'm a team player who enjoys solving problems together with others, but I'm just as comfortable working independently and taking responsibility for reaching goals. I'm now looking for a new, challenging role where I can keep growing and contribute to successful projects.",
    ],
    facts: {
      location: 'Location',
      locationValue: 'Stockholm, Sweden',
      education: 'Education',
      educationValue: 'Frontend Developer, Jensen YH',
      focus: 'Focus',
      focusValue: 'React & modern web apps',
    },
    stats: {
      projects: 'Projects built',
      technologies: 'Technologies',
      internships: 'Internships',
    },
  },
  skills: {
    eyebrow: 'Tech stack',
    title: 'Skills & tools',
    subtitle: 'The technologies I use to turn ideas into working products.',
  },
  experience: {
    eyebrow: 'Journey',
    title: 'Experience & education',
    items: {
      wacoco: {
        title: 'Frontend Developer — Internship',
        company: 'Wacoco AB',
        location: 'Stockholm, Sweden',
        period: 'Jun 2024 – Present',
        description:
          'Working on the Wacoco website with React and Node.js, building reusable React components and applying modern component patterns.',
      },
      gardeco: {
        title: 'Frontend Developer — Internship (LIA)',
        company: 'Gardeco Datasystem AB',
        location: 'Stockholm, Sweden',
        period: 'Nov 2023 – May 2024',
        description:
          'Worked on a checkout system using HTML, CSS, React, Node.js and MongoDB, including a server that handled product data, purchase history and club members.',
      },
      jensen: {
        title: 'Frontend Developer — Higher Vocational Education',
        company: 'Jensen Yrkeshögskola',
        location: 'Stockholm, Sweden',
        period: 'Aug 2022 – Jun 2024',
        description:
          'Started with HTML, CSS and JavaScript (including DOM manipulation), learned UX/UI design in Figma, and went on to build applications with React and React Native.',
      },
    },
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Featured projects',
    subtitle: 'A selection of things I have built. Click a project to see more.',
    viewDetails: 'View details',
    about: 'About the project',
    features: 'Key features',
    techStack: 'Tech stack',
    close: 'Close',
    demo: 'Live demo',
    code: 'Source code',
    prev: 'Previous project',
    next: 'Next project',
    moreOnGithub: 'More on GitHub',
    categories: {
      fullstack: 'Full-stack',
      frontend: 'Frontend',
      mobile: 'Mobile app',
    },
    items: {
      flux: {
        title: 'Flux Chat',
        description:
          'A real-time chat platform built on the MERN stack. Users create an account, find other people, add friends and chat privately — messages are delivered instantly with Socket.IO and stored in MongoDB.',
        features: [
          'Real-time private messaging with typing indicators',
          'User search, friend requests and online / last-active status',
          'Unread message counters and filtering by read status',
          'JWT authentication with cookies and role-based access',
          'Admin dashboard with statistics and user management',
        ],
      },
      expense: {
        title: 'MERN Expense Tracker',
        description:
          'A full-stack app for personal finance. Users track their income and expenses, sort transactions into categories and follow their balance with interactive charts — in the currency of their choice.',
        features: [
          'Track income and expenses with title, amount, category, date and description',
          'Dashboard with interactive charts (Chart.js) and income, expense and balance overviews',
          'Statistics for the last 7 days, month and year',
          'Support for multiple currencies',
          'JWT authentication, profile updates and account deletion',
        ],
      },
      movie: {
        title: 'MERN Movie App',
        description:
          'A full-stack app for movie lovers built on the MERN stack. It uses the TMDB API for up-to-date information about movies and TV shows, and lets users interact with the content through their own account.',
        features: [
          'Up-to-date movie and TV show data from the TMDB API',
          'Register, log in and manage your own profile',
          'Comment on, favorite and wishlist movies and shows',
          'JWT authentication and protected routes',
        ],
      },
      travel: {
        title: 'MERN Travel Diary',
        description:
          'A digital travel diary where you keep track of every city and country you have visited — with dates, personal notes and impressions, like a travel book full of memories.',
        features: [
          'Save cities and countries with visit date, notes, coordinates and flag',
          'Wikipedia link for every place',
          'Full CRUD for visits with JWT authentication',
          'Dashboard with visit statistics per day, week and month',
        ],
      },
      oasis: {
        title: 'Hotel Wild Oasis',
        description:
          'An internal hotel management app for hotel staff, built with Supabase as the backend and React Query for fetching and caching data.',
        features: [
          'Create, update and delete cabins',
          'Manage bookings, check-ins and check-outs',
          'Dashboard with statistics for recent days',
          'User accounts: sign up, update profile and log in',
        ],
      },
      chat: {
        title: 'Chat App — React Native',
        description: 'A mobile chat app built with React Native, where users can talk to each other in real time.',
        features: [
          'Real-time chat with other users',
          'Sign up, log in and log out',
          'Change username, password and profile picture',
          'Delete your account',
        ],
      },
      countdown: {
        title: 'CountDown',
        description:
          'A React app that shows exactly how long is left until New Year, the next public holiday or any date you choose — down to the second, on phone, tablet and desktop.',
        features: [
          'New Year countdown with a progress bar and fireworks at midnight',
          'Public holidays for 100+ countries from the Nager.Date API, with automatic country detection',
          'Custom countdowns saved in Local Storage',
          'Date picker for choosing year, month and day in just a few clicks',
          'Light and dark theme, keyboard navigation and reduced-motion support',
        ],
      },
      cart: {
        title: 'Product List with Cart',
        description:
          'A product list with a shopping cart where the interface updates in several places based on what the user does — and a PDF receipt is generated when the order is confirmed.',
        features: [
          'Add and remove products and change quantities',
          'Cart and order total update instantly',
          'Order confirmation step',
          'Automatically generated PDF receipt',
        ],
      },
      pizza: {
        title: 'Fast Pizza',
        description: 'A pizza ordering app built with React, using Redux for global state management.',
        features: [
          'Browse the pizza menu',
          'Add pizzas to the cart and change quantities',
          'Global state with Redux',
          'Place an order',
        ],
      },
      country: {
        title: 'Country App',
        description: 'Explore every country in the world with data pulled from the REST Countries API.',
        features: ['Data from the REST Countries API', 'Search and filter countries', 'Detail view for each country'],
      },
      space: {
        title: 'Space Tourism',
        description:
          'A responsive multi-page website built as a challenge in collaboration with Scrimba and Kevin Powell.',
        features: [
          'Multi-page website built with React',
          'Responsive for mobile, tablet and desktop',
          'Interactive tabs and navigation',
        ],
      },
      todo: {
        title: 'Task To-Do',
        description: 'A React to-do app that saves your tasks in Local Storage, so nothing is lost between visits.',
        features: ['Add, complete and delete tasks', 'Tasks saved in Local Storage', 'Simple and clean interface'],
      },
      portfolio: {
        title: 'My Portfolio (v1)',
        description: 'My first personal website, built with React.',
        features: [
          'Typewriter-animated intro',
          'Working contact form with EmailJS',
          'Downloadable CV in English and Swedish',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's work together",
    text: "Have a question, a project or a job opportunity? Send me a message and I'll get back to you as soon as I can.",
    emailLabel: 'Email',
    locationLabel: 'Location',
    form: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      firstNamePlaceholder: 'John',
      lastNamePlaceholder: 'Doe',
      emailPlaceholder: 'john@example.com',
      subjectPlaceholder: 'What is it about?',
      messagePlaceholder: 'Write your message here…',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      send: 'Send message',
      sending: 'Sending…',
    },
    toast: {
      success: 'Thanks! Your message has been sent.',
      error: 'Something went wrong. Please try again or email me directly.',
      invalid: 'Please fill in all required fields.',
    },
  },
  footer: {
    tagline: 'Frontend developer building modern, user-friendly web experiences.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}

export default en
