import CommonCard from "../common/CommonCard"

/**
 * EducationSummaryCard shows a condensed preview of the most recent
 * education entry on the Home page summary grid.
 *
 * @param {object} props
 * @param {{logo?: string, institution: string, degree: string}} props.education - Featured education entry to summarize.
 * @returns {JSX.Element}
 */
export default function EducationSummaryCard({ education }) {
  return (
    <CommonCard className="rounded-3xl !p-5">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Academic Journey</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      <div className="mt-3 px-1">
        <article>
          <div className="flex items-start gap-4">
            {education.logo && (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-card-background)] p-2">
                <img src={education.logo} alt={education.institution} loading="lazy" className="h-full w-full object-contain" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{education.institution}</p>
                  <p className="mt-1 text-sm theme-text-secondary">{education.degree}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </CommonCard>
  )
}