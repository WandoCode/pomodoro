import { Button } from '../atoms/Button'

interface Props {
  choices: string[]
  value: string
  changeValue: (newValue: string) => void
  className?: string
}

const PomodoroTypesChoice = ({
  choices,
  value,
  changeValue,
  className,
}: Props) => {
  return (
    <ul
      className={className ? `pomodoro-choice ${className}` : 'pomodoro-choice'}
    >
      {choices.map((choice) => (
        <li key={choice}>
          <Button
            text={choice}
            type="primary"
            active={choice === value}
            handleClick={() => {
              changeValue(choice)
            }}
            className="pomodoro-choice__choice text-lg"
          />
        </li>
      ))}
    </ul>
  )
}

export default PomodoroTypesChoice
