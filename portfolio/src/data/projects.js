import flux from '../assets/images/projects/FluxChat.webp'
import movie from '../assets/images/projects/MernMovieTvShow.webp'
import travel from '../assets/images/projects/MernTravelDairy.webp'
import oasis from '../assets/images/projects/wildOasis.webp'
import chat from '../assets/images/projects/ChatApp.webp'
import cart from '../assets/images/projects/ProductListRJ.webp'
import pizza from '../assets/images/projects/FastPizza.webp'
import country from '../assets/images/projects/CountryApp.webp'
import space from '../assets/images/projects/SpaceTourism.webp'
import todo from '../assets/images/projects/TaskTodoRJ.webp'
import portfolio from '../assets/images/projects/myPortfolio.webp'

// `key` points to the title, description and features in src/i18n/en.js and sv.js (projects.items.<key>).
// `category` is one of: fullstack, frontend, mobile.
// `tech` names get their logo from src/data/techIcons.js.
// To add a project: add an image, add an entry here, and add texts in both language files.
const projects = [
  {
    key: 'flux',
    category: 'fullstack',
    image: flux,
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Styled Components'],
    demo: 'https://flux-chat-zsz2.onrender.com/',
    source: 'https://github.com/Nikolaz95/ChatApp',
  },
  {
    key: 'movie',
    category: 'fullstack',
    image: movie,
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    demo: 'https://mern-movie-cpbh.onrender.com/',
    source: 'https://github.com/Nikolaz95/MERN-MovieData',
  },
  {
    key: 'travel',
    category: 'fullstack',
    image: travel,
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    demo: 'https://mern-travel-50ly.onrender.com/',
    source: 'https://github.com/Nikolaz95/MERN-Travel/tree/main',
  },
  {
    key: 'oasis',
    category: 'fullstack',
    image: oasis,
    tech: ['React', 'Supabase', 'React Query', 'Styled Components'],
    demo: 'https://nzhotel-wild-oasis-git-main-nikolas-projects-d50df3a6.vercel.app/login',
    source: 'https://github.com/Nikolaz95/hotel-wildOasis',
  },
  {
    key: 'chat',
    category: 'mobile',
    image: chat,
    tech: ['React Native', 'JavaScript'],
    demo: null,
    source: 'https://github.com/Nikolaz95/Chat-app',
  },
  {
    key: 'cart',
    category: 'frontend',
    image: cart,
    tech: ['React', 'Redux', 'JavaScript', 'CSS'],
    demo: 'https://react-js-cart.vercel.app/',
    source: 'https://github.com/Nikolaz95/ReactJS-Cart',
  },
  {
    key: 'pizza',
    category: 'frontend',
    image: pizza,
    tech: ['React', 'Redux', 'JavaScript'],
    demo: 'https://fast-pizzarj.netlify.app/',
    source: 'https://github.com/Nikolaz95/fast-pizza',
  },
  {
    key: 'country',
    category: 'frontend',
    image: country,
    tech: ['React', 'JavaScript', 'REST API'],
    demo: 'https://react-js-country-app-git-main-nikolas-projects-d50df3a6.vercel.app/',
    source: 'https://github.com/Nikolaz95/ReactJS-CountryApp/tree/main',
  },
  {
    key: 'space',
    category: 'frontend',
    image: space,
    tech: ['React', 'JavaScript', 'CSS'],
    demo: 'https://space-tourism-ashy-eta.vercel.app/',
    source: 'https://github.com/Nikolaz95/Space-Tourism/tree/main',
  },
  {
    key: 'todo',
    category: 'frontend',
    image: todo,
    tech: ['React', 'JavaScript', 'CSS'],
    demo: 'https://task-to-do-nikolazovko.netlify.app/',
    source: 'https://github.com/Nikolaz95/todoRJ',
  },
  {
    key: 'portfolio',
    category: 'frontend',
    image: portfolio,
    tech: ['React', 'JavaScript', 'CSS', 'EmailJS'],
    demo: 'https://nikolazovko-portfolio.netlify.app/',
    source: 'https://github.com/Nikolaz95/my-portfolio',
  },
]

export default projects
