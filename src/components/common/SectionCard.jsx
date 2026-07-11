/**
 * SectionCard renders a titled, icon-prefixed content section used to group
 * related content blocks on pages such as About (e.g. Education, Experience).
 *
 * @param {object} props
 * @param {string} props.title - Heading text displayed next to the icon.
 * @param {React.ComponentType} [props.icon] - Optional icon component (e.g. a lucide-react icon) rendered before the title. Falls back to a small accent dot when omitted.
 * @param {React.ReactNode} props.children - Section body content.
 * @param {string} [props.className] - Additional class names appended to the section wrapper.
 * @returns {JSX.Element}
 */
export default function SectionCard({ title, icon: Icon, children, className = "" }) {
  return (
    <section className={`theme-card rounded-3xl p-5 sm:p-6 ${className}`}>
      <div className="flex items-center gap-3">
        {Icon ? (
          <Icon className="h-5 w-5 shrink-0 text-[var(--theme-accent)]" strokeWidth={2.25} />
        ) : (
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--theme-accent)]" />
        )}
        <h2 className="text-lg font-semibold text-[var(--theme-text-primary)]">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  )
}
