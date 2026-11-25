/**
 * MetaCard renders a compact title/meta pair inside a hairline-bordered box,
 * used for lightweight list items such as individual achievements.
 *
 * @param {object} props
 * @param {string} props.title - Primary label for the item.
 * @param {string} props.meta - Supporting detail text shown below the title.
 * @returns {JSX.Element}
 */
export default function MetaCard({ title, meta }) {
  return (
    <article className="rounded-[10px] border border-[var(--op-border)] p-3">
      <p className="text-[0.8rem] font-semibold leading-snug text-[var(--op-fg)]">{title}</p>
      <p className="mt-1 text-xs leading-5 text-[var(--op-muted)]">{meta}</p>
    </article>
  )
}
