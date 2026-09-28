import { useEffect } from 'react'

// Calls `onEscape` when the Escape key is pressed. Only listens while `enabled` is true.
export default function useEscapeKey(onEscape, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const handleKey = (event) => {
      if (event.key === 'Escape') onEscape()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onEscape, enabled])
}
