import { useEffect, useState } from "react"

/**
 * useIsDarkMode tracks whether the site's dark theme is currently active by
 * watching the `dark` class on the document root element. This mirrors the
 * theme state toggled by ThemeToggle, so components can react to theme
 * changes (e.g. swapping an image) without re-implementing the observer.
 *
 * @returns {boolean} True when the `dark` class is present on `<html>`.
 */
export default function useIsDarkMode() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"))
    })

    observer.observe(html, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  return isDark
}
