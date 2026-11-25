import { NavLink } from "react-router-dom"
import logo from "../../assets/images/logo.png"

/**
 * Logo renders the site logo as a link back to the home page.
 *
 * @returns {JSX.Element}
 */
export default function Logo() {
  return (
    <NavLink
      to="/"
      aria-label="Go to home"
      className="theme-icon-button inline-flex h-10 w-10 overflow-hidden"
    >
      <img
        src={logo}
        alt="Akindu logo"
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </NavLink>
  )
}
