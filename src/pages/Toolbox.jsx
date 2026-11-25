import PageShell from "../components/common/PageShell"
import ToolboxSection from "../components/toolbox/ToolboxSection"
import { toolboxSections } from "../data/toolbox"

/**
 * Toolbox renders the Toolbox page: one labelled section per tool/technology
 * category (programming languages, ML, embedded, devops, etc.), each listing
 * its tools as outlined chips.
 *
 * @returns {JSX.Element}
 */
export default function Toolbox() {
  return (
    <PageShell
      eyebrow="Toolbox"
      title="Tools & technologies"
      description="Tools, technologies, and frameworks I use to build and develop projects."
    >
      <div className="grid gap-10">
        {toolboxSections.map((section) => (
          <ToolboxSection key={section.title} title={section.title} items={section.items} />
        ))}
      </div>
    </PageShell>
  )
}
