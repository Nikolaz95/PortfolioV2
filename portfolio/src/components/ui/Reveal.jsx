import { motion } from 'motion/react'

import { EASE_OUT } from '../../styles/animations'

/**
 * Fades + slides its content in the first time it scrolls into view.
 *   <Reveal>...</Reveal>
 *   <Reveal as="p" delay={0.2}>Some text</Reveal>
 */
export default function Reveal({ children, delay = 0, y = 32, as = 'div', ...rest }) {
  const Component = motion[as]

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </Component>
  )
}
