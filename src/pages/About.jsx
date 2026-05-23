import PageShell from "../components/common/PageShell"
import EducationSection from "../components/about/EducationSection"
import ExperienceSection from "../components/about/ExperienceSection"
import AchievementsSection from "../components/about/AchievementsSection"
import VolunteeringSection from "../components/about/VolunteeringSection"
import { educationItems, experienceItems, achievementSections, certifications, volunteeringSections } from "../data/about"

export default function About() {
  return (
    <PageShell description="Education, experience, achievements, and activities that define my journey and growth.">
      <div className="grid gap-4 theme-text-secondary">
        <div className="grid gap-4 lg:grid-cols-2">
          <EducationSection items={educationItems} certifications={certifications} />

          <ExperienceSection items={experienceItems} />
        </div>

        <AchievementsSection sections={achievementSections} />

        <VolunteeringSection sections={volunteeringSections} />
      </div>
    </PageShell>
  )
}