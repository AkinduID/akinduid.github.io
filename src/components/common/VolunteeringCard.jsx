/**
 * VolunteeringCard renders a single volunteering or extracurricular entry as
 * a hairline-separated row: organization logo, name, and contribution
 * details.
 *
 * @param {object} props
 * @param {string} props.logo - Image source for the organization logo.
 * @param {string} props.organization - Organization or club name.
 * @param {string[]} props.details - Descriptions of the role or contributions.
 * @returns {JSX.Element}
 */
export default function VolunteeringCard({ logo, organization, details }) {
  return (
    <article className="op-row">
      <div className="op-logo">
        <img src={logo} alt={organization} loading="lazy" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="op-row-title">{organization}</p>

        <ul className="op-list">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
