import { useMemo, useState } from "react"
import PageShell from "../components/common/PageShell"
import ProjectCard from "../components/projects/ProjectCard"
import { projects, PROJECT_FILTERS } from "../data/projects"

/**
 * Projects renders the Projects page: a row of category filters above a
 * list of engineering projects, each shown as a thumbnail + description row.
 *
 * @returns {JSX.Element}
 */
export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects
    }

    return projects.filter((project) => project.category.includes(filter))
  }, [filter])

  return (
    <PageShell
      eyebrow="Work"
      title="Projects"
      description="Engineering projects I have built or contributed to, covering a range of technical domains."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-1.5">
        {PROJECT_FILTERS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setFilter(item.key)}
            aria-pressed={filter === item.key}
            className={`op-filter ${filter === item.key ? "op-filter-active" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div key={filter}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`${filter}-${project.title}`}
            animationDelay={`${Math.min(index * 60, 240)}ms`}
            {...project}
          />
        ))}
      </div>
    </PageShell>
  )
}
