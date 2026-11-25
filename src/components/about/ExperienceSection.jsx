import SectionBlock from "../common/SectionBlock"
import ExperienceCard from "../common/ExperienceCard"

/**
 * ExperienceSection renders the Experience block on the About page as a list
 * of ExperienceCard rows.
 *
 * @param {object} props
 * @param {Array<object>} props.items - Experience entries to render (see ExperienceCard for shape).
 * @returns {JSX.Element}
 */
export default function ExperienceSection({ items }) {
  return (
    <SectionBlock title="Experience">
      {items.map((item) => (
        <ExperienceCard key={item.company} {...item} />
      ))}
    </SectionBlock>
  )
}
