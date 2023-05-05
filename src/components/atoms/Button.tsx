interface Props {
  className?: string
  text: string
  active: boolean
  handleClick: () => void
}

export const Button = ({
  className,
  text,
  active = true,
  handleClick,
  ...props
}: Props) => {
  return (
    <button
      className={
        `btn btn--primary ${active ? null : 'btn--primary-inactive'} ` +
        (className ?? null)
      }
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  )
}
