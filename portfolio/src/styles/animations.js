// Reusable animation presets for Motion.
// Use `stagger` on a parent and `fadeUp` / `fadeLeft` / `popIn` on its children:
//   <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
//     <motion.p variants={fadeUp}>...</motion.p>
//   </motion.div>

export const EASE_OUT = [0.22, 1, 0.36, 1]

// Parent: animates its children one after another
export const stagger = (each = 0.1, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
})

// Child: fades in while sliding up
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

// Child: fades in while sliding in from the right
export const fadeLeft = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

// Child: fades in while growing a little
export const popIn = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
}
