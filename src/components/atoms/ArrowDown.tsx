import React from 'react'

const ArrowDown = ({ className }: { className: string }) => {
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
        stroke-opacity=".25"
        stroke-width="2"
        d="M1 1l6 4 6-4"
      />
    </svg>
  )
}

export default ArrowDown
