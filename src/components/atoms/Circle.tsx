interface Props {
  timePercentage: number
  className?: string
}

export const Circle = ({ className, timePercentage }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -5 310 310"
    >
      <path
        d="M 0 150 A 100 100 90 0 0 300 150 A 100 100 90 0 0 0 150 Z"
        stroke="#FFF"
        strokeWidth="10"
        strokeDasharray={`${(timePercentage * 305) / 100}% 305%`}
        fill="none"
      />
    </svg>
  )
}
