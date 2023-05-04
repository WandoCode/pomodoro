import { PropsWithChildren, useState, createContext } from 'react'

export interface ModalType {
  modalIsOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const initialModalState: ModalType = {
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {},
}

export const ModalContext = createContext(initialModalState)

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalIsOpen, setModalIsOpen] = useState(initialModalState.modalIsOpen)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
