import { useEffect, useState } from "react"
import { UserRound } from "lucide-react"
import { SectionCard } from "../common/CommonSection"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

export default function PersonalStatementSection() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"))
    })

    observer.observe(html, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <SectionCard title="Personel Statement" icon={UserRound}>
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
        <img
          src={portraitSrc}
          alt="Akindu Delgahagoda"
          className="h-28 w-28 shrink-0 rounded-2xl object-cover object-center sm:h-32 sm:w-32"
        />

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="text-2xl font-semibold tracking-tight text-[var(--theme-text-primary)] sm:text-3xl">
            Akindu Delgahagoda
          </p>

          <p className="mt-3 text-sm leading-8 theme-text-secondary sm:text-base">
            I enjoy creating intelligent and interactive systems by combining embedded hardware with modern software technologies. Outside of engineering, I spend time exploring photography, photo editing, and graphic design.
          </p>
        </div>
      </div>
    </SectionCard>
  )
}