import { Button } from '@/components/atoms/Button'

export default function Home() {
  return (
    <>
      <main>
        <h1 className="h1">APP</h1>
        <Button
          className=""
          text="Aa"
          type="secondary"
          active={false}
          handleClick={() => {}}
        />
      </main>
    </>
  )
}
