import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import PageShell from "../components/common/PageShell"
import CommonCard from "../components/common/CommonCard"
import {connectItems, focusAreas} from "../data/home"
import darkPortrait from "../assets/images/me.jpg"
import lightPortrait from "../assets/images/me2.jpg"

export default function Home() {
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFocusIndex((currentIndex) => (currentIndex + 1) % focusAreas.length)
    }, 2400)

    return () => window.clearInterval(timer)
  }, [])

  const activeFocus = focusAreas[focusIndex]

  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.95fr)_minmax(0,0.9fr)] lg:items-stretch">
        <div className="order-2 lg:order-1">
          <CommonCard className="text-center lg:text-left">
            <p className="text-2xl font-medium tracking-tight theme-text-secondary sm:text-3xl">
              Hello I&apos;m
            </p>
            <p className="theme-hero-accent mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
              Akindu Delgahagoda
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium theme-text-secondary sm:text-base lg:justify-start">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[var(--theme-text-primary)]" />
              <div className="min-h-[2rem]">
                <span className="text-[var(--theme-text-muted)]">Focused on </span>
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

            <p className="theme-text-secondary mt-2 max-w-2xl text-sm leading-8 sm:text-base">
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
        </div>
        
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <CommonCard className="!p-0">
          {/* <div className="theme-card h-[22rem] w-[22rem] shrink-0 overflow-hidden rounded-[2rem]"> */}
            {/* <img
              src={theme === "dark" ? darkPortrait : lightPortrait}
              alt="Akindu Delgahagoda"
              className="h-full w-full object-cover object-center rounded-[2rem]"
            /> */}
            <img
              src={lightPortrait}
              className="h-full w-full object-cover object-center block dark:hidden rounded-[2rem]"
              alt=""
            />

            <img
              src={darkPortrait}
              className="h-full w-full object-cover object-center hidden dark:block rounded-[2rem]"
              alt=""
            />
          {/* </div> */}
          </CommonCard>
        </div>
        
      </div>

      <CommonCard className="mt-6 !p-4">

        <div className="grid grid-cols-4 items-center justify-items-center gap-6 lg:flex lg:flex-nowrap lg:gap-16 lg:justify-center">
          {connectItems.map(({ icon, title, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={title}
              className="group flex h-16 w-16 shrink-0 items-center justify-center p-2 transition-all duration-150 hover:-translate-y-0.5"
            >
              <img
                src={icon}
                alt=""
                className="h-full w-full object-contain transition-transform duration-150 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </CommonCard>
    </PageShell>
  )
}