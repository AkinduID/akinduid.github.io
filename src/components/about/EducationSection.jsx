import { GraduationCap } from "lucide-react"
import SectionCard from "../common/SectionCard"
import EducationCard from "../common/EducationCard"

/**
 * EducationSection renders the Education block on the About page as a
 * vertical list of EducationCard entries.
 *
 * @param {object} props
 * @param {Array<object>} props.items - Education entries to render (see EducationCard for shape).
 * @returns {JSX.Element}
 */
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
