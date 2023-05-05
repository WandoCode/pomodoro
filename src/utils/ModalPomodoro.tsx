import { Button } from '@/components/atoms/Button'
import InputNumber from '@/components/atoms/InputNumber'
import { InputRadio } from '@/components/atoms/InputRadio'
import { TypoChoice } from '@/components/atoms/TypoChoice'
import { Cross } from '@/components/svgs/Cross'
import { POMODORO_TYPES } from '@/contexts/GlobalStatesProvider'

export const ModalPomodoro = () => {
  const handleChangeValue = (str: string) => {}

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
          <InputRadio
            label="test"
            value="val1"
            name="tester"
            handleChangeValue={() => handleChangeValue('test1')}
          >
            <TypoChoice className="font-a" />
          </InputRadio>
          <InputRadio
            label="test2"
            value="val2"
            name="tester"
            handleChangeValue={() => handleChangeValue('test2')}
          >
            <TypoChoice className="font-b" />
          </InputRadio>
          <InputRadio
            label="test3"
            value="val3"
            name="tester"
            handleChangeValue={() => handleChangeValue('test3')}
          >
            <TypoChoice className="font-c" />
          </InputRadio>
        </fieldset>
      </form>
    </div>
  )
}
