import { SectionCard } from "../common/CommonSection"

function CompactCertificationCard({ title, meta }) {
  return (
    <article className="theme-card-soft rounded-2xl px-2.5 py-2">
      <p className="text-xs font-semibold leading-4 text-[var(--theme-text-primary)]">{title}</p>
      <p className="mt-0.5 text-[10px] leading-4 theme-text-secondary">{meta}</p>
    </article>
  )
}

export default function CertificationsSection({ certifications = [] }) {
  const items = certifications.flatMap((group) => group.items || [])

  if (items.length === 0) {
    return null
  }

  return (
    <SectionCard title="Certifications">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <CompactCertificationCard key={item.title} title={item.title} meta={item.meta} />
        ))}
      </div>
    </SectionCard>
  )
}