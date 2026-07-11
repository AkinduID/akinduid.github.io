import { ExternalLink, Cpu } from "lucide-react"
import CommonCard from "../common/CommonCard"

/**
 * ProjectSummaryCard shows a condensed preview of a featured project.
 *
 * Note: this component is not currently rendered by SummaryGrid — see the
 * project README for details on re-enabling it.
 *
 * @param {object} props
 * @param {{image?: string, title: string, link?: string, date: string, type: string, description?: string}} props.project - Featured project entry to summarize.
 * @returns {JSX.Element}
 */
export default function ProjectSummaryCard({ project }) {
  return (
    <CommonCard className="rounded-3xl !p-5">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Featured Project</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      {/* Two-Column Layout Container */}
      <div className="mt-4 flex items-start gap-4 px-1">
        
        {/* Column 1: Engineering Icon */}
        <div className="flex h-38 w-38 items-center justify-center rounded-xl text-[var(--theme-accent)]">
          <Cpu className="h-12 w-12" />
        </div>

        {/* Column 2: Content Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-bold leading-5 text-[var(--theme-text-primary)] break-words">
              {project.title} - {project.type}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View ${project.title}`}
                className="shrink-0 pt-0.5"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[var(--theme-text-secondary)] transition-colors hover:text-[var(--theme-accent)]" />
              </a>
            )}
          </div>
          
          {project.description && (
            <p className="theme-text-secondary text-[10px] font-semibold leading-normal">
              {project.description}
            </p>
          )}
        </div>

      </div>
    </CommonCard>
  )
}