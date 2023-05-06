import React from 'react'
import { InputRadio } from '../atoms/InputRadio'
import { TypoChoiceItem } from '../atoms/TypoChoiceItem'
import { TYPOS, Typos } from '@/utils/ModalPomodoro'

interface Props {
  currentValue: Typos
  handleChangeValue: (value: Typos) => void
}

export const TypoChoice = ({ currentValue, handleChangeValue }: Props) => {
  const handleChange = (value: string) => {
    handleChangeValue(value as Typos)
  }

  return (
    <div className="typo-choice">
      {TYPOS.map((typo) => (
        <InputRadio
          key={typo}
          label={typo}
          value={typo}
          name="typos"
          handleChangeValue={handleChange}
          checked={currentValue === typo}
        >
          <TypoChoiceItem className={`font-${typo.at(-1)}`} />
        </InputRadio>
      ))}
    </div>
  )
}
