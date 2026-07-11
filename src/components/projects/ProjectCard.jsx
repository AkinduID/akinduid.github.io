/**
 * ProjectCard renders a single engineering project as a card with an image,
 * title, date/type meta line, description, tags, and an optional external
 * link.
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
 * @param {string} [props.animationDelay] - CSS animation-delay value for staggered entrance.
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
      className="project-card-enter theme-card theme-card-hover group overflow-hidden rounded-[1.0rem]"
      data-category={category}
      style={{ animationDelay: animationDelay }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--theme-secondary-background)]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent dark:from-slate-950/45" />
      </div>

      <div className="flex h-full flex-col p-4">
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--theme-text-primary)]">{title}</h3>
          <p className="theme-hero-accent text-xs font-semibold">
            {date} <span className="text-[var(--theme-text)]">|</span> {type}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 theme-text-secondary">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="theme-tag rounded-full px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold theme-accent transition-colors duration-150 hover:text-[var(--theme-accent-hover)]"
          >
            View on GitHub
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </article>
  )
}