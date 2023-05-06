import { PropsWithChildren, useState, createContext } from 'react'

export type PomodoroTypes = 'pomodoro' | 'short break' | 'long break'
export type Typos = 'typo-a' | 'typo-b' | 'typo-c'
export type Colors = 'color-a' | 'color-b' | 'color-c'

export const POMODORO_TYPES: PomodoroTypes[] = [
  'pomodoro',
  'short break',
  'long break',
]
export const TYPOS: Typos[] = ['typo-a', 'typo-b', 'typo-c']
export const COLORS: Colors[] = ['color-a', 'color-b', 'color-c']

type PomodoroDefaultTimes = {
  [key in PomodoroTypes]: number
}

interface GlobalState {
  POMODORO_TYPES: PomodoroTypes[]
  TYPOS: Typos[]
  COLORS: Colors[]
  currPomodoroType: PomodoroTypes
  currentTypo: Typos
  currentColor: Colors
  pomodoroDefaultTimes: PomodoroDefaultTimes
  setCurrPomodoroType: (newType: PomodoroTypes) => void
  setPomodoroDefaultTimes: (newDefaults: PomodoroDefaultTimes) => void
  changeColor: (newValue: string) => void
  changeTypo: (newValue: string) => void
}

export const initialGlobalState: GlobalState = {
  POMODORO_TYPES,
  TYPOS,
  COLORS,
  currPomodoroType: POMODORO_TYPES[0],
  currentTypo: TYPOS[0],
  currentColor: COLORS[0],
  pomodoroDefaultTimes: {
    pomodoro: 300,
    'short break': 90,
    'long break': 200,
  },
  setPomodoroDefaultTimes: (newDefaults: PomodoroDefaultTimes) => {},
  setCurrPomodoroType: (newType: PomodoroTypes) => {},
  changeColor: (newValue: string) => {},
  changeTypo: (newValue: string) => {},
}

export const GlobalContext = createContext(initialGlobalState)

const GlobalStatesProvider = ({ children }: PropsWithChildren) => {
  const [pomodoroDefaultTimes, setPomodoroDefaultTimes] = useState(
    initialGlobalState.pomodoroDefaultTimes
  )

  const [currPomodoroType, setCurrPomodoroType] = useState(
    initialGlobalState.currPomodoroType
  )

  const [currentColor, setCurrentColor] = useState(initialGlobalState.COLORS[0])
  const [currentTypo, setCurrentTypo] = useState(initialGlobalState.TYPOS[0])

  const changeColor = (newColor: string) => {
    if (COLORS.includes(newColor as Colors)) setCurrentColor(newColor as Colors)
  }

  const changeTypo = (newTypo: string) => {
    if (TYPOS.includes(newTypo as Typos)) setCurrentTypo(newTypo as Typos)
  }

  return (
    <GlobalContext.Provider
      value={{
        currPomodoroType,
        setCurrPomodoroType,
        POMODORO_TYPES,
        TYPOS,
        COLORS,
        currentColor,
        currentTypo,
        pomodoroDefaultTimes,
        setPomodoroDefaultTimes,
        changeColor,
        changeTypo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStatesProvider
