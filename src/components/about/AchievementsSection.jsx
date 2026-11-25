import SectionBlock from "../common/SectionBlock"
import SectionHeading from "../common/SectionHeading"
import MetaCard from "../common/MetaCard"

/**
 * AchievementsSection renders the Achievements block on the About page.
 * Each section entry may render either a flat list of items or nested
 * groups of items with their own sub-heading.
 *
 * @param {object} props
 * @param {Array<object>} props.sections - Achievement sections, each with a `title` and either `items` or `groups`.
 * @returns {JSX.Element}
 */
export default function AchievementsSection({ sections }) {
  return (
    <SectionBlock title="Achievements">
      <div className="space-y-6 pt-3">
        {sections.map((section) => (
          <div key={section.title} className="space-y-3">
            {section.title === "Awards & Honors" ? null : <SectionHeading title={section.title} />}

            {section.items ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {section.items.map((item) => (
                  <MetaCard key={item.title} title={item.title} meta={item.meta} />
                ))}
              </div>
            ) : null}

            {section.groups ? (
              <div className="space-y-5">
                {section.groups.map((group) => (
                  <div key={group.title} className="space-y-3">
                    <h4 className="op-eyebrow">{group.title}</h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <MetaCard key={item.title} title={item.title} meta={item.meta} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}
