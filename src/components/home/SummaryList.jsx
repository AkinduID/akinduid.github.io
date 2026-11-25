import ExperienceSummaryCard from "./ExperienceSummaryCard"
import ProjectSummaryCard from "./ProjectSummaryCard"

/**
 * SummaryList renders the at-a-glance summary below the hero: a hairline
 * divider followed by the current role and the featured project, each as a
 * plain labelled row (no card containers).
 *
 * The other summary components under `src/components/home/` (education,
 * certification, achievement, volunteering, skills, gallery, connect) are not
 * wired in yet — add them here to bring them back.
 *
 * @param {object} props
 * @param {object} props.experience - Data for the featured experience entry.
 * @param {object} props.project - Data for the featured project entry.
 * @returns {JSX.Element}
 */
export default function SummaryList({ experience, project }) {
  return (
    <div className="mt-12">
      <div className="op-hairline" />

      <div className="mt-10 grid gap-9">
        <ExperienceSummaryCard experience={experience} />
        <ProjectSummaryCard project={project} />
      </div>
    </div>
  )
}
