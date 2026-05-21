import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const THEME_STORAGE_KEY = "portfolio-theme"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const nextTheme = storedTheme || (systemPrefersDark ? "dark" : "light")

    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"

    setTheme(nextTheme)
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-200 shadow-[0_10px_26px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-colors duration-150 hover:text-[#8be9ff] md:h-[2.625rem] md:w-[2.625rem] lg:h-11 lg:w-11"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
