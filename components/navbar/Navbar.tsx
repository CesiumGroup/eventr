import { Monoton } from "@/global/fonts"

interface NavbarProps {
  loggedIn: boolean
}

export const Navbar = ({ loggedIn = false }: NavbarProps) => {
  return (
    <nav
      className="border-b-1 fixed top-0 left-0 z-[100] flex h-[4em] w-screen flex-row items-center
                justify-center gap-4 border-slate-300 bg-slate-300/[.5] align-middle
                backdrop-blur-sm first:justify-start dark:border-zinc-800 dark:bg-black/[.5]"
    >
      <div className="ml-5 select-none text-5xl text-black dark:text-white">
        <span className={Monoton.className}>EVENTR</span>
      </div>
    </nav>
  )
}
