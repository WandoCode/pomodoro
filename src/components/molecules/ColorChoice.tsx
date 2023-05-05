import React from 'react'
import { InputRadio } from '../atoms/InputRadio'
import { ColorChoiceItem } from '../atoms/ColorChoiceItem'

interface Props {
  handleChangeValue: (value: string) => void
}

export const ColorChoice = ({ handleChangeValue }: Props) => {
  return (
    <div className="color-choice">
      <InputRadio
        label="testcol"
        value="col1"
        name="tester"
        handleChangeValue={handleChangeValue}
      >
        <ColorChoiceItem className="color-a" />
      </InputRadio>
      <InputRadio
        label="testcol2"
        value="col2"
        name="tester"
        handleChangeValue={handleChangeValue}
      >
        <ColorChoiceItem className="color-b" />
      </InputRadio>
      <InputRadio
        label="testcol3"
        value="col3"
        name="tester"
        handleChangeValue={handleChangeValue}
      >
        <ColorChoiceItem className="color-c" />
      </InputRadio>
    </div>
  )
}
