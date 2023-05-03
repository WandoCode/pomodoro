import GlobalStatesProvider from '@/contexts/GlobalStatesProvider'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStatesProvider>
      <Component {...pageProps} />
    </GlobalStatesProvider>
  )
}
