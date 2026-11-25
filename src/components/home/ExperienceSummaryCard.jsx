/**
 * ExperienceSummaryCard shows a condensed preview of the current role on the
 * Home page, as a labelled row with the company logo.
 *
 * @param {object} props
 * @param {{logo?: string, role: string, team?: string, company: string}} props.experience - Featured experience entry to summarize.
 * @returns {JSX.Element}
 */
export default function ExperienceSummaryCard({ experience }) {
  return (
    <section>
      <h2 className="op-section-label">Current Role</h2>
      <div className="op-hairline mb-1 mt-2.5" />

      <div className="op-row">
        {experience.logo && (
          <div className="op-logo">
            <img src={experience.logo} alt={experience.company} loading="lazy" />
          </div>
        )}
        <div className="min-w-0">
          <p className="op-row-title">
            {experience.role}
            {experience.team ? ` - ${experience.team}` : ""}
          </p>
          <p className="op-row-sub">{experience.company}</p>
        </div>
      </div>
    </section>
  )
}
