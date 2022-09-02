import RCThemeProvider from "../theme/index"
import {CssBaseline} from "@mui/material"
import AppContainer from "../components/AppContainer"
import { Provider } from "react-redux"
import {store} from "../appState/store"
import Head from "next/head"
import '../styles/index.scss'

export default function MyApp({Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => page)
  const isProtected = Component.isProtected ?? true

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
      </Head>
      <Provider store={store}>
        <RCThemeProvider>
            <CssBaseline />
            <AppContainer isProtected={isProtected}>
              {getLayout(<Component {...pageProps}/>)}
            </AppContainer>
        </RCThemeProvider>
      </Provider>
    </>
  )
}