export default function ProjectCard({ image, title, date, type, description, tags, link, category }) {
  return (
    <article
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1 hover:border-[#8be9ff]/30"
      data-category={category}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
      </div>

      <div className="flex h-full flex-col p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8be9ff]/85">
            {date} <span className="text-white/35">|</span> {type}
          </p>
        </div>

        <p className="mt-4 text-sm leading-7 text-white/75">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
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
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8be9ff] transition-colors duration-150 hover:text-[#dffcff]"
          >
            View on GitHub
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </article>
  )
}