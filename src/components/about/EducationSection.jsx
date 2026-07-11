import { GraduationCap } from "lucide-react"
import { SectionCard, EducationCard } from "../common/CommonSection"

export default function EducationSection({ items }) {
  return (
    <SectionCard title="Education" icon={GraduationCap}>
      <div className="space-y-4">
        {items.map((item) => (
          <EducationCard key={item.institution} {...item} />
        ))}
      </div>
    </SectionCard>
  )
}
