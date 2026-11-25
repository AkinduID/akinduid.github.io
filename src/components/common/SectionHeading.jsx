/**
 * SectionHeading renders a small sub-heading used to label a group of items
 * within a SectionBlock (e.g. an award category inside Achievements).
 *
 * @param {object} props
 * @param {string} props.title - Heading text to display.
 * @returns {JSX.Element}
 */
export default function SectionHeading({ title }) {
  return <h3 className="text-sm font-semibold text-[var(--op-fg)]">{title}</h3>
}
