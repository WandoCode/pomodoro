import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  label: string
  value: string
  name: string
  handleChangeValue: (value: string) => void
}
export const InputRadio = ({
  label,
  value,
  name,
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
        onChange={() => handleChangeValue(value)}
      />
      <label htmlFor={label}>{children}</label>
    </div>
  )
}
