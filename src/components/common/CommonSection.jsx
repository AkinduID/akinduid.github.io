export function SectionCard({ title, children, className = "" }) {
  return (
    <section className={`theme-card rounded-3xl p-5 sm:p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-[var(--theme-text-primary)]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export function SectionHeading({ title }) {
  return <h3 className="text-base font-semibold text-[var(--theme-text-primary)]">{title}</h3>
}

export function MetaCard({ title, meta }) {
  return (
    <article className="theme-card-soft rounded-2xl p-4">
      <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{title}</p>
      <p className="mt-1 text-sm leading-6 theme-text-secondary">{meta}</p>
    </article>
  )
}

export function EducationCard({ logo, institution, degree, year, details }) {
  return (
    <article className="theme-card-soft rounded-2xl p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-secondary-background)] p-2">
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

export function ExperienceCard({ logo, role, company, team, date, tasks, tags }) {
  return (
    <article className="theme-card-soft rounded-2xl p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--theme-secondary-background)] p-2">
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

export function VolunteeringCard({ logo, organization, details }) {
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

export default SectionCard
