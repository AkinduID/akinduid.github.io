import { ExternalLink } from "lucide-react"
import CommonCard from "../common/CommonCard"

export default function ProjectSummaryCard({ project }) {
  return (
    <CommonCard className="rounded-3xl !p-5 sm:min-h-[25rem]">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Featured Project</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      <div className="mt-3 space-y-2 px-1">
        {project.image && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[var(--theme-secondary-background)]">
            <div className="absolute inset-0 bg-black/0 dark:bg-black/25" />
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-5 text-[var(--theme-text-primary)]">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`View ${project.title}`}
            >
              <ExternalLink className="h-3.5 w-3.5 text-[var(--theme-text-secondary)] transition-colors hover:text-[var(--theme-accent)]" />
            </a>
          )}
        </div>
        <p className="theme-hero-accent text-[10px] font-semibold">
          {project.date} <span className="text-[var(--theme-text)]">|</span> {project.type}
        </p>
        {/* <p className="line-clamp-2 text-xs leading-5 text-[var(--theme-text-secondary)]">
          {project.description}
        </p> */}
        {/* <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="theme-tag rounded-full px-2 py-0.5 text-[10px] font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] text-[var(--theme-text-tertiary)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div> */}
      </div>
    </CommonCard>
  )
}