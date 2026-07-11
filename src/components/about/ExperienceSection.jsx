import { Briefcase } from "lucide-react"
import { SectionCard, ExperienceCard } from "../common/CommonSection"

export default function ExperienceSection({ items }) {
  return (
    <SectionCard title="Experience" icon={Briefcase}>
      <div className="space-y-4">
        {items.map((item) => (
          <ExperienceCard key={item.company} {...item} />
        ))}
      </div>
    </SectionCard>
  )
}
