import ProjectSummaryCard from "./ProjectSummaryCard"
import EducationSummaryCard from "./EducationSummaryCard"
import ExperienceSummaryCard from "./ExperienceSummaryCard"
import CertificationSummaryCard from "./CertificationSummaryCard"
import AchievementSummaryCard from "./AchievementSummaryCard"
import VolunteeringSummaryCard from "./VolunteeringSummaryCard"
import SkillsSummaryCard from "./SkillsSummaryCard"
import GallerySummaryCard from "./GallerySummaryCard"

export default function SummaryGrid({
  project,
  education,
  experience,
  certification,
  achievement,
  volunteering,
  skills,
  gallery,
}) {
  return (
    <div className="mt-6 flex flex-col gap-6">
      
      {/* Row 1: Experience (Wide) | Education (Narrow) */}
      <div className="grid gap-6 sm:grid-cols-3 items-start">
        <div>
          <EducationSummaryCard education={education} />
        </div>
        <div className="sm:col-span-2">
          <ExperienceSummaryCard experience={experience} />
        </div>
      </div>

      {/* Row 2: Project (Wide) | Skills (Narrow) */}
      <div className="grid gap-6 sm:grid-cols-2 items-start">
        <div className="sm:col-span-1">
          <ProjectSummaryCard project={project} />
        </div>

        <div>
          <SkillsSummaryCard skills={skills} />
        </div>
      </div>

      {/* Row 3: (Certification + Achievement + Volunteering) Layout | Gallery */}
      <div className="grid gap-6 sm:grid-cols-3 items-start">
        {/* Column 1: Certification, Achievement, and Volunteering stacked vertically */}
        <div className="flex flex-col gap-6">
          <CertificationSummaryCard certification={certification} />
          <AchievementSummaryCard achievement={achievement} />
          <VolunteeringSummaryCard volunteering={volunteering} />
        </div>

        {/* Column 2-3: Gallery (Wider) */}
        <div className="sm:col-span-2">
          <GallerySummaryCard gallery={gallery} />
        </div>
      </div>

    </div>
  )
}