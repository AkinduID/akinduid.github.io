import { motion } from "framer-motion"
import { UserRound, GraduationCap, Briefcase, Award, Trophy, HandHeart } from "lucide-react"

/** Anchor-link entries for jumping to each section of the About page. */
const TOPIC_LINKS = [
  { id: "about-me", label: "About Me", Icon: UserRound },
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
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="theme-nav-shell w-fit min-w-14 rounded-[1.90rem] p-3"
    >
      <div className="flex flex-col items-center gap-2">
        {TOPIC_LINKS.map(({ id, label, Icon }) => (
          <motion.div key={id} variants={itemVariants} transition={{ duration: 0.16 }}>
            <button
              onClick={() => handleClick(id)}
              title={label}
              className="theme-nav-link flex h-14 !w-14 items-center justify-center rounded-xl !px-0"
            >
              <Icon className="h-7 w-7 shrink-0" strokeWidth={2} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}