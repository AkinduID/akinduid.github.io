import PageShell from "../components/common/PageShell"
import TopicsSummary from "../components/about/TopicsSummary"
import PersonalStatementSection from "../components/about/PersonalStatementSection"
import EducationSection from "../components/about/EducationSection"
import ExperienceSection from "../components/about/ExperienceSection"
import CertificationsSection from "../components/about/CertificationsSection"
import AchievementsSection from "../components/about/AchievementsSection"
import VolunteeringSection from "../components/about/VolunteeringSection"
import { educationItems, experienceItems, achievementSections, certifications, volunteeringSections } from "../data/about"

export default function About() {
  return (
    <PageShell description="Education, experience, achievements, and activities that define my journey and growth.">
      <div className="xl:grid xl:gap-6 xl:grid-cols-[auto_1fr]">
        {/* Left Column — Sticky Topics Summary */}
        <div className="hidden xl:sticky xl:top-28 xl:self-start xl:block">
          <TopicsSummary />
        </div>

        {/* Right Column — All Sections */}
        <div className="grid gap-6">
          <div id="about-me" className="scroll-mt-28">
            <PersonalStatementSection />
          </div>

          <div id="education" className="scroll-mt-28">
            <EducationSection items={educationItems} />
          </div>

          <div id="experience" className="scroll-mt-28">
            <ExperienceSection items={experienceItems} />
          </div>

          <div id="certifications" className="scroll-mt-28">
            <CertificationsSection certifications={certifications} />
          </div>

          <div id="achievements" className="scroll-mt-28">
            <AchievementsSection sections={achievementSections} />
          </div>

          <div id="volunteering" className="scroll-mt-28">
            <VolunteeringSection sections={volunteeringSections} />
          </div>
        </div>
      </div>
    </PageShell>
  )
}