import { PropsWithChildren, useState, createContext } from 'react'

export type PomodoroTypes = 'pomodoro' | 'short break' | 'long break'

interface GlobalState {
  POMODORO_TYPES: PomodoroTypes[]
  currPomodoroType: PomodoroTypes
  setCurrPomodoroType: (newType: PomodoroTypes) => void
}

export const POMODORO_TYPES: PomodoroTypes[] = [
  'pomodoro',
  'short break',
  'long break',
]

export const initialGlobalState: GlobalState = {
  POMODORO_TYPES,
  currPomodoroType: 'pomodoro',
  setCurrPomodoroType: (newType: PomodoroTypes) => {},
}

export const GlobalContext = createContext(initialGlobalState)

const GlobalStatesProvider = ({ children }: PropsWithChildren) => {
  const [currPomodoroType, setCurrPomodoroType] = useState(
    initialGlobalState.currPomodoroType
  )

  return (
    <GlobalContext.Provider
      value={{ currPomodoroType, setCurrPomodoroType, POMODORO_TYPES }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStatesProvider
