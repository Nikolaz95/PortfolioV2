import { useEffect, useState } from 'react'

// Returns the id of the section currently in the middle of the screen,
// so the header can highlight the matching link.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const idsKey = ids.join(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    idsKey.split(',').forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [idsKey])

  return active
}
