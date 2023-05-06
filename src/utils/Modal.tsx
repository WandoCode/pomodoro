import { PropsWithChildren, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface Props extends PropsWithChildren {
  closeModal: () => void
}

function Modal({ closeModal, children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null)

  const modalRoot = document.getElementById('modal-root')

  useEffect(() => {
    modalRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (
        e.key === 'Tab' &&
        !modalRef.current?.contains(document.activeElement)
      )
        modalRef.current?.focus()
    }

    const handleCloseModal = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (
        target.classList.contains('modal') ||
        target.classList.contains('modal__content')
      )
        closeModal()
    }

    document.body.addEventListener('mousedown', handleCloseModal)
    document.body.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.removeEventListener('mousedown', handleCloseModal)
      document.body.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeModal])

  if (!modalRoot) return null
  else
    return createPortal(
      <div className="modal" ref={modalRef} tabIndex={0}>
        <div className="modal__content">{children}</div>
      </div>,
      modalRoot
    )
}

export default Modal
