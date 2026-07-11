import { HandHeart } from "lucide-react"
import SectionCard from "../common/SectionCard"
import VolunteeringCard from "../common/VolunteeringCard"

/**
 * VolunteeringSection renders the Volunteering and Extra-curricular
 * Activities block on the About page as a responsive grid of
 * VolunteeringCard entries.
 *
 * @param {object} props
 * @param {Array<object>} props.sections - Volunteering entries to render (see VolunteeringCard for shape).
 * @returns {JSX.Element}
 */
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