import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  label: string
  value: string
  name: string
  checked: boolean
  handleChangeValue: (value: string) => void
}

export const InputRadio = ({
  label,
  value,
  name,
  checked,
  handleChangeValue,
  children,
}: Props) => {
  return (
    <div className="input-radio">
      <input
        type="radio"
        id={label}
        name={name}
        value={value}
        className="visually-hidden"
        checked={checked}
        onChange={() => handleChangeValue(value)}
      />
      <label htmlFor={label}>{children}</label>
    </div>
  )
}
