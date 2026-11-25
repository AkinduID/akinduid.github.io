import { useEffect, useState } from "react"

/**
 * useActiveSection tracks which page section is currently in view, for
 * highlighting the matching entry in an in-page table of contents.
 *
 * It observes the elements with the given ids and reports the topmost one
 * inside a band near the top of the viewport.
 *
 * @param {string[]} sectionIds - Element ids to observe, in page order. Pass a stable (module-level) array so the observer is not recreated on every render.
 * @returns {string} The id of the active section (defaults to the first id).
 */
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
