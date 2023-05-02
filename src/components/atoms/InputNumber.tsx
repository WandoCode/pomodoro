import Image from 'next/image'
import { useEffect, useState } from 'react'

interface InputNumberCompProps {
  label: string
  value: string
  increaseByOne: () => void
  decreaseByOne: () => void
  handleChange: (str: string) => void
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
  handleChange,
  ...props
}: InputNumberCompProps) => {
  return (
    <div className="input-number" {...props}>
      <label>{label} </label>

      <div className="input-number__input-wrapper">
        <input
          type="number"
          name="time"
          id="time"
          min={0}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />

        <div className="input-number__btns-wrapper">
          <button className="input-number__btn-arrow" onClick={increaseByOne}>
            <span className="visually-hidden">Increase by 1</span>
            <Image
              src="icon-arrow-up.svg"
              alt=""
              height={7}
              width={14}
              className="input-number__arrow"
            />
          </button>

          <button className="input-number__btn-arrow" onClick={decreaseByOne}>
            <span className="visually-hidden">Decrease by 1</span>
            <Image
              src="icon-arrow-down.svg"
              alt=""
              height={7}
              width={14}
              className="input-number__arrow"
            />
          </button>
        </div>
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
  const [currValue, setCurrValue] = useState(initialValue.toString())

  useEffect(() => {
    const numericalValue = parseInt(currValue)

    if (!numericalValue) return
    changeValue(numericalValue)
  }, [currValue, changeValue])

  const handleIncreaseByOne = () => {
    const numericValue = parseInt(currValue, 10)

    if (!numericValue || numericValue < 0) return

    const newValue = numericValue + 1
    setCurrValue(newValue.toString())
  }

  const handleDecreaseByOne = () => {
    const numericValue = parseInt(currValue, 10)

    if (!numericValue || numericValue < 0) return

    const newPositiveValue = numericValue - 1 >= 0 ? numericValue - 1 : 0
    setCurrValue(newPositiveValue.toString())
  }

  const handleChange = (str: string) => {
    if (str.length === 0) setCurrValue('0')

    const numericValue = parseInt(str, 10)
    if (!numericValue || numericValue < 0) return

    setCurrValue(numericValue.toString())
  }

  return (
    <InputNumberComp
      label={label}
      value={currValue}
      increaseByOne={handleIncreaseByOne}
      decreaseByOne={handleDecreaseByOne}
      handleChange={handleChange}
      {...props}
    />
  )
}

export default InputNumber
export { InputNumberComp }
