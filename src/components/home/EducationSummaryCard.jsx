import CommonCard from "../common/CommonCard"

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
                <span className="theme-pill-active rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
                  {education.year}
                </span>
              </div>

              {/* <ul className="mt-4 space-y-2 text-sm leading-6 theme-text-secondary">
                {education.details.map((detail) => (
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
              </ul> */}
            </div>
          </div>
        </article>
      </div>
    </CommonCard>
  )
}