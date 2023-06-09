import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react'
import { GlobalContext } from './GlobalStatesProvider'

export interface CounterState {
  inPause: boolean
  totalTime: number
  remainingTime: number
  setInPause: React.Dispatch<React.SetStateAction<boolean>>
  setTotalTime: React.Dispatch<React.SetStateAction<number>>
  decreaseRemainingTimeByOne: () => void
  restartTimer: () => void
}

export const initialCounterContext: CounterState = {
  inPause: true,
  totalTime: 0,
  remainingTime: 0,
  setInPause: () => {},
  setTotalTime: () => {},
  decreaseRemainingTimeByOne: () => {},
  restartTimer: () => {},
}

export const CounterContext = createContext(initialCounterContext)

const CounterStatesProvider = ({ children }: PropsWithChildren) => {
  const [inPause, setInPause] = useState(initialCounterContext.inPause)
  const [totalTime, setTotalTime] = useState(initialCounterContext.totalTime)
  const { pomodoroDefaultTimes, currPomodoroType } = useContext(GlobalContext)
  const [remainingTime, setRemainingTime] = useState(
    initialCounterContext.remainingTime
  )

  useEffect(() => {
    const startNewTimer = () => {
      setTotalTime(pomodoroDefaultTimes[currPomodoroType])
      setRemainingTime(pomodoroDefaultTimes[currPomodoroType])
      setInPause(true)
    }

    startNewTimer()
  }, [pomodoroDefaultTimes, currPomodoroType])

  const decreaseRemainingTimeByOne = () => {
    setRemainingTime((old) => old - 1)
  }

  const restartTimer = () => {
    setRemainingTime(totalTime)
    setInPause(false)
  }

  return (
    <CounterContext.Provider
      value={{
        inPause,
        setInPause,
        setTotalTime,
        totalTime,
        remainingTime,
        decreaseRemainingTimeByOne,
        restartTimer,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterStatesProvider
