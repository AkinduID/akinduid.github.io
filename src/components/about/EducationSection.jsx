import SectionBlock from "../common/SectionBlock"
import EducationCard from "../common/EducationCard"

/**
 * EducationSection renders the Education block on the About page as a list of
 * EducationCard rows.
 *
 * @param {object} props
 * @param {Array<object>} props.items - Education entries to render (see EducationCard for shape).
 * @returns {JSX.Element}
 */
export default function EducationSection({ items }) {
  return (
    <SectionBlock title="Education">
      {items.map((item) => (
        <EducationCard key={item.institution} {...item} />
      ))}
    </SectionBlock>
  )
}
