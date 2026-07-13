import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award, Trophy, HandHeart } from "lucide-react"
import useIsDarkMode from "../../hooks/useIsDarkMode"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

/** Anchor-link entries for jumping to each section of the About page. */
const TOPIC_LINKS = [
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "certifications", label: "Certifications", Icon: Award },
  { id: "achievements", label: "Achievements", Icon: Trophy },
  { id: "volunteering", label: "Volunteering", Icon: HandHeart },
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

function handleClick(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

/**
 * TopicsSummary renders a sticky vertical nav used on the About page to
 * quickly jump between sections (education, experience, etc.).
 *
 * @returns {JSX.Element}
 */
export default function TopicsSummary() {
  const isDark = useIsDarkMode()
  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="theme-nav-shell h-auto w-full max-w-[15rem] rounded-[1.65rem] p-2"
    >
      {/* FIRST MAIN DIV: Profile & Personal Statement */}
      <div className="mb-0 rounded-2xl p-4 flex flex-col gap-3">
        <div className="w-full">
          <p className="text-[1.05rem] font-semibold leading-tight text-[var(--theme-text-primary)]">
            Akindu Delgahagoda
          </p>
        </div>

        {/* Increased image size from h-16/w-16 to h-20/w-20 */}
        <img
          src={portraitSrc}
          alt="Akindu Delgahagoda"
          className="h-25 w-25 shrink-0 rounded-2xl object-cover object-center"
        />

        {/* Decreased width using max-w-[90%] to give the text a tighter constraint */}
        <div className="w-full">
          <p className="text-xs leading-tight theme-text-secondary">
            An engineer passionate about building intelligent systems, exploring technology, and combining engineering with creativity.</p></div>
      </div>

      {/* SECOND MAIN DIV: Navigation Links */}
      <div className="flex flex-col gap-1">
        {TOPIC_LINKS.map(({ id, label, Icon }) => (
          <motion.div key={id} variants={itemVariants} transition={{ duration: 0.16 }}>
            <button
              onClick={() => handleClick(id)}
              title={label}
              className="theme-nav-link flex h-10 !w-full items-center justify-start rounded-2xl !px-3.5"
            >
              <Icon className="h-5 w-5 shrink-0 mr-2.5" strokeWidth={2} />
              <span className="text-[0.95rem] font-semibold leading-none">{label}</span>
            </button>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}