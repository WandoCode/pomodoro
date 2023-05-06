import React from 'react'
import { InputRadio } from '../atoms/InputRadio'
import { ColorChoiceItem } from '../atoms/ColorChoiceItem'
import { Colors } from '@/contexts/GlobalStatesProvider'

interface Props {
  currentValue: Colors
  choices: Colors[]
  handleChangeValue: (value: Colors) => void
}

export const ColorChoice = ({
  currentValue,
  choices,
  handleChangeValue,
}: Props) => {
  const handleChange = (value: string) => {
    handleChangeValue(value as Colors)
  }

  return (
    <div className="color-choice">
      {choices.map((choice) => (
        <InputRadio
          key={choice}
          label={choice}
          value={choice}
          name="colors"
          handleChangeValue={handleChange}
          checked={currentValue === choice}
        >
          <ColorChoiceItem className={choice} />
        </InputRadio>
      ))}
    </div>
  )
}
