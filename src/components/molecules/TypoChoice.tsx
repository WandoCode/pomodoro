import React from 'react'
import { InputRadio } from '../atoms/InputRadio'
import { TypoChoiceItem } from '../atoms/TypoChoiceItem'
import { Typos } from '@/contexts/GlobalStatesProvider'

interface Props {
  currentValue: Typos
  choices: Typos[]
  handleChangeValue: (value: Typos) => void
}

export const TypoChoice = ({
  currentValue,
  choices,
  handleChangeValue,
}: Props) => {
  const handleChange = (value: string) => {
    handleChangeValue(value as Typos)
  }

  return (
    <div className="typo-choice">
      {choices.map((choice) => (
        <InputRadio
          key={choice}
          label={choice}
          value={choice}
          name="typos"
          handleChangeValue={handleChange}
          checked={currentValue === choice}
        >
          <TypoChoiceItem className={`font-${choice.at(-1)}`} />
        </InputRadio>
      ))}
    </div>
  )
}
