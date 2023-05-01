interface Props {
  className?: string
  text: string
  type: 'primary' | 'secondary'
  handleClick: () => void
}

export const Button = ({
  className,
  text,
  type,
  handleClick,
  ...props
}: Props) => {
  const btnClass = {
    primary: 'btn btn--primary',
    secondary: 'btn btn--secondary',
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
