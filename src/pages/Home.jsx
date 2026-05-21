import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import PageShell from "../components/PageShell"
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
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,0.9fr)] lg:items-stretch">
        <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8">
          <p className="text-2xl font-medium tracking-tight text-white/85 sm:text-3xl">
            Hello I&apos;m
          </p>
          <p className="mt-1 text-4xl font-semibold tracking-tight text-[#00FFFF] drop-shadow-[0_0_18px_rgba(139,233,255,0.45)] sm:text-5xl">
            Akindu Delgahagoda
          </p>

          <div className="mt-6 flex items-start gap-2 text-sm font-medium text-white/75 sm:text-base">
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

          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/78 sm:text-base">
            Engineering undergraduate specialized in robotics and distributed systems. Proficient in bridging embedded hardware and cloud services to create cohesive intelligent solutions. Passionate about Photo Editing, Photography, and Graphic Design.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://akinduid.github.io/my-cv/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full bg-[#00FFFF] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#b3f2ff]"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="aspect-square h-full max-h-[22rem] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:max-h-[24rem] lg:max-h-none lg:max-w-[24rem]">
          <img
            src="/me.jpg"
            alt="Akindu Delgahagoda"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/55">
            Connect
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {connectItems.map(({ icon, title, handle, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-black/20 px-4 py-3 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[#8be9ff]/40 hover:bg-[#8be9ff]/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2.5">
                <img src={icon} alt="" className="h-full w-full object-contain" />
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-semibold text-white/90 transition-colors group-hover:text-[#dffcff]">
                  {title}
                </span>
                <span className="block truncate text-xs text-white/55 transition-colors group-hover:text-white/75">
                  {handle}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </PageShell>
  )
}