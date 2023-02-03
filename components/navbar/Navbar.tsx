interface NavbarProps {
  loggedIn: boolean
}

export const Navbar = ({ loggedIn = false }: NavbarProps) => {
  return (
    <div className="h-[6em] w-screen bg-black/[.5]">
      <p>Hello {loggedIn ? " " : "not "}logged in user!</p>
    </div>
  )
}
