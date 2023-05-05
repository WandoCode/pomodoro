import React from 'react'
import { InputRadio } from '../atoms/InputRadio'
import { TypoChoiceItem } from '../atoms/TypoChoiceItem'
import { Typos } from '@/utils/ModalPomodoro'

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
      <InputRadio
        label="typo-a"
        value="typo-a"
        name="tester"
        handleChangeValue={handleChange}
        checked={currentValue === 'typo-a'}
      >
        <TypoChoiceItem className="font-a" />
      </InputRadio>
      <InputRadio
        label="typo-b"
        value="typo-b"
        name="tester"
        handleChangeValue={handleChange}
        checked={currentValue === 'typo-b'}
      >
        <TypoChoiceItem className="font-b" />
      </InputRadio>
      <InputRadio
        label="test3"
        value="typo-c"
        name="typo-c"
        handleChangeValue={handleChange}
        checked={currentValue === 'typo-c'}
      >
        <TypoChoiceItem className="font-c" />
      </InputRadio>
    </div>
  )
}
