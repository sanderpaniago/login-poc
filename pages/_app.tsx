import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Login- POC</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <div id='app'>

        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
