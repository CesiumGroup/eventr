import { Navbar } from "@/components/Components"
import "@/styles/globals.css"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="dark overflow-x-hidden">
      <Navbar loggedIn={false} />
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(App)
