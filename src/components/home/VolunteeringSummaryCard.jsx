import CommonCard from "../common/CommonCard"

/**
 * VolunteeringSummaryCard shows a condensed preview of a featured
 * volunteering or extracurricular entry.
 *
 * Note: this component is not currently rendered by SummaryGrid — see the
 * project README for details on re-enabling it.
 *
 * @param {object} props
 * @param {{logo?: string, organization: string, details: string[]}} props.volunteering - Featured volunteering entry to summarize.
 * @returns {JSX.Element}
 */
export default function VolunteeringSummaryCard({ volunteering }) {
  return (
    <CommonCard className="rounded-3xl !p-5">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Leading & Contributing Through</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      <div className="mt-3 px-1">
        <article>
          <div className="flex items-start gap-4">
            {volunteering.logo && (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-card-background)] p-2">
                <img
                  src={volunteering.logo}
                  alt={volunteering.organization}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-[var(--theme-text-primary)]">
                {volunteering.organization}
              </h3>

              <ul className="mt-3 space-y-2">
                {volunteering.details.map((detail) => (
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
      </div>
    </CommonCard>
  )
}