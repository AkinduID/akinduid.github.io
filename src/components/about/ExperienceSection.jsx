import { Briefcase } from "lucide-react"
import SectionCard from "../common/SectionCard"
import ExperienceCard from "../common/ExperienceCard"

/**
 * ExperienceSection renders the Experience block on the About page as a
 * vertical list of ExperienceCard entries.
 *
 * @param {object} props
 * @param {Array<object>} props.items - Experience entries to render (see ExperienceCard for shape).
 * @returns {JSX.Element}
 */
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
