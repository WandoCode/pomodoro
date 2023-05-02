import { Circle } from '../atoms/Circle'

const Counter = () => {
  return (
    <div className="counter">
      <Circle className="counter__circle" timePercentage={98} />
      <p>text</p>
    </div>
  )
}

export default Counter
