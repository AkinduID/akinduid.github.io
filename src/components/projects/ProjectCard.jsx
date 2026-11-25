/**
 * ProjectCard renders a single engineering project as a hairline-separated
 * row: a small thumbnail beside the title, date/type meta line, description,
 * technology tags, and an optional external link.
 *
 * @param {object} props
 * @param {string} props.image - Project image source.
 * @param {string} props.title - Project title.
 * @param {string} props.date - Date range text.
 * @param {string} props.type - Project type/context text (e.g. "Final Year Project | Team").
 * @param {string} props.description - Short project description.
 * @param {string[]} props.tags - Technology tags associated with the project.
 * @param {string} [props.link] - Optional external link (e.g. GitHub repo).
 * @param {string} props.category - Category key used for filtering on the Projects page.
 * @param {string} [props.animationDelay] - CSS animation-delay value for the staggered fade-in.
 * @returns {JSX.Element}
 */
export default function ProjectCard({
  image,
  title,
  date,
  type,
  description,
  tags,
  link,
  category,
  animationDelay,
}) {
  return (
    <article
      className="project-card-enter grid gap-4 border-b border-[var(--op-hairline)] py-6 first:pt-0 last:border-b-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-5"
      data-category={category}
      style={{ animationDelay }}
    >
      <div className="op-thumb aspect-[4/3] self-start">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="min-w-0">
        <h3 className="text-[0.9375rem] font-bold tracking-tight text-[var(--op-fg)]">{title}</h3>
        <p className="mt-0.5 text-xs text-[var(--op-faint)]">
          {date} · {type}
        </p>

        <p className="mt-2 text-[0.8125rem] leading-6 text-[var(--op-muted)]">{description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="op-chip op-chip-sm">
              {tag}
            </span>
          ))}
        </div>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="op-text-link mt-3 inline-flex items-center gap-1.5"
          >
            View on GitHub
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </article>
  )
}
