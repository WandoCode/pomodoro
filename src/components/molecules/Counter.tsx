import { useMemo } from 'react'
import { Circle } from '../svgs/Circle'

interface Props {
  timeLeft: string
  timePercentage: number
  textAction: string
  onToggleAction: () => void
  className?: string
  active?: boolean
}
const Counter = ({
  timeLeft,
  timePercentage,
  textAction,
  className,
  onToggleAction,
  active = false,
}: Props) => {
  const counterClassName = useMemo(() => {
    const base = 'counter__body'
    let finalClass = base
    if (className) finalClass = finalClass + ' ' + className
    if (active) finalClass = finalClass + ' ' + `${base}--active`

    return finalClass
  }, [active, className])

  return (
    <div className="counter">
      <button className={counterClassName} onClick={onToggleAction}>
        <Circle
          className="counter__circle"
          timePercentage={timePercentage === 0 ? 100 : timePercentage}
        />
        <span className="counter__time h1 fc-neutral-400">{timeLeft}</span>
        <span className="counter__action h3 fc-neutral-400">{textAction}</span>
      </button>
    </div>
  )
}

export default Counter
