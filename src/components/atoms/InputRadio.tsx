import { KeyboardEvent, PropsWithChildren } from 'react'

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
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') handleChangeValue(value)
  }

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
        tabIndex={-1}
      />
      <label htmlFor={label} tabIndex={0} onKeyDown={handleKeyDown}>
        {children}
      </label>
    </div>
  )
}
