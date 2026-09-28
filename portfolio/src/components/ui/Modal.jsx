import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'motion/react'
import { HiX } from 'react-icons/hi'

import useEscapeKey from '../../hooks/useEscapeKey'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { Backdrop, Body, CloseButton, Window } from './Modal.styles'

/**
 * Reusable animated popup window.
 *
 *   <Modal open={isOpen} onClose={close} labelledBy="my-title-id" closeLabel="Close">
 *     <h3 id="my-title-id">Hello</h3>
 *   </Modal>
 *
 * Closes with the X button, the Escape key, or a click outside the window.
 * It's rendered straight into <body> (a "portal") so it always sits on top of everything,
 * and AnimatePresence lets the closing animation finish before it disappears.
 */
export default function Modal({ open, ...props }) {
  return createPortal(<AnimatePresence>{open && <ModalWindow {...props} />}</AnimatePresence>, document.body)
}

function ModalWindow({ onClose, labelledBy, closeLabel = 'Close', maxWidth = 1080, children }) {
  const closeRef = useRef(null)
  useEscapeKey(onClose)
  useLockBodyScroll()

  // Move keyboard focus into the modal, and give it back when the modal closes
  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    return () => previouslyFocused?.focus?.()
  }, [])

  const closeIfOutside = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <Backdrop
      onClick={closeIfOutside}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Window
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        $maxWidth={maxWidth}
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        <CloseButton ref={closeRef} icon={HiX} label={closeLabel} shape="circle" size={42} onClick={onClose} />
        <Body>{children}</Body>
      </Window>
    </Backdrop>
  )
}
