import { PropsWithChildren, useState, createContext } from 'react'

export interface CounterState {
  inPause: boolean
  totalTime: number
  remainingTime: number
}

export const initialCounterContext: CounterState = {
  inPause: true,
  totalTime: 600,
  remainingTime: 600,
}

const CounterContext = createContext(initialCounterContext)

const CounterStatesProvider = ({ children }: PropsWithChildren) => {
  const [inPause, setInPause] = useState(initialCounterContext.inPause)
  const [totalTime, setTotalTime] = useState(initialCounterContext.totalTime)
  const [remainingTime, setRemainingTime] = useState(
    initialCounterContext.remainingTime
  )

  return (
    <CounterContext.Provider value={{ inPause, totalTime, remainingTime }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterStatesProvider
