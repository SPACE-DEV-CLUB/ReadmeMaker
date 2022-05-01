import "../styles/globals.css"
import type { AppProps } from "next/app"
import GlobalStyle from "../styles/globalStyle"
import { Global } from "@emotion/react"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
