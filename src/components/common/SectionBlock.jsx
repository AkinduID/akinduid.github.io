/**
 * SectionBlock renders a titled content section: an uppercase muted label, a
 * hairline rule, then the section body. It replaces the old boxed card —
 * structure comes from the rule and whitespace rather than a container.
 *
 * @param {object} props
 * @param {string} props.title - Section label.
 * @param {React.ReactNode} props.children - Section body content.
 * @param {string} [props.className] - Additional class names appended to the section wrapper.
 * @returns {JSX.Element}
 */
export default function SectionBlock({ title, children, className = "" }) {
  return (
    <section className={className}>
      <h2 className="op-section-label">{title}</h2>
      <div className="op-hairline mb-1 mt-2.5" />
      <div>{children}</div>
    </section>
  )
}
