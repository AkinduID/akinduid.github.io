import { SectionCard, SectionHeading, MetaCard } from "../common/CommonSection"

export default function AchievementsSection({ sections }) {
  return (
    <SectionCard title="Achievements">
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            {section.title === "Awards & Honors" ? null : <SectionHeading title={section.title} />}

            {section.items ? (
              <div className="grid gap-4 grid-cols-2">
                {section.items.map((item) => (
                  <MetaCard key={item.title} title={item.title} meta={item.meta} />
                ))}
              </div>
            ) : null}

            {section.groups ? (
              <div className="space-y-5">
                {section.groups.map((group) => (
                  <div key={group.title} className="space-y-3">
                    <h4 className="theme-kicker text-sm font-semibold tracking-[0.18em]">{group.title}</h4>
                    <div className="grid gap-4 grid-cols-2">
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
    </SectionCard>
  )
}
