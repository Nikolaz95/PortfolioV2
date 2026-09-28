import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiVitest,
} from 'react-icons/si'

// `color` is the brand color used for the icon and the glow on hover.
// `null` = the logo has no color of its own, so it follows the text color (black in light mode, white in dark).
const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss, color: '#2965f1' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'React Native', icon: SiReact, color: '#8b5cf6' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' },
  { name: 'React Query', icon: SiReactquery, color: '#ff4154' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'Express', icon: SiExpress, color: null },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'Styled Components', icon: SiStyledcomponents, color: '#db7093' },
  { name: 'Material UI', icon: SiMui, color: '#007fff' },
  { name: 'Storybook', icon: SiStorybook, color: '#ff4785' },
  { name: 'Vitest', icon: SiVitest, color: '#6e9f18' },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', icon: SiGithub, color: null },
]

export default skills
