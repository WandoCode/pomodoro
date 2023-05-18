import { getFontFamily } from '@/helpers/strings'
import { PropsWithChildren, useState, createContext, useEffect } from 'react'

export type PomodoroTypes = 'pomodoro' | 'short break' | 'long break'
export type Colors = 'color-a' | 'color-b' | 'color-c'

export const POMODORO_TYPES: PomodoroTypes[] = [
  'pomodoro',
  'short break',
  'long break',
]
export type Typos = 'typo-a' | 'typo-b' | 'typo-c'
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
  updateDefaultTimes: (newDefaults: PomodoroDefaultTimes) => void
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
  updateDefaultTimes: (newDefaults: PomodoroDefaultTimes) => {},
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

  useEffect(() => {
    const changeTypoInStyle = () => {
      document.documentElement.style.setProperty(
        '--main-typo',
        getFontFamily(currentTypo)
      )

      changeTypoInStyle()
    }
  }, [currentTypo])

  useEffect(() => {
    const changeColorInStyle = () => {
      document.documentElement.style.setProperty(
        '--clr-primary',
        `var(--clr-primary-${currentColor.at(-1)}-400)`
      )

      document.documentElement.style.setProperty(
        '--clr-primary-light',
        `var(--clr-primary-${currentColor.at(-1)}-300)`
      )
    }

    changeColorInStyle()
  }, [currentColor])

  const changeColor = (newColor: string) => {
    if (COLORS.includes(newColor as Colors)) setCurrentColor(newColor as Colors)
  }

  const changeTypo = (newTypo: string) => {
    if (TYPOS.includes(newTypo as Typos)) setCurrentTypo(newTypo as Typos)
  }

  const updateDefaultTimes = (newDefault: PomodoroDefaultTimes) => {
    for (const type in newDefault) {
      const time = newDefault[type as PomodoroTypes]
      if (time <= 0) return
    }

    setPomodoroDefaultTimes(newDefault)
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
        updateDefaultTimes,
        changeColor,
        changeTypo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStatesProvider
