import PageShell from "../components/common/PageShell"
import TopicsSummary from "../components/about/TopicsSummary"
import EducationSection from "../components/about/EducationSection"
import ExperienceSection from "../components/about/ExperienceSection"
import CertificationsSection from "../components/about/CertificationsSection"
import AchievementsSection from "../components/about/AchievementsSection"
import VolunteeringSection from "../components/about/VolunteeringSection"
import { educationItems, experienceItems, achievementSections, certifications, volunteeringSections } from "../data/about"

/**
 * About renders the About page: a sticky identity + table-of-contents column
 * beside the education, experience, certifications, achievements, and
 * volunteering sections. Sections are separated by hairlines, not cards.
 *
 * @returns {JSX.Element}
 */
export default function About() {
  return (
    <PageShell
      eyebrow="About"
      title="Education, experience & more"
      description="Education, experience, achievements, and activities that define my journey and growth."
      width="medium"
    >
      <div className="lg:grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
        {/* Left column: sticky identity block + table of contents (desktop only) */}
        <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <TopicsSummary />
        </aside>

        {/* Right column: all sections */}
        <div className="grid gap-12">
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
