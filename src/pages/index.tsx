import InputNumber from '@/components/atoms/InputNumber'
import Counter from '@/components/molecules/Counter'
import PomodoroTypesChoice from '@/components/molecules/PomodoroTypesChoice'
import { useState } from 'react'

export default function Home() {
  const POMODORO_TYPES = ['pomodoro', 'short break', 'long break']
  const [currPomodoroType, setCurrPomodoroType] = useState(POMODORO_TYPES[0])

  return (
    <main className="home">
      <h1 className="title">pomodoro</h1>
      <PomodoroTypesChoice
        choices={POMODORO_TYPES}
        value={currPomodoroType}
        changeValue={setCurrPomodoroType}
        className="container"
      />
      <Counter />
    </main>
  )
}
