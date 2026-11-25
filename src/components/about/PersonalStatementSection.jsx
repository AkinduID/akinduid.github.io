import SectionBlock from "../common/SectionBlock"
import useIsDarkMode from "../../hooks/useIsDarkMode"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

/**
 * PersonalStatementSection renders an "About Me" introduction pairing a short
 * personal statement with a theme-aware portrait. It is not currently wired
 * into the About page (the sticky TopicsSummary shows the same identity block).
 *
 * @returns {JSX.Element}
 */
export default function PersonalStatementSection() {
  const isDark = useIsDarkMode()
  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <SectionBlock title="Personal Statement">
      <div className="flex flex-col items-center gap-5 pt-3 sm:flex-row sm:items-start">
        <img
          src={portraitSrc}
          alt="Akindu Delgahagoda"
          className="h-36 w-36 shrink-0 rounded-[20px] border border-[var(--op-border)] object-cover object-center sm:h-40 sm:w-40"
        />

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="text-xl font-bold tracking-tight text-[var(--op-fg)]">Akindu Delgahagoda</p>
          <p className="mt-2 text-[0.8125rem] leading-7 text-[var(--op-muted)]">
            I build intelligent systems by combining embedded hardware, software, and AI
            technologies to bridge the physical and digital worlds. Outside engineering, I explore
            photography, design, and hiking.
          </p>
        </div>
      </div>
    </SectionBlock>
  )
}
