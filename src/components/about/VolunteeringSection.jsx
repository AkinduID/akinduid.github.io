import { HandHeart } from "lucide-react"
import { SectionCard, VolunteeringCard } from "../common/CommonSection"

export default function VolunteeringSection({ sections }) {
  return (
    <SectionCard title="Volunteering and Extra-curricular Activities" icon={HandHeart}>
      <div className="grid gap-4 xl:grid-cols-2">
        {sections.map((section) => (
          <VolunteeringCard
            key={section.organization}
            {...section}
          />
        ))}
      </div>
    </SectionCard>
  )
}