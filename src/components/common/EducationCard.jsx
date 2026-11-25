/**
 * EducationCard renders a single education history entry as a hairline-
 * separated row: institution logo, institution and degree, year, and a list
 * of supporting details.
 *
 * @param {object} props
 * @param {string} props.logo - Image source for the institution logo.
 * @param {string} props.institution - Name of the institution.
 * @param {string} props.degree - Degree or programme title.
 * @param {string} props.year - Year (or year range) text.
 * @param {Array<string|{label: string, value: string}>} props.details - Supporting details. Strings render as-is; objects render as "label - value".
 * @returns {JSX.Element}
 */
export default function EducationCard({ logo, institution, degree, year, details }) {
  return (
    <article className="op-row">
      <div className="op-logo">
        <img src={logo} alt={institution} loading="lazy" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="op-row-title">{institution}</p>
            <p className="op-row-sub">{degree}</p>
          </div>
          <span className="op-row-meta">{year}</span>
        </div>

        <ul className="op-list">
          {details.map((detail) => (
            <li key={typeof detail === "string" ? detail : detail.label}>
              {typeof detail === "string" ? (
                detail
              ) : (
                <>
                  <strong className="font-semibold text-[var(--op-fg-2)]">{detail.label}</strong> -{" "}
                  {detail.value}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
