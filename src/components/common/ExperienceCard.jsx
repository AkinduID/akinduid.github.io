/**
 * ExperienceCard renders a single work-experience entry as a hairline-
 * separated row: company logo, role, company and team, date, task
 * highlights, and technology tags.
 *
 * @param {object} props
 * @param {string} props.logo - Image source for the company/organization logo.
 * @param {string} props.role - Job title held.
 * @param {string} props.company - Company or organization name.
 * @param {string} props.team - Team or department name.
 * @param {string} props.date - Date range text.
 * @param {string[]} props.tasks - Responsibilities or highlights.
 * @param {string[]} props.tags - Technology or skill tags associated with the role.
 * @returns {JSX.Element}
 */
export default function ExperienceCard({ logo, role, company, team, date, tasks, tags }) {
  return (
    <article className="op-row">
      <div className="op-logo">
        <img src={logo} alt={company} loading="lazy" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="op-row-title">{role}</p>
            <p className="op-row-sub">
              {company}
              {team ? ` · ${team}` : ""}
            </p>
          </div>
          <span className="op-row-meta">{date}</span>
        </div>

        <ul className="op-list">
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="op-chip op-chip-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
