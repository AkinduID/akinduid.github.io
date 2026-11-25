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
      <h1 className="mb-[clamp(1.25rem,2vw,1.75rem)] text-[clamp(2rem,3vw,3rem)] font-bold tracking-tight text-[var(--op-fg)]">
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

      <p className="mt-[clamp(1rem,1.6vw,1.5rem)] max-w-lg text-[clamp(0.8125rem,1.05vw,1rem)] leading-7 text-[var(--op-muted)]">
        I build intelligent systems by combining embedded hardware, software, and AI technologies
        to bridge the physical and digital worlds. Outside engineering, I explore photography,
        design, and hiking.
      </p>

      <div className="mt-[clamp(1.5rem,2.2vw,2rem)] flex flex-wrap items-center justify-center gap-[clamp(0.625rem,1vw,0.875rem)]">
        <Link to="/about" className="op-btn op-btn-primary text-[clamp(0.78rem,0.9vw,0.9rem)]">
          About me <span aria-hidden="true">→</span>
        </Link>
        <a
          href="https://akinduid.github.io/my-cv/"
          target="_blank"
          rel="noreferrer noopener"
          className="op-btn op-btn-secondary text-[clamp(0.78rem,0.9vw,0.9rem)]"
        >
          Download CV
        </a>
      </div>

      <div className="mt-[clamp(1.25rem,1.6vw,1.75rem)] flex max-w-lg flex-wrap items-center justify-center gap-[clamp(0.5rem,0.8vw,0.75rem)]">
        {connectItems.map(({ icon: Icon, title, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={title}
            title={title}
            className="op-icon-link h-[clamp(2rem,2.4vw,2.5rem)] w-[clamp(2rem,2.4vw,2.5rem)]"
          >
            <Icon className="h-[clamp(0.875rem,1.1vw,1.125rem)] w-[clamp(0.875rem,1.1vw,1.125rem)]" />
          </a>
        ))}
      </div>
    </div>
  )
}
