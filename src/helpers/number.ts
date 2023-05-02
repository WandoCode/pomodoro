const formatSecondToMinuteString = (sec: number) => {
  let minutes = Math.floor(sec / 60).toString()
  let seconds = (sec % 60).toString()

  if (minutes.length === 1) minutes = `0${minutes}`
  if (seconds.length === 1) seconds = `0${seconds}`

  return `${minutes}:${seconds}`
}

export { formatSecondToMinuteString }
