import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import '../styles/globals.css'


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>): JSX.Element {
  return (
    <SessionProvider session={session}>

      <Component {...pageProps} />

    </SessionProvider>


  )
}
