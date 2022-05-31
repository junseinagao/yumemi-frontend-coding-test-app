import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { SWRConfig } from "swr"
import { fetcher } from "src/lib/fetcher"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>フロントエンドコーディング試験アプリ</title>
      </Head>

      <SWRConfig
        value={{
          suspense: true,
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

export default MyApp
