import React from "react"
import { SectionCard, SectionHeading, MetaCard } from "./CommonSection"

export default function AchievementsSection({ sections }) {
  return (
    <SectionCard title="Achievements">
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            {section.title === "Awards & Honors" ? null : <SectionHeading title={section.title} />}

            {section.items ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item) => (
                  <MetaCard key={item.title} title={item.title} meta={item.meta} />
                ))}
              </div>
            ) : null}

            {section.groups ? (
              <div className="space-y-5">
                {section.groups.map((group) => (
                  <div key={group.title} className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8be9ff]/80">{group.title}</h4>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
