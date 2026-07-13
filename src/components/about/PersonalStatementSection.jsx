import { FileText } from "lucide-react"
import SectionCard from "../common/SectionCard"
import useIsDarkMode from "../../hooks/useIsDarkMode"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

/**
 * PersonalStatementSection renders the "About Me" introduction on the About
 * page, pairing a short personal statement with a theme-aware portrait.
 *
 * @returns {JSX.Element}
 */
export default function PersonalStatementSection() {
  const isDark = useIsDarkMode()
  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <SectionCard title="Personal Statement" icon={FileText}>
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
           I build intelligent systems by combining embedded hardware, software, and AI technologies to bridge the physical and digital worlds. Outside engineering, I explore photography, design, and hiking.</p>
        </div>
      </div>
    </SectionCard>
  )
}