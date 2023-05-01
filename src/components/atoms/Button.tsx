interface Props {
  className?: string
  text: string
  type: 'primary' | 'secondary'
  active: boolean
  handleClick: () => void
}

export const Button = ({
  className,
  text,
  type,
  active,
  handleClick,
  ...props
}: Props) => {
  const btnClass = {
    primary: `btn btn--primary ${active ? null : 'btn--inactive'}`,
    secondary: 'btn btn--secondary ',
  }

  return (
    <button
      className={btnClass[type] + (className ?? null)}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  )
}
