import useActiveSection from "../../hooks/useActiveSection"
import useIsDarkMode from "../../hooks/useIsDarkMode"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

/** Anchor-link entries for jumping to each section of the About page. */
const TOPIC_LINKS = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "volunteering", label: "Volunteering" },
]

/** Section ids in page order, kept at module level so the scroll observer stays stable. */
const TOPIC_IDS = TOPIC_LINKS.map(({ id }) => id)

/**
 * Smoothly scrolls the page to the element with the given id.
 *
 * @param {string} id - Target element id.
 */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

/**
 * TopicsSummary renders the sticky left column of the About page: a compact
 * identity block (avatar, name, one-line bio) above a plain-text table of
 * contents. The entry for the section currently in view is highlighted with a
 * dot marker.
 *
 * @returns {JSX.Element}
 */
export default function TopicsSummary() {
  const isDark = useIsDarkMode()
  const activeId = useActiveSection(TOPIC_IDS)
  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <nav aria-label="About page sections" className="w-full">
      <img
        src={portraitSrc}
        alt="Akindu Delgahagoda"
        className="mx-auto block h-28 w-28 rounded-full border border-[var(--op-border)] object-cover object-center"
      />

      <p className="mt-3 text-center text-sm font-semibold text-[var(--op-fg)]">Akindu Delgahagoda</p>
      <p className="mt-1 text-center text-xs leading-5 text-[var(--op-muted)]">
        An engineer passionate about building intelligent systems, exploring technology, and
        combining engineering with creativity.
      </p>

      <div className="op-hairline my-5" />

      <ul className="grid gap-3">
        {TOPIC_LINKS.map(({ id, label }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => scrollToSection(id)}
              className={`op-toc-link ${activeId === id ? "op-toc-link-active" : ""}`}
              aria-current={activeId === id ? "true" : undefined}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
