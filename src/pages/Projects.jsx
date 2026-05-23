import { useMemo, useState } from "react"
import PageShell from "../components/common/PageShell"
import ProjectCard from "../components/projects/ProjectCard"
import {projects, filters} from "../data/projects"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects
    }

    return projects.filter((project) => project.category.includes(filter))
  }, [filter])

  return (
    <PageShell>
      <div className="space-y-6">

        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className={`theme-pill rounded-full px-4 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-200 ${
                filter === item.key ? "theme-pill-active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div key={filter} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={`${filter}-${project.title}`}
              animationDelay={`${Math.min(filteredProjects.indexOf(project) * 70, 280)}ms`}
              {...project}
            />
          ))}
        </div>
      </div>
    </PageShell>
  )
}