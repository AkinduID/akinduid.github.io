import SectionBlock from "../common/SectionBlock"
import VolunteeringCard from "../common/VolunteeringCard"

/**
 * VolunteeringSection renders the Volunteering and Extra-curricular
 * Activities block on the About page as a list of VolunteeringCard rows.
 *
 * @param {object} props
 * @param {Array<object>} props.sections - Volunteering entries to render (see VolunteeringCard for shape).
 * @returns {JSX.Element}
 */
export default function VolunteeringSection({ sections }) {
  return (
    <SectionBlock title="Volunteering & Extra-curricular Activities">
      {sections.map((section) => (
        <VolunteeringCard key={section.organization} {...section} />
      ))}
    </SectionBlock>
  )
}
