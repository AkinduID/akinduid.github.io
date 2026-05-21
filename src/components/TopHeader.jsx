import Logo from "./Logo"
import Navbar from "./Navbar"
import ThemeToggle from "./ThemeToggle"

export default function TopHeader() {
  return (
    <div className="sticky top-4 z-50 px-4">
      <header className="relative w-full min-h-10 md:min-h-[2.625rem] lg:min-h-11">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Logo />
        </div>

        <div className="mx-auto w-fit">
          <Navbar />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <ThemeToggle />
        </div>
      </header>
    </div>
  )
}
