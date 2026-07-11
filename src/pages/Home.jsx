import { useEffect, useState } from "react"

import PageShell from "../components/common/PageShell"

import HeroCard from "../components/home/HeroCard"
import PortraitCard from "../components/home/PortraitCard"
import SummaryGrid from "../components/home/SummaryGrid"

import { SOCIAL_LINKS, FOCUS_AREAS } from "../data/home"
import { educationItems, experienceItems} from "../data/about"
import { projects } from "../data/projects"

/**
 * Home renders the landing page: an introductory hero with a rotating focus
 * area, a portrait, and a summary grid highlighting the latest education and
 * experience entries.
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFocusIndex(
        (currentIndex) => (currentIndex + 1) % FOCUS_AREAS.length
      )
    }, 2400)

    return () => window.clearInterval(timer)
  }, [])

  const activeFocus = FOCUS_AREAS[focusIndex]

  return (
    <PageShell>
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.95fr)_minmax(0,0.9fr)] lg:items-stretch">

        <div className="order-2 lg:order-1">
          <HeroCard activeFocus={activeFocus} connectItems={SOCIAL_LINKS} />
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <PortraitCard />
        </div>

      </div>
      <SummaryGrid
        experience={experienceItems[0]}
        project={projects[0]}
      />
    </PageShell>
  )
}
