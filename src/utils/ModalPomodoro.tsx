import { Button } from '@/components/atoms/Button'
import InputNumber from '@/components/atoms/InputNumber'
import { ColorChoice } from '@/components/molecules/ColorChoice'
import { TypoChoice } from '@/components/molecules/TypoChoice'
import { Cross } from '@/components/svgs/Cross'
import { POMODORO_TYPES } from '@/contexts/GlobalStatesProvider'
import Modal from './Modal'
import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalProvider'

export const ModalPomodoro = () => {
  const { closeModal } = useContext(ModalContext)

  const handleTypoChange = (str: string) => {
    console.log(str)
  }

  const handleColorChange = (str: string) => {
    console.log(str)
  }

  const submitSettings = () => {
    closeModal()
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="modal-pomodoro">
        <div className="modal-pomodoro__sup">
          <h1 className="h2">Settings</h1>
          <button className="modal-pomodoro__close-btn" onClick={closeModal}>
            <Cross />
          </button>
        </div>
        <form className="modal-pomodoro__inf">
          <fieldset>
            <legend className="h4">Time (minutes)</legend>
            {POMODORO_TYPES.map((type) => {
              return (
                <InputNumber key={type} title={type} changeValue={() => {}} />
              )
            })}
          </fieldset>
          <fieldset>
            <legend className="h4">title</legend>
            <TypoChoice handleChangeValue={handleTypoChange} />
          </fieldset>
          <fieldset>
            <legend className="h4">color</legend>
            <ColorChoice handleChangeValue={handleColorChange} />
          </fieldset>

          <Button text="Apply" handleClick={submitSettings} />
        </form>
      </div>
    </Modal>
  )
}
