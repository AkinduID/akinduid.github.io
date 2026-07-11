/**
 * ExperienceCard renders a single work-experience entry, including
 * company logo, role details, task highlights, and technology tags.
 *
 * @param {object} props
 * @param {string} props.logo - Image source for the company/organization logo.
 * @param {string} props.role - Job title held.
 * @param {string} props.company - Company or organization name.
 * @param {string} props.team - Team or department name.
 * @param {string} props.date - Date range badge text.
 * @param {string[]} props.tasks - Bullet list of responsibilities or highlights.
 * @param {string[]} props.tags - Technology or skill tags associated with the role.
 * @returns {JSX.Element}
 */
export default function ExperienceCard({ logo, role, company, team, date, tasks, tags }) {
  return (
    <article className="theme-card-soft rounded-2xl p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-card-background)] p-2">
          <img src={logo} alt={company} loading="lazy" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{role}</p>
              <p className="mt-1 text-sm theme-text-secondary">{company}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--theme-accent)]">{team}</p>
            </div>
            <span className="theme-pill-active rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
              {date}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-6 theme-text-secondary">
            {tasks.map((task) => (
              <li key={task} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--theme-accent)]" />
                <span>{task}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="theme-tag rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
