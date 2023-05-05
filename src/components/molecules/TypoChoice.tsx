import React from 'react'
import { InputRadio } from '../atoms/InputRadio'
import { TypoChoiceItem } from '../atoms/TypoChoiceItem'

interface Props {
  handleChangeValue: (value: string) => void
}

export const TypoChoice = ({ handleChangeValue }: Props) => {
  return (
    <div className="typo-choice">
      <InputRadio
        label="test"
        value="val1"
        name="tester"
        handleChangeValue={handleChangeValue}
      >
        <TypoChoiceItem className="font-a" />
      </InputRadio>
      <InputRadio
        label="test2"
        value="val2"
        name="tester"
        handleChangeValue={handleChangeValue}
      >
        <TypoChoiceItem className="font-b" />
      </InputRadio>
      <InputRadio
        label="test3"
        value="val3"
        name="tester"
        handleChangeValue={handleChangeValue}
      >
        <TypoChoiceItem className="font-c" />
      </InputRadio>
    </div>
  )
}
