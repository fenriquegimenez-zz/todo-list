// import App from "next/app";
import type { AppProps } from "next/app"
import AppLayout from "../components/AppLayout/AppLayout"
import Head from "next/head"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
