import { SectionCard, VolunteeringCard } from "../common/CommonSection"

export default function VolunteeringSection({ sections }) {
  return (
    <SectionCard title="Volunteering and Extra-curricular Activities">
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              {section.items.map((item) => (
                <VolunteeringCard key={item.organization} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
