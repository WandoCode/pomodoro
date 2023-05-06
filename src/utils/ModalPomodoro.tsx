import { Button } from '@/components/atoms/Button'
import InputNumber from '@/components/atoms/InputNumber'
import { ColorChoice } from '@/components/molecules/ColorChoice'
import { TypoChoice } from '@/components/molecules/TypoChoice'
import { Cross } from '@/components/svgs/Cross'
import Modal from './Modal'
import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalProvider'
import { Colors, GlobalContext, Typos } from '../contexts/GlobalStatesProvider'

export const ModalPomodoro = () => {
  const { closeModal } = useContext(ModalContext)
  const {
    POMODORO_TYPES,
    TYPOS,
    COLORS,
    currentColor,
    currentTypo,
    pomodoroDefaultTimes,
    setPomodoroDefaultTimes,
    changeColor,
    changeTypo,
  } = useContext(GlobalContext)
  const handleTypoChange = (str: Typos) => {
    changeTypo(str)
  }

  const handleColorChange = (str: Colors) => {
    changeColor(str)
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
                  <InputNumber
                    key={type}
                    title={type}
                    changeValue={() => {}}
                    initialValue={pomodoroDefaultTimes[type]}
                  />
                )
              })}
            </div>
          </fieldset>
          <fieldset>
            <legend className="h4 fc-secondary-800">title</legend>
            <TypoChoice
              currentValue={currentTypo}
              choices={TYPOS}
              handleChangeValue={handleTypoChange}
            />
          </fieldset>
          <fieldset>
            <legend className="h4 fc-secondary-800">color</legend>
            <ColorChoice
              currentValue={currentColor}
              choices={COLORS}
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
