import Image from 'next/image'
import { useEffect, useState } from 'react'

interface InputNumberCompProps {
  label: string
  value: number
  increaseByOne: () => void
  decreaseByOne: () => void
}

interface InputNumberProps {
  label: string
  initialValue?: number
  changeValue: (num: number) => void
}

const InputNumberComp = ({
  label,
  value,
  increaseByOne,
  decreaseByOne,
  ...props
}: InputNumberCompProps) => {
  return (
    <div className="input-number" {...props}>
      <label>{label} </label>

      <div className="input-number__input-wrapper">
        <input type="number" name="time" id="time" min={0} value={value} />

        <button className="input-number-arrow-up" onClick={increaseByOne}>
          <span className="visually-hidden">Increase by 1</span>
          <Image src="icon-arrow-up.svg" alt="" height={6} width={12} />
        </button>

        <button className="input-number-arrow-down" onClick={decreaseByOne}>
          <span className="visually-hidden">Decrease by 1</span>
          <Image src="icon-arrow-down.svg" alt="" height={6} width={12} />
        </button>
      </div>
    </div>
  )
}

const InputNumber = ({
  label,
  changeValue,
  initialValue = 0,
  ...props
}: InputNumberProps) => {
  const [currValue, setCurrValue] = useState(initialValue)

  useEffect(() => {
    changeValue(currValue)
  }, [currValue, changeValue])

  const handleIncreaseByOne = () => {
    setCurrValue(currValue + 1)
  }

  const handleDecreaseByOne = () => {
    const newPositiveValue = currValue - 1 >= 0 ? currValue - 1 : 0
    setCurrValue(newPositiveValue)
  }

  return (
    <InputNumberComp
      label={label}
      value={currValue}
      increaseByOne={handleIncreaseByOne}
      decreaseByOne={handleDecreaseByOne}
      {...props}
    />
  )
}

export default InputNumber
export { InputNumberComp }
