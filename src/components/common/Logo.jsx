import { NavLink } from "react-router-dom"

export default function Logo() {
  return (
    <NavLink
      to="/"
      aria-label="Go to home"
      className="theme-icon-button inline-flex h-10 w-10 overflow-hidden md:h-[2.625rem] md:w-[2.625rem] lg:h-11 lg:w-11"
    >
      <img src="src/assets/images/logo.png" alt="Akindu logo" className="h-full w-full object-cover" />
    </NavLink>
  )
}
