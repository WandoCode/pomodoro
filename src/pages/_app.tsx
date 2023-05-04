import CounterStatesProvider from '@/contexts/CounterStatesProvider'
import GlobalStatesProvider from '@/contexts/GlobalStatesProvider'
import { ModalProvider } from '@/contexts/ModalProvider'
import '@/styles/main.scss'
import ModalRoot from '@/utils/ModalRoot'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStatesProvider>
      <ModalProvider>
        <CounterStatesProvider>
          <ModalRoot />
          <Component {...pageProps} />
        </CounterStatesProvider>
      </ModalProvider>
    </GlobalStatesProvider>
  )
}
