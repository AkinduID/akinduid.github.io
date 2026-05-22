import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import PageShell from "../components/PageShell"
import CommonCard from "../components/CommonCard"
import email from "../assets/social/email.png"
import linkedin from "../assets/social/linkedin.png"
import github from "../assets/social/github.png"
import instagram from "../assets/social/instagram.png"
import twitter from "../assets/social/twitter.png"
import behance from "../assets/social/behance.png"
import facebook from "../assets/social/facebook.png"
import discord from "../assets/social/discord.png"

const focusAreas = ["Embedded System", "Robotics", "IoT", "Computer Vision", "Graphic Design", "Photo Editing"]

const connectItems = [
  { icon: email, title: "Email", handle: "akinduid@gmail.com", link: "mailto:akinduid@gmail.com" },
  { icon: linkedin, title: "LinkedIn", handle: "@akinduid", link: "https://linkedin.com/in/akinduid" },
  { icon: github, title: "GitHub", handle: "@AkinduID", link: "https://github.com/AkinduID" },
  { icon: instagram, title: "Instagram", handle: "@akinduid", link: "https://instagram.com/akinduid" },
  { icon: twitter, title: "Twitter", handle: "@akinduid", link: "https://twitter.com/akinduid" },
  { icon: behance, title: "Behance", handle: "@akinduid", link: "https://behance.net/akinduid" },
  { icon: facebook, title: "Facebook", handle: "@akinduid", link: "https://facebook.com/akinduid" },
  { icon: discord, title: "Discord", handle: "@akinduid", link: "https://discord.com/users/akinduid" },
]

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
          <p className="text-2xl font-medium tracking-tight text-white/85 sm:text-3xl">
            Hello I&apos;m
          </p>
          <p className="mt-1 text-4xl font-semibold tracking-tight text-[#00FFFF] drop-shadow-[0_0_18px_rgba(139,233,255,0.45)] sm:text-5xl">
            Akindu Delgahagoda
          </p>

          <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-white/75 sm:text-base">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]" />
            <div className="min-h-[2rem]">
              <span className="text-white/60">Focused on </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeFocus}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-[#00FFFF]"
                >
                  {activeFocus}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-8 text-white/78 sm:text-base">
             I enjoy creating intelligent and interactive systems by combining embedded hardware with modern software technologies. Outside of engineering, I spend time exploring photography, photo editing, and graphic design.
            </p>

          <div className="mt-5 flex justify-center lg:justify-start">
            <a
              href="https://akinduid.github.io/my-cv/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-[130px] items-center justify-center rounded-full bg-[#00FFFF]/80 px-5 py-3 text-sm font-semibold text-slate-950 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.75)]"
            >
              Download CV
            </a>
          </div>
        </CommonCard>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="h-[22rem] w-[22rem] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
          <img
            src="/me.jpg"
            alt="Akindu Delgahagoda"
            className="h-full w-full object-cover object-center"
          />
        </div>
        </div>
      </div>

      <CommonCard className="mt-6 !p-4">

        <div className="grid grid-cols-4 lg:flex lg:flex-nowrap lg:gap-16 gap-6 items-center justify-items-center lg:justify-center">
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