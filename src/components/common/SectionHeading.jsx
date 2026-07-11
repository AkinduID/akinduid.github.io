/**
 * SectionHeading renders a small sub-heading used to label a group of items
 * within a SectionCard (e.g. an award category inside the Achievements section).
 *
 * @param {object} props
 * @param {string} props.title - Heading text to display.
 * @returns {JSX.Element}
 */
export default function SectionHeading({ title }) {
  return <h3 className="text-base font-semibold text-[var(--theme-text-primary)]">{title}</h3>
}
