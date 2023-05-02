import { Circle } from '../svgs/Circle'

interface Props {
  timeLeft: string
  timePercentage: number
  textAction: string
  onToggleAction: () => void
}
const Counter = ({
  timeLeft,
  timePercentage,
  textAction,
  onToggleAction,
}: Props) => {
  return (
    <button className="counter" onClick={onToggleAction}>
      <Circle className="counter__circle" timePercentage={timePercentage} />
      <p className="counter__time h1 fc-neutral-400">{timeLeft}</p>
      <p className="counter__action h3 fc-neutral-400">{textAction}</p>
    </button>
  )
}

export default Counter
