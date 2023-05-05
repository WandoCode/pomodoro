import { Check } from '../svgs/Check'

export const ColorChoiceItem = ({ className }: { className?: string }) => {
  return (
    <span
      className={
        className ? `color-choice-item ${className}` : 'color-choice-item'
      }
    >
      <Check />
    </span>
  )
}
