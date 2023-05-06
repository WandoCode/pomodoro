import Image from 'next/image'
import { useEffect, useState } from 'react'
import ArrowUp from '../svgs/ArrowUp'
import ArrowDown from '../svgs/ArrowDown'
import { removeSpaces } from '@/helpers/strings'
import { withStopPropagation } from '@/helpers/function'

interface InputNumberCompProps {
  title: string
  value: string
  increaseByOne: () => void
  decreaseByOne: () => void
  handleChange: (str: string) => void
  className?: string
  [key: string]: any
}

interface InputNumberProps {
  title: string
  initialValue?: number
  changeValue: (num: number) => void
  className?: string
  [key: string]: any
}

const InputNumberComp = ({
  title,
  value,
  increaseByOne,
  decreaseByOne,
  handleChange,
  className,
  ...props
}: InputNumberCompProps) => {
  const label = removeSpaces(title)
  return (
    <div
      className={className ? `input-number ${className}` : 'input-number'}
      {...props}
    >
      <label htmlFor={label} className="fc-neutral-700 text-small">
        {title}
      </label>

      <div className="input-number__input-wrapper">
        <input
          type="number"
          name={label}
          id={label}
          min={0}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />

        <div className="input-number__btns-wrapper">
          <button
            className="input-number__btn-arrow"
            onClick={(e) => withStopPropagation(increaseByOne, e)}
          >
            <span className="visually-hidden">Increase by 1</span>

            <ArrowUp className="input-number__arrow" />
          </button>

          <button
            className="input-number__btn-arrow"
            onClick={(e) => withStopPropagation(decreaseByOne, e)}
          >
            <span className="visually-hidden">Decrease by 1</span>

            <ArrowDown className="input-number__arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

const InputNumber = ({
  title,
  changeValue,
  initialValue = 0,
  ...props
}: InputNumberProps) => {
  const [currValue, setCurrValue] = useState(initialValue.toString())

  useEffect(() => {
    if (initialValue.toString() === currValue) return

    const numericalValue = parseInt(currValue)

    if (!numericalValue) return

    changeValue(numericalValue)
  }, [currValue, changeValue, initialValue])

  const handleIncreaseByOne = () => {
    const numericValue = parseInt(currValue, 10)

    if (isNaN(numericValue) || numericValue < 0) return

    const newValue = numericValue + 1

    setCurrValue(newValue.toString())
  }

  const handleDecreaseByOne = () => {
    const numericValue = parseInt(currValue, 10)

    if (isNaN(numericValue) || numericValue < 0) return

    const newPositiveValue = numericValue - 1 >= 0 ? numericValue - 1 : 0
    setCurrValue(newPositiveValue.toString())
  }

  const handleChange = (str: string) => {
    if (str.length === 0) setCurrValue('0')

    const numericValue = parseInt(str, 10)
    if (isNaN(numericValue) || numericValue < 0) return

    setCurrValue(numericValue.toString())
  }

  return (
    <InputNumberComp
      title={title}
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
