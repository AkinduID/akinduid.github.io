import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const THEME_STORAGE_KEY = "portfolio-theme"

/**
 * ThemeToggle switches between light and dark theme, persisting the choice
 * in localStorage and defaulting to the user's system preference on first
 * visit.
 *
 * @returns {JSX.Element}
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    return storedTheme || (systemPrefersDark ? "dark" : "light")
  })

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"

    setTheme(nextTheme)
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-icon-button inline-flex h-10 w-10 transition-colors duration-150 md:h-[2.625rem] md:w-[2.625rem] lg:h-11 lg:w-11"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
