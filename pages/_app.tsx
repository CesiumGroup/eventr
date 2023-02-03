import { Navbar } from "@/components/Components"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark overflow-x-hidden text-black dark:text-white">
      <Navbar loggedIn={false} />
      <Component {...pageProps} />
    </div>
  )
}
