import Counter from '@/components/molecules/Counter'
import PomodoroTypesChoice from '@/components/molecules/PomodoroTypesChoice'
import { Settings } from '@/components/svgs/Settings'
import { CounterContext } from '@/contexts/CounterStatesProvider'
import { GlobalContext } from '@/contexts/GlobalStatesProvider'
import { ModalContext } from '@/contexts/ModalProvider'

import { formatSecondToMinuteString } from '@/helpers/number'
import { useCallback, useContext, useEffect, useState } from 'react'

export default function Home() {
  const { POMODORO_TYPES, currPomodoroType, setCurrPomodoroType } =
    useContext(GlobalContext)
  const {
    inPause,
    setInPause,
    totalTime,
    decreaseRemainingTimeByOne,
    restartTimer,
    remainingTime,
  } = useContext(CounterContext)
  const [intervalKey, setIntervalKey] = useState<NodeJS.Timer | null>()

  const { openModal } = useContext(ModalContext)

  const handleStopTimer = useCallback(() => {
    if (intervalKey) {
      clearInterval(intervalKey)
      setIntervalKey(null)
      setInPause(true)
    }
  }, [intervalKey, setInPause])

  useEffect(() => {
    if (remainingTime === 0) handleStopTimer()
    else if (!inPause && !intervalKey) {
      const interval = setInterval(() => decreaseRemainingTimeByOne(), 1000)
      setIntervalKey(interval)
    } else if (inPause) {
      handleStopTimer()
    }
  }, [
    inPause,
    intervalKey,
    handleStopTimer,
    remainingTime,
    decreaseRemainingTimeByOne,
  ])

  const toggleAction = () => {
    if (remainingTime === 0) {
      restartTimer()
    } else setInPause((old) => !old)
  }

  const getTextAction = () => {
    if (remainingTime === 0 && inPause) return 'Restart'
    if (remainingTime === totalTime && inPause) return 'start'
    if (remainingTime !== 0 && inPause) return 'Continue'
    return 'Pause'
  }

  return (
    <main className="home">
      <div className="home__sup">
        <h1 className="home__title title">pomodoro</h1>
        <PomodoroTypesChoice
          choices={POMODORO_TYPES}
          value={currPomodoroType}
          changeValue={setCurrPomodoroType}
          className="container home__choices"
        />
      </div>
      <div className="home__down">
        <Counter
          timePercentage={(remainingTime * 100) / totalTime}
          timeLeft={formatSecondToMinuteString(remainingTime)}
          onToggleAction={toggleAction}
          textAction={getTextAction()}
          className="home__counter"
        />
        <button className="home__settings" onClick={openModal}>
          <Settings />
        </button>
      </div>
    </main>
  )
}
