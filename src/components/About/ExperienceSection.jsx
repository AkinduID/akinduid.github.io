import { SectionCard, ExperienceCard } from "../common/CommonSection"

export default function ExperienceSection({ items }) {
  return (
    <SectionCard title="Experience">
      <div className="space-y-4">
        {items.map((item) => (
          <ExperienceCard key={item.company} {...item} />
        ))}
      </div>
    </SectionCard>
  )
}
