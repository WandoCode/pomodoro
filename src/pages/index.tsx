import Counter from '@/components/molecules/Counter'
import PomodoroTypesChoice from '@/components/molecules/PomodoroTypesChoice'
import { formatSecondToMinuteString } from '@/helpers/number'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const POMODORO_TYPES = ['pomodoro', 'short break', 'long break']
  const [currPomodoroType, setCurrPomodoroType] = useState(POMODORO_TYPES[0])
  const [inPause, setInPause] = useState(true)
  const [totalTime, setTotalTime] = useState(5) // Temps total du minuteur en secondes
  const [remainingTime, setRemainingTime] = useState(3) // Temps restant en secondes
  const [intervalKey, setIntervalKey] = useState<NodeJS.Timer | null>()

  const handleStopTimer = useCallback(() => {
    if (intervalKey) {
      clearInterval(intervalKey)
      setIntervalKey(null)
      setInPause(true)
    }
  }, [intervalKey])

  useEffect(() => {
    if (remainingTime === 0) handleStopTimer()
    else if (!inPause && !intervalKey) {
      const interval = setInterval(
        () => setRemainingTime((old) => old - 1),
        1000
      )
      setIntervalKey(interval)
    } else if (inPause) {
      handleStopTimer()
    }
  }, [inPause, intervalKey, handleStopTimer, remainingTime])

  const toggleAction = () => {
    if (remainingTime === 0) {
      restartTimer()
    } else setInPause((old) => !old)
  }

  const restartTimer = () => {
    setRemainingTime(totalTime)
    setInPause(false)
  }

  const getTextAction = () => {
    if (remainingTime === 0 && inPause) return 'Restart'
    if (remainingTime === totalTime && inPause) return 'start'
    if (remainingTime !== 0 && inPause) return 'Continue'
    return 'Pause'
  }

  return (
    <main className="home">
      <h1 className="title">pomodoro</h1>
      <PomodoroTypesChoice
        choices={POMODORO_TYPES}
        value={currPomodoroType}
        changeValue={setCurrPomodoroType}
        className="container"
      />
      <Counter
        timePercentage={(remainingTime * 100) / totalTime}
        timeLeft={formatSecondToMinuteString(remainingTime)}
        onToggleAction={toggleAction}
        textAction={getTextAction()}
      />
    </main>
  )
}
