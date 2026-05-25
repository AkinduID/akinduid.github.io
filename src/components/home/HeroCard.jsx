import { AnimatePresence, motion } from "framer-motion"
import { HiLightBulb } from "react-icons/hi";
import CommonCard from "../common/CommonCard"

export default function HeroCard({ activeFocus }) {
  return (
    <CommonCard className="rounded-3xl text-center lg:text-left">
      <p className="text-2xl font-medium tracking-tight theme-text-secondary sm:text-3xl">
        Hello I&apos;m
      </p>

      <p className="theme-hero-accent mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
        Akindu Delgahagoda
      </p>

      <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium theme-text-secondary sm:text-base lg:justify-start">
        <HiLightBulb
          
          className="h-5 w-5 shrink-0 text-[#a16207] drop-shadow-[0_0_6px_rgba(161,98,7,0.55)] dark:text-yellow-400/80 dark:drop-shadow-[0_0_6px_rgba(250,204,21,1)]"
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

      <p className="theme-text-secondary mt-3 max-w-2xl text-sm leading-8 sm:text-base">
        I enjoy creating intelligent and interactive systems by combining embedded hardware with modern software technologies. Outside of engineering, I spend time exploring photography, photo editing, and graphic design.
      </p>

      <div className="mt-5 flex justify-center lg:justify-start">
        <a
          href="https://akinduid.github.io/my-cv/"
          target="_blank"
          rel="noreferrer noopener"
          className="theme-button inline-flex w-[130px] px-5 py-3 text-sm font-semibold transition-shadow duration-300"
        >
          Download CV
        </a>
      </div>
    </CommonCard>
  )
}