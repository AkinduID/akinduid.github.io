/**
 * VolunteeringCard renders a single volunteering or extracurricular entry,
 * including the organization logo, name, and a list of contribution details.
 *
 * @param {object} props
 * @param {string} props.logo - Image source for the organization logo.
 * @param {string} props.organization - Organization or club name.
 * @param {string[]} props.details - Bullet list describing the role or contributions.
 * @returns {JSX.Element}
 */
export default function VolunteeringCard({ logo, organization, details }) {
  return (
    <article className="theme-card-soft rounded-2xl p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-card-background)] p-2">
          <img
            src={logo}
            alt={organization}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-[var(--theme-text-primary)]">
            {organization}
          </h3>

          <ul className="mt-3 space-y-2">
            {details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-3 text-sm leading-6 theme-text-secondary"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--theme-accent)]" />

                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
