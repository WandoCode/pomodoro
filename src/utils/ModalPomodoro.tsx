import InputNumber from '@/components/atoms/InputNumber'
import { Cross } from '@/components/svgs/Cross'
import { POMODORO_TYPES } from '@/contexts/GlobalStatesProvider'

export const ModalPomodoro = () => {
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
        </fieldset>
      </form>
    </div>
  )
}
