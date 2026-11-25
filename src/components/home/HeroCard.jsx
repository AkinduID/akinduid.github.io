import { Link } from "react-router-dom"
import PortraitCard from "./PortraitCard"
import { FOCUS_AREAS } from "../../data/home"

/**
 * HeroCard renders the introductory hero content on the Home page as a
 * centered single column: the avatar, name, focus-area chips, a short bio,
 * call-to-action buttons and
 * social/contact links. It sits directly on the page (no card container).
 *
 * @param {object} props
 * @param {Array<{icon: React.ComponentType, title: string, link: string}>} props.connectItems - Social/contact links to display.
 * @returns {JSX.Element}
 */
export default function HeroCard({ connectItems }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="mb-5 text-3xl font-bold tracking-tight text-[var(--op-fg)] sm:text-4xl">
        Hi, I&apos;m Akindu
      </h1>

      <PortraitCard />

      {/* <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {FOCUS_AREAS.map((focusArea) => (
          <span
            key={focusArea}
            className={`op-chip op-focus-chip op-focus-chip-${focusArea.toLowerCase().replaceAll(" ", "-")}`}
          >
            {focusArea}
          </span>
        ))}
      </div> */}

      <p className="mt-4 max-w-md text-[0.8125rem] leading-7 text-[var(--op-muted)]">
        I build intelligent systems by combining embedded hardware, software, and AI technologies
        to bridge the physical and digital worlds. Outside engineering, I explore photography,
        design, and hiking.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        <Link to="/about" className="op-btn op-btn-primary">
          About me <span aria-hidden="true">→</span>
        </Link>
        <a
          href="https://akinduid.github.io/my-cv/"
          target="_blank"
          rel="noreferrer noopener"
          className="op-btn op-btn-secondary"
        >
          Download CV
        </a>
      </div>

      <div className="mt-5 flex max-w-sm flex-wrap items-center justify-center gap-2">
        {connectItems.map(({ icon: Icon, title, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={title}
            title={title}
            className="op-icon-link"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </div>
  )
}
