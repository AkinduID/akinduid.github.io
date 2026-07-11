import PageShell from "../components/common/PageShell"
import ToolboxSection from "../components/toolbox/ToolboxSection"
import { toolboxSections } from "../data/toolbox"

/**
 * Toolbox renders the Toolbox page: a responsive grid of tool/technology
 * category cards (programming languages, ML, embedded, devops, etc.).
 *
 * @returns {JSX.Element}
 */
export default function Toolbox() {
  return (
    <PageShell description="Tools, technologies, and frameworks I use to build and develop projects.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {toolboxSections.map((section) => (
          <ToolboxSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </PageShell>
  )
}