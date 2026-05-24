import CommonCard from "../common/CommonCard"
import LazyImage from "../common/LazyImage"

function createBadgeDataUri(label) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase()

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="g" x1="10" y1="8" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stop-color="#06b6d4"/>
          <stop offset="1" stop-color="#0f172a"/>
        </linearGradient>
      </defs>

      <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#g)"/>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="white" fill-opacity="0.08"/>

      <text
        x="32"
        y="38"
        fill="white"
        font-family="Arial, Helvetica, sans-serif"
        font-size="20"
        font-weight="700"
        text-anchor="middle"
      >
        ${initials}
      </text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export default function ToolboxSection({ title, items }) {
  return (
    <CommonCard className="!p-5 !rounded-2xl">
      <h2 className="theme-kicker text-sm font-semibold tracking-[0.24em]">
        {title}
      </h2>

      <ul className="mt-4 grid grid-cols-3 gap-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col items-center gap-2 text-center"
          >
            <LazyImage
              src={item.icon || createBadgeDataUri(item.name)}
              alt={item.name}
              className="h-12 w-12 shrink-0 object-contain"
              loading="lazy"
            />

            <span className="min-w-0 text-sm font-semibold leading-tight theme-text-secondary">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </CommonCard>
  )
}