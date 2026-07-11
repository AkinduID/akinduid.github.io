import CommonCard from "../common/CommonCard"
import { topSkills } from "../../data/toolbox"

/**
 * SkillsSummaryCard shows the top 12 skills in a 4x3 icon grid.
 *
 * Note: this component is not currently rendered by SummaryGrid — see the
 * project README for details on re-enabling it.
 *
 * @returns {JSX.Element}
 */
export default function SkillsSummaryCard() {
  // Take exactly 12 skills to fill a perfect 4x3 grid
  const displayedSkills = topSkills.slice(0, 12);

  return (
    <CommonCard className="!p-5 !rounded-2xl sm:min-h-[25.5rem]">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Top Skills</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      {/* Changed to grid-cols-4 to handle 4 elements per row */}
      <ul className="mt-4 grid grid-cols-4 gap-8">
        {displayedSkills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col items-center gap-2 text-center"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              loading="lazy"
              className="h-14 w-14 shrink-0 object-contain"
            />

            <span className="min-w-0 text-sm font-semibold leading-tight theme-text-secondary">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </CommonCard>
  )
}