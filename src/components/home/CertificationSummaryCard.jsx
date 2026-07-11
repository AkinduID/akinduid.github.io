import CommonCard from "../common/CommonCard"

/**
 * CertificationSummaryCard shows a condensed preview of a featured
 * certification.
 *
 * Note: this component is not currently rendered by SummaryGrid — see the
 * project README for details on re-enabling it.
 *
 * @param {object} props
 * @param {{title: string, meta: string}} props.certification - Featured certification entry to summarize.
 * @returns {JSX.Element}
 */
export default function CertificationSummaryCard({ certification }) {
  return (
    <CommonCard className="rounded-3xl !p-5">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Currently Expanding Skills In</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      <div className="mt-3 px-1">
        <article>
          <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{certification.title}</p>
          <p className="mt-1 text-sm leading-6 theme-text-secondary">{certification.meta}</p>
        </article>
      </div>
    </CommonCard>
  )
}