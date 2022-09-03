import {Html, Head, Main, NextScript} from "next/document"

export default function Document(){
  return(
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/fighter-jet.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="/fighter-jet.svg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}