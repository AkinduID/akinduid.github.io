import EducationSummaryCard from "./EducationSummaryCard"
import ExperienceSummaryCard from "./ExperienceSummaryCard"
import ProjectSummaryCard from "./ProjectSummaryCard"

/**
 * SummaryGrid lays out the at-a-glance summary cards shown on the Home page.
 *
 * Only education and experience are currently wired up to the grid. The
 * remaining summary cards (project, certification, achievement,
 * volunteering, skills, gallery) exist as standalone components under
 * `src/components/home/` but are not yet included in this layout — see the
 * project README for details on re-enabling them.
 *
 * @param {object} props
 * @param {object} props.project - Data for the featured project entry.
 * @param {object} props.experience - Data for the featured experience entry.
 * @returns {JSX.Element}
 */
export default function SummaryGrid({ project, experience }) {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {/* Row 1: Experience (Wide) | Education (Narrow) */}
      <div className="grid gap-6 sm:grid-cols-12 items-start">
        <div className="sm:col-span-4">

          <ExperienceSummaryCard experience={experience} />
          {/* <EducationSummaryCard education={education} /> */}
          
        </div>
        <div className="sm:col-span-8">
          <ProjectSummaryCard project={project} />
        </div>
      </div>
    </div>
  )
}
