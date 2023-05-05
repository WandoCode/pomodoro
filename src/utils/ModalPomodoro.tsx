import { Button } from '@/components/atoms/Button'
import InputNumber from '@/components/atoms/InputNumber'
import { InputRadio } from '@/components/atoms/InputRadio'
import { ColorChoice } from '@/components/molecules/ColorChoice'
import { TypoChoice } from '@/components/molecules/TypoChoice'
import { Cross } from '@/components/svgs/Cross'
import { POMODORO_TYPES } from '@/contexts/GlobalStatesProvider'

export const ModalPomodoro = () => {
  const handleChangeValue = (str: string) => {
    console.log(str)
  }

  return (
    <div className="modal-pomodoro">
      <div className="modal-pomodoro__sup">
        <h1>Settings</h1>
        <button className="modal-pomodoro__close-btn">
          <Cross />
        </button>
      </div>
      <form className="modal-pomodoro__inf">
        <fieldset>
          <legend>Time (minutes)</legend>
          {POMODORO_TYPES.map((type) => {
            return (
              <InputNumber key={type} title={type} changeValue={() => {}} />
            )
          })}
        </fieldset>
        <fieldset>
          <legend>title</legend>
          <TypoChoice handleChangeValue={handleChangeValue} />
        </fieldset>
        <fieldset>
          <legend>color</legend>
          <ColorChoice handleChangeValue={handleChangeValue} />
        </fieldset>
      </form>
    </div>
  )
}
