import { Navbar } from "@/components/components"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-x-hidden">
      <Navbar loggedIn={false} />
      <Component {...pageProps} />
    </div>
  )
}
