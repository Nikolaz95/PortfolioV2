import { useEffect } from 'react'

// Stops the page from scrolling while the component using this hook is on screen (e.g. a modal).
export default function useLockBodyScroll() {
  useEffect(() => {
    // Keep the layout from jumping when the scrollbar disappears
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [])
}
