import { FolderKanban, Home, Images, Toolbox, UserRound } from "lucide-react"
import { NavLink } from "react-router-dom"

/** Primary site navigation links, rendered in both desktop and mobile layouts. */
const NAV_LINKS = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/about", label: "About", Icon: UserRound },
  { href: "/toolbox", label: "Toolbox", Icon: Toolbox },
  { href: "/projects", label: "Projects", Icon: FolderKanban },
  { href: "/gallery", label: "Gallery", Icon: Images },
]

/**
 * Navbar renders the primary site navigation as a floating, text-only pill
 * on desktop and a compact icon-only pill on tablet and mobile.
 *
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const linkClassName = ({ isActive }) =>
    `theme-nav-link ${isActive ? "theme-nav-link-active" : ""}`

  const iconClassName = ({ isActive }) =>
    `theme-nav-icon h-8 w-8 ${isActive ? "theme-nav-icon-active" : ""}`

  return (
    <nav aria-label="Primary" className="theme-nav-shell w-fit rounded-full p-1.5">
      {/* Desktop: text links */}
      <div className="hidden items-center gap-0.5 lg:flex">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={label} to={href} end={href === "/"} className={linkClassName}>
            {label}
          </NavLink>
        ))}
      </div>

      {/* Tablet and mobile: icon-only links */}
      <div className="flex items-center gap-0.5 lg:hidden">
        {NAV_LINKS.map(({ href, label, Icon }) => (
          <NavLink
            key={label}
            to={href}
            end={href === "/"}
            aria-label={label}
            title={label}
            className={iconClassName}
          >
            <Icon className="h-4 w-4" strokeWidth={2} />
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
