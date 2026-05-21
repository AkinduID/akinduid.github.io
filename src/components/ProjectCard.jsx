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
      className="project-card-enter group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[#8be9ff]/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
      data-category={category}
      style={{ animationDelay: animationDelay }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-black/20">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
      </div>

      <div className="flex h-full flex-col p-4">
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8be9ff]/85">
            {date} <span className="text-white/35">|</span> {type}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/70"
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
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8be9ff] transition-colors duration-150 hover:text-[#dffcff]"
          >
            View on GitHub
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </article>
  )
}