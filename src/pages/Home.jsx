import { useEffect, useState } from "react"

import PageShell from "../components/common/PageShell"

import HeroCard from "../components/home/HeroCard"
import PortraitCard from "../components/home/PortraitCard"
import ConnectCard from "../components/home/ConnectCard"
import SummaryGrid from "../components/home/SummaryGrid"

import { connectItems, focusAreas } from "../data/home"
import { projects } from "../data/projects"
import {
  educationItems,
  experienceItems,
  certifications,
  achievementSections,
  volunteeringSections,
} from "../data/about"

export default function Home() {
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFocusIndex(
        (currentIndex) => (currentIndex + 1) % focusAreas.length
      )
    }, 2400)

    return () => window.clearInterval(timer)
  }, [])

  const activeFocus = focusAreas[focusIndex]

  return (
    <PageShell>
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.95fr)_minmax(0,0.9fr)] lg:items-stretch">
        
        <div className="order-2 lg:order-1">
          <HeroCard activeFocus={activeFocus} />
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <PortraitCard />
        </div>

      </div>

      <ConnectCard connectItems={connectItems} />

      <SummaryGrid
        experience={experienceItems[0]}
        project={projects[0]}
        education={educationItems[0]}
        certification={certifications.flatMap((g) => g.items)[0]}
        achievement={achievementSections.flatMap((s) => s.items)[0]}
        volunteering={volunteeringSections[0]}
      />
    </PageShell>
  )
}