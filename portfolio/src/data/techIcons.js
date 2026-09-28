import { SiChartdotjs, SiJsonwebtokens, SiRedux, SiSocketdotio } from 'react-icons/si'
import { TbApi, TbMail } from 'react-icons/tb'

import skills from './skills'

// Logo + color for every technology name used in projects.js.
// Everything from skills.js is included automatically; extra ones are added below.
const techIcons = {
  ...Object.fromEntries(skills.map(({ name, icon, color }) => [name, { icon, color }])),
  'Redux Toolkit': { icon: SiRedux, color: '#764abc' },
  'Socket.IO': { icon: SiSocketdotio, color: null },
  JWT: { icon: SiJsonwebtokens, color: '#d63aff' },
  'Chart.js': { icon: SiChartdotjs, color: '#ff6384' },
  'REST API': { icon: TbApi, color: null },
  EmailJS: { icon: TbMail, color: '#ff8c42' },
}

export default techIcons
