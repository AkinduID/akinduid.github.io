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
      className="project-card-enter theme-card theme-card-hover group overflow-hidden rounded-[1.5rem]"
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
          <p className="theme-kicker text-xs font-medium tracking-[0.18em]">
            {date} <span className="text-[var(--theme-text-muted)]">|</span> {type}
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