import { Circle } from '../atoms/Circle'

interface Props {
  timeLeft: string
  timePercentage: number
}
const Counter = ({ timeLeft, timePercentage }: Props) => {
  const handleClick = () => {
    console.log(1)
  }
  return (
    <button className="counter" onClick={handleClick}>
      <Circle className="counter__circle" timePercentage={timePercentage} />
      <p className="counter__time h1 fc-neutral-400">{timeLeft}</p>
      <p className="counter__action h3 fc-neutral-400">pause</p>
    </button>
  )
}

export default Counter
