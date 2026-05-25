import PageShell from "../components/common/PageShell"
import EducationSection from "../components/about/EducationSection"
import ExperienceSection from "../components/about/ExperienceSection"
import CertificationsSection from "../components/about/CertificationsSection"
import AchievementsSection from "../components/about/AchievementsSection"
import VolunteeringSection from "../components/about/VolunteeringSection"
import { educationItems, experienceItems, achievementSections, certifications, volunteeringSections } from "../data/about"

export default function About() {
  return (
    <PageShell description="Education, experience, achievements, and activities that define my journey and growth.">
      <div className="grid gap-4 theme-text-secondary">
        <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
          <EducationSection items={educationItems} />
          <ExperienceSection items={experienceItems} />
        </div>

        <div className="h-px w-full bg-[var(--theme-border)] opacity-60" />

        <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <CertificationsSection certifications={certifications} />
          <AchievementsSection sections={achievementSections} />
        </div>

        <div className="h-px w-full bg-[var(--theme-border)] opacity-60" />

        <div>
          <VolunteeringSection sections={volunteeringSections} />
        </div>
      </div>
    </PageShell>
  )
}