import CommonCard from "../common/CommonCard"

/**
 * ExperienceSummaryCard shows a condensed preview of the current role on
 * the Home page summary grid.
 *
 * @param {object} props
 * @param {{logo?: string, role: string, team?: string, company: string}} props.experience - Featured experience entry to summarize.
 * @returns {JSX.Element}
 */
export default function ExperienceSummaryCard({ experience }) {
  return (
    <CommonCard className="rounded-3xl !p-5">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Current Role</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      <div className="mt-3 px-1">
        <article>
          <div className="flex items-start gap-4">
            {experience.logo && (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-card-background)] p-2">
                <img src={experience.logo} alt={experience.company} loading="lazy" className="h-full w-full object-contain" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{experience.role}</p>
                  <p className="mt-1 text-sm theme-text-secondary">{experience.company}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </CommonCard>
  )
}
