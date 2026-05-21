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
    `inline-flex h-9 w-24 items-center justify-center gap-1.5 rounded-full text-sm font-semibold overflow-hidden transition-all duration-150 ${
      isActive
        ? "border border-[#00c8ff]/30 bg-[#00c8ff]/12 text-[#d9fbff] shadow-[0_0_0_1px_rgba(0,200,255,0.12)]"
        : "border border-transparent text-gray-200/90 hover:border-white/10 hover:bg-white/5 hover:text-white"
    }`

  const iconClassName = ({ isActive }) =>
    `inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-150 md:h-9 md:w-9 ${
      isActive
        ? "border-[#00c8ff]/30 bg-[#00c8ff]/12 text-[#d9fbff] shadow-[0_0_0_1px_rgba(0,200,255,0.12)]"
        : "border-transparent text-gray-200/90 hover:border-white/10 hover:bg-white/5 hover:text-white"
    }`

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="w-fit rounded-[1.75rem] p-2 lg:p-2 border border-transparent bg-transparent shadow-none ring-0 backdrop-blur-0 lg:border-white/10 lg:bg-white/5 lg:shadow-[0_14px_45px_rgba(0,0,0,0.35)] lg:ring-1 lg:ring-white/5 lg:backdrop-blur-3xl"
    >
      <div className="mx-auto flex items-center justify-center gap-0.5 lg:gap-0.1 lg:px-0.5">
        <div className="hidden items-center gap-0.5 text-gray-300 lg:flex">
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

        <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/5 text-gray-300 shadow-[0_10px_28px_rgba(0,0,0,0.25)] md:hidden">
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

        <div className="mx-auto hidden h-[2.625rem] w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 shadow-[0_12px_34px_rgba(0,0,0,0.28)] md:flex lg:hidden">
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