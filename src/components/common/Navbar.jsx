import { FolderKanban, Home, Images, Toolbox, UserRound } from "lucide-react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

const navItems = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/about", label: "About", Icon: UserRound },
  { href: "/toolbox", label: "Toolbox", Icon: Toolbox },
  { href: "/projects", label: "Projects", Icon: FolderKanban },
  { href: "/gallery", label: "Gallery", Icon: Images },
]

const navVariants = {
  hidden: { opacity: 0, y: -14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.035,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0 },
}

export default function Navbar() {
  const linkClassName = ({ isActive }) =>
    `theme-nav-link overflow-hidden text-sm font-semibold ${isActive ? "theme-nav-link-active" : ""}`

  const iconClassName = ({ isActive }) =>
    `theme-nav-icon h-8 w-8 border transition-all duration-150 md:h-9 md:w-9 ${isActive ? "theme-nav-icon-active" : ""}`

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="theme-nav-shell w-fit rounded-[1.75rem] p-2 lg:p-2"
    >
      <div className="mx-auto flex items-center justify-center gap-0.5 lg:gap-0.1 lg:px-0.5">
        <div className="hidden items-center gap-0.5 theme-text-secondary lg:flex">
          {navItems.map(({ href, label, Icon }) => (
            <motion.div key={label} variants={itemVariants} transition={{ duration: 0.16 }}>
              <NavLink
                to={href}
                end={href === "/"}
                className={linkClassName}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2.55} />
                <span className="truncate">{label}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="theme-nav-shell mx-auto flex w-fit items-center gap-1 rounded-full md:hidden">
          {navItems.map(({ href, label, Icon }) => (
            <motion.div key={label} variants={itemVariants} transition={{ duration: 0.16 }}>
              <NavLink
                to={href}
                aria-label={label}
                title={label}
                className={iconClassName}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="theme-nav-shell mx-auto hidden h-[2.625rem] w-fit items-center gap-1.5 rounded-full md:flex lg:hidden">
          {navItems.map(({ href, label, Icon }) => (
            <motion.div key={`${label}-md`} variants={itemVariants} transition={{ duration: 0.16 }}>
              <NavLink
                to={href}
                aria-label={label}
                title={label}
                className={iconClassName}
              >
                <Icon className="h-4 w-4" strokeWidth={2.25} />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}