import { ExternalLink } from "lucide-react"

/**
 * ProjectSummaryCard shows a condensed preview of the featured project on the
 * Home page, as a labelled row with its title, type, description and link.
 *
 * @param {object} props
 * @param {{title: string, link?: string, date: string, type: string, description?: string}} props.project - Featured project entry to summarize.
 * @returns {JSX.Element}
 */
export default function ProjectSummaryCard({ project }) {
  return (
    <section>
      <h2 className="op-section-label">Featured Project</h2>
      <div className="op-hairline mb-1 mt-2.5" />

      <div className="op-row">
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <p className="op-row-title">
              {project.title} - {project.type}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View ${project.title}`}
                className="shrink-0 pt-0.5 text-[var(--op-faint)] transition-colors hover:text-[var(--op-fg)]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          <p className="op-row-sub">{project.date}</p>

          {project.description && (
            <p className="mt-2 text-[0.78rem] leading-6 text-[var(--op-muted)]">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
