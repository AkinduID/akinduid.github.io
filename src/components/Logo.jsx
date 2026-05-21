import { NavLink } from "react-router-dom"

export default function Logo() {
  return (
    <NavLink
      to="/"
      aria-label="Go to home"
      className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_10px_26px_rgba(0,0,0,0.24)] backdrop-blur-xl md:h-[2.625rem] md:w-[2.625rem] lg:h-11 lg:w-11"
    >
      <img src="/logo.png" alt="Akindu logo" className="h-full w-full object-cover" />
    </NavLink>
  )
}
