import Logo from "./Logo"
import Navbar from "./Navbar"
import ThemeToggle from "./ThemeToggle"

/**
 * TopHeader renders the sticky site header containing the logo, the main
 * navigation, and the theme toggle.
 *
 * @returns {JSX.Element}
 */
export default function TopHeader() {
  return (
    <div className="sticky top-4 z-50 px-4">
      <header className="relative min-h-9 w-full">
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
