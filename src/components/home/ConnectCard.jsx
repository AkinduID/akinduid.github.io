import CommonCard from "../common/CommonCard"

export default function ConnectCard({ connectItems }) {
  return (
    <CommonCard className="mt-6 rounded-3xl !p-4">
         {/* Header */}
      <div className="mb-0 flex items-center gap-4 px-2">
        <span className="mt-2 theme-kicker text-xs font-semibold opacity-90">
          Connect
        </span>

        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>
      <div className="grid grid-cols-4 items-center justify-items-center gap-6 lg:flex lg:flex-nowrap lg:justify-center lg:gap-16">
        {connectItems.map(({ icon: Icon, title, link }) => (
            <a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={title}
            className="group flex h-16 w-16 items-center justify-center transition-all duration-150 hover:-translate-y-0.5"
            >
            <Icon
                className="h-8 w-8 text-[var(--theme-text-secondary)] transition-all duration-200 group-hover:text-[var(--theme-accent)] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            />
            </a>
            ))}
      </div>
    </CommonCard>
  )
}