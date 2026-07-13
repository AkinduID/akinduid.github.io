import { AnimatePresence, motion } from "framer-motion"
import { HiOutlineLightBulb } from "react-icons/hi";
import CommonCard from "../common/CommonCard"

/**
 * HeroCard renders the introductory hero content on the Home page: name,
 * a rotating "focused on" area, a short bio, a CV download link, and
 * social/contact links.
 *
 * @param {object} props
 * @param {string} props.activeFocus - The currently displayed rotating focus area.
 * @param {Array<{icon: React.ComponentType, title: string, link: string}>} props.connectItems - Social/contact links to display.
 * @returns {JSX.Element}
 */
export default function HeroCard({ activeFocus, connectItems }) {
  return (
    <CommonCard className="rounded-3xl text-center lg:text-left">
      <p className="text-2xl font-medium tracking-tight theme-text-secondary sm:text-3xl">
        Hello I&apos;m
      </p>

      <p className="theme-hero-accent mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
        Akindu Delgahagoda
      </p>

      <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium theme-text-secondary sm:text-base lg:justify-start">
        <HiOutlineLightBulb
          
          className="h-5 w-5 shrink-0 text-[#a16207] drop-shadow-[0_0_6px_rgba(161,98,7,1)] dark:text-yellow-400 dark:drop-shadow-[0_0_6px_rgba(250,204,21,1)]"
        />

        <div className="flex min-h-[2rem] items-center">
          <span className="text-[var(--theme-text-muted)]">
            Focused on&nbsp;
          </span>

          <AnimatePresence mode="wait">
            <motion.span
              key={activeFocus}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="theme-accent inline-block"
            >
              {activeFocus}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <p className="theme-text-secondary mt-3 text-sm leading-8 sm:text-base">
        I build intelligent systems by combining embedded hardware, software, and AI technologies to bridge the physical and digital worlds. Outside engineering, I explore photography, design, and hiking.</p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        <a
          href="https://akinduid.github.io/my-cv/"
          target="_blank"
          rel="noreferrer noopener"
          className="theme-button inline-flex w-[130px] px-5 py-3 text-sm font-semibold transition-shadow duration-300"
        >
          Download CV
        </a>

        <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          {connectItems.map(({ icon: Icon, title, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={title}
              className="group flex h-11 w-11 items-center justify-center rounded-full transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]"
            >
              <Icon className="h-5 w-5 text-[var(--theme-text-secondary)] transition-all duration-200 group-hover:text-[var(--theme-accent)] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            </a>
          ))}
        </div>
      </div>
    </CommonCard>
  )
}