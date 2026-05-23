import { SectionCard, EducationCard } from "./CommonSection"

function CompactCert({ title, meta }) {
  return (
    <div className="theme-card-soft rounded-md px-3 py-2 text-xs">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-[11px] theme-text-muted">{meta}</div>
    </div>
  )
}

export default function EducationSection({ items, certifications = [] }) {
  return (
    <SectionCard title="Education">
      <div className="space-y-4">
        {items.map((item) => (
          <EducationCard key={item.institution} {...item} />
        ))}
      </div>

      {certifications.length > 0 ? (
        <div className="mt-6">
          <h3 className="text-base font-semibold text-[var(--theme-text-primary)]">Certifications</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {certifications
              .flatMap((group) => group.items || [])
              .map((item) => (
                <CompactCert key={item.title} title={item.title} meta={item.meta} />
              ))}
          </div>
        </div>
      ) : null}
    </SectionCard>
  )
}
