import { Award } from "lucide-react"
import SectionCard from "../common/SectionCard"

/**
 * CompactCertificationCard renders a single certification as a compact
 * title/meta pair, used only within CertificationsSection's dense grid.
 *
 * @param {object} props
 * @param {string} props.title - Certification title.
 * @param {string} props.meta - Supporting detail text (e.g. issuer, date).
 * @returns {JSX.Element}
 */
function CompactCertificationCard({ title, meta }) {
  return (
    <article className="theme-card-soft rounded-2xl px-2.5 py-2">
      <p className="text-xs font-semibold leading-4 text-[var(--theme-text-primary)]">{title}</p>
      <p className="mt-0.5 text-[10px] leading-4 theme-text-secondary">{meta}</p>
    </article>
  )
}

/**
 * CertificationsSection renders all certifications (flattened out of their
 * groups) in a dense responsive grid. Renders nothing if there are no
 * certifications to show.
 *
 * @param {object} props
 * @param {Array<{items: Array<{title: string, meta: string}>}>} [props.certifications] - Certification groups, each containing an `items` array.
 * @returns {JSX.Element|null}
 */
export default function CertificationsSection({ certifications = [] }) {
  const items = certifications.flatMap((group) => group.items || [])

  if (items.length === 0) {
    return null
  }

  return (
    <SectionCard title="Certifications" icon={Award}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <CompactCertificationCard key={item.title} title={item.title} meta={item.meta} />
        ))}
      </div>
    </SectionCard>
  )
}