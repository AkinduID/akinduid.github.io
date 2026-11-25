import SectionBlock from "../common/SectionBlock"

/**
 * CertificationsSection renders all certifications (flattened out of their
 * groups) as a compact list: certification title on the left, issuer and
 * date on the right. Renders nothing if there are no certifications.
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
    <SectionBlock title="Certifications">
      <ul>
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-0.5 border-b border-[var(--op-hairline)] py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="text-[0.8125rem] font-medium text-[var(--op-fg)]">{item.title}</span>
            <span className="shrink-0 text-xs text-[var(--op-faint)]">{item.meta}</span>
          </li>
        ))}
      </ul>
    </SectionBlock>
  )
}
