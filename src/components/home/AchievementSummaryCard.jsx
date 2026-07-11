import CommonCard from "../common/CommonCard"

export default function AchievementSummaryCard({ achievement }) {
  return (
    <CommonCard className="rounded-3xl !p-5">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Recent Milestone</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      <div className="mt-3 px-1">
        <article>
          <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{achievement.title}</p>
          <p className="mt-1 text-sm leading-6 theme-text-secondary">{achievement.meta}</p>
        </article>
      </div>
    </CommonCard>
  )
}