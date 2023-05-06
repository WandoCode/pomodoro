import { Button } from '@/components/atoms/Button'
import InputNumber from '@/components/atoms/InputNumber'
import { ColorChoice } from '@/components/molecules/ColorChoice'
import { TypoChoice } from '@/components/molecules/TypoChoice'
import { Cross } from '@/components/svgs/Cross'
import { POMODORO_TYPES } from '@/contexts/GlobalStatesProvider'
import Modal from './Modal'
import { useContext, useState } from 'react'
import { ModalContext } from '@/contexts/ModalProvider'

export type Typos = 'typo-a' | 'typo-b' | 'typo-c'
export type Colors = 'color-a' | 'color-b' | 'color-c'

export const TYPOS: Typos[] = ['typo-a', 'typo-b', 'typo-c']
export const COLORS: Colors[] = ['color-a', 'color-b', 'color-c']

export const ModalPomodoro = () => {
  const { closeModal } = useContext(ModalContext)
  const [typo, setTypo] = useState(TYPOS[0])
  const [color, setColor] = useState(COLORS[0])

  const handleTypoChange = (str: Typos) => {
    setTypo(str)
  }

  const handleColorChange = (str: Colors) => {
    setColor(str)
  }

  const submitSettings = () => {
    closeModal()
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="modal-pomodoro ">
        <div className="modal-pomodoro__sup">
          <h1 className="h2 fc-secondary-800">Settings</h1>
          <button className="modal-pomodoro__close-btn" onClick={closeModal}>
            <Cross />
          </button>
        </div>
        <form className="modal-pomodoro__inf">
          <fieldset>
            <legend className="h4 fc-secondary-800">Time (minutes)</legend>
            <div className="modal-pomodoro__input-number-wrapper">
              {POMODORO_TYPES.map((type) => {
                return (
                  <InputNumber key={type} title={type} changeValue={() => {}} />
                )
              })}
            </div>
          </fieldset>
          <fieldset>
            <legend className="h4 fc-secondary-800">title</legend>
            <TypoChoice
              currentValue={typo}
              handleChangeValue={handleTypoChange}
            />
          </fieldset>
          <fieldset>
            <legend className="h4 fc-secondary-800">color</legend>
            <ColorChoice
              currentValue={color}
              handleChangeValue={handleColorChange}
            />
          </fieldset>

          <Button
            text="Apply"
            handleClick={submitSettings}
            className="modal-pomodoro__submit fc-neutral-100"
          />
        </form>
      </div>
    </Modal>
  )
}
