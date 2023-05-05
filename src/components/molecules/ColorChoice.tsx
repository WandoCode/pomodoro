import React from 'react'
import { InputRadio } from '../atoms/InputRadio'
import { ColorChoiceItem } from '../atoms/ColorChoiceItem'
import { COLORS, Colors } from '@/utils/ModalPomodoro'

interface Props {
  currentValue: Colors
  handleChangeValue: (value: Colors) => void
}

export const ColorChoice = ({ currentValue, handleChangeValue }: Props) => {
  const handleChange = (value: string) => {
    handleChangeValue(value as Colors)
  }

  return (
    <div className="color-choice">
      {COLORS.map((color: Colors, i: number) => (
        <InputRadio
          key={color}
          label={color}
          value={color}
          name="colors"
          handleChangeValue={handleChange}
          checked={currentValue === color}
        >
          <ColorChoiceItem className={color} />
        </InputRadio>
      ))}
    </div>
  )
}
