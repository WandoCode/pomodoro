const withStopPropagation = (fn: any, e: React.MouseEvent) => {
  e.preventDefault()
  return fn()
}

export { withStopPropagation }
