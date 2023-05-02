import React from 'react'

const ArrowUp = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="7"
      className={className}
    >
      <path
        fill="none"
        stroke="#1E213F"
        strokeOpacity=".25"
        strokeWidth="2"
        d="M1 6l6-4 6 4"
      />
    </svg>
  )
}

export default ArrowUp
