import { useEffect } from 'react'

// Calls `onOutside` when the user clicks/taps anywhere outside the element in `ref`.
// Only listens while `enabled` is true (e.g. while a menu is open).
export default function useClickOutside(ref, onOutside, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const handleClick = (event) => {
      if (!ref.current?.contains(event.target)) onOutside()
    }

    document.addEventListener('pointerdown', handleClick)
    return () => document.removeEventListener('pointerdown', handleClick)
  }, [ref, onOutside, enabled])
}
