import { useEffect, useState } from 'react'

// Returns true once the page is scrolled down more than `offset` pixels.
export default function useScrolled(offset = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [offset])

  return scrolled
}
