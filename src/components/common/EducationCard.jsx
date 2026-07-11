/**
 * EducationCard renders a single education history entry, including
 * institution logo, degree details, graduation year, and supporting details.
 *
 * @param {object} props
 * @param {string} props.logo - Image source for the institution logo.
 * @param {string} props.institution - Name of the institution.
 * @param {string} props.degree - Degree or programme title.
 * @param {string} props.year - Year (or year range) badge text.
 * @param {Array<string|{label: string, value: string}>} props.details - Bullet list of supporting details. Strings render as-is; objects render as "label - value".
 * @returns {JSX.Element}
 */
export default function EducationCard({ logo, institution, degree, year, details }) {
  return (
    <article className="theme-card-soft rounded-2xl p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-card-background)] p-2">
          <img src={logo} alt={institution} loading="lazy" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{institution}</p>
              <p className="mt-1 text-sm theme-text-secondary">{degree}</p>
            </div>
            <span className="theme-pill-active rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
              {year}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-6 theme-text-secondary">
            {details.map((detail) => (
              <li key={typeof detail === "string" ? detail : detail.label} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--theme-accent)]" />
                {typeof detail === "string" ? (
                  <span>{detail}</span>
                ) : (
                  <span>
                    <strong>{detail.label}</strong> - {detail.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
