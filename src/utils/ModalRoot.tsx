import { ModalContext } from '@/contexts/ModalProvider'
import { useContext } from 'react'
import { ModalPomodoro } from './ModalPomodoro'

function ModalRoot() {
  const { modalIsOpen } = useContext(ModalContext)

  return <div id="modal-root">{modalIsOpen ? <ModalPomodoro /> : null}</div>
}

export default ModalRoot
