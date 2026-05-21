import React from "react"

export function SectionCard({ title, children, className = "" }) {
  return (
    <section className={`rounded-3xl backdrop-blur-sm border border-white/10 bg-black/20 p-5 sm:p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export function SectionHeading({ title }) {
  return <h3 className="text-base font-semibold text-white">{title}</h3>
}

export function MetaCard({ title, meta }) {
  return (
    <article className="rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm leading-6 text-white/76">{meta}</p>
    </article>
  )
}

export function EducationCard({ logo, institution, degree, year, details }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 p-2">
          <img src={logo} alt={institution} className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-white">{institution}</p>
              <p className="mt-1 text-sm text-white/76">{degree}</p>
            </div>
            <span className="rounded-full border border-[#8be9ff]/20 bg-[#8be9ff]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8be9ff]">
              {year}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-white/74">
            {details.map((detail) => (
              <li key={typeof detail === "string" ? detail : detail.label} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8be9ff]" />
                {typeof detail === "string" ? (
                  <span>{detail}</span>
                ) : (
                  <span>
                    <strong className="text-[#8be9ff]">{detail.label}</strong> - {detail.value}
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
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 p-2">
          <img src={logo} alt={company} className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-white">{role}</p>
              <p className="mt-1 text-sm text-white/76">{company}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8be9ff]/80">{team}</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/78">
              {date}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-white/74">
            {tasks.map((task) => (
              <li key={task} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8be9ff]" />
                <span>{task}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/72">
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
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 p-2">
          <img src={logo} alt={organization} className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{organization}</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/74">
            {details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8be9ff]" />
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
