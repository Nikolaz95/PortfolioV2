import { useEffect, useState } from 'react'

// Types each word letter by letter, pauses, deletes it, then moves on to the next word.
// Give the component using it a `key` (e.g. the language) to restart it with new words.
export default function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length] ?? ''

    let delay = isDeleting ? deleteSpeed : typeSpeed
    if (!isDeleting && text === current) delay = pause

    const timer = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(current.slice(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}
