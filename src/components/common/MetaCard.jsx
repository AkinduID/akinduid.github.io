/**
 * MetaCard renders a compact title/meta pair, used for lightweight list items
 * such as individual achievements.
 *
 * @param {object} props
 * @param {string} props.title - Primary label for the item.
 * @param {string} props.meta - Supporting detail text shown below the title.
 * @returns {JSX.Element}
 */
export default function MetaCard({ title, meta }) {
  return (
    <article className="theme-card-soft rounded-2xl p-4">
      <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{title}</p>
      <p className="mt-1 text-sm leading-6 theme-text-secondary">{meta}</p>
    </article>
  )
}
