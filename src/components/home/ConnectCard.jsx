import CommonCard from "../common/CommonCard"

export default function ConnectCard({ connectItems }) {
  return (
    <CommonCard className="mt-6 rounded-3xl !p-4">
      <div className="grid grid-cols-4 items-center justify-items-center gap-6 lg:flex lg:flex-nowrap lg:justify-center lg:gap-16">
        {connectItems.map(({ icon, title, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={title}
            className="group flex h-16 w-16 shrink-0 items-center justify-center p-2 transition-all duration-150 hover:-translate-y-0.5"
          >
            <img
              src={icon}
              alt=""
              className="h-full w-full object-contain transition-transform duration-150 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </CommonCard>
  )
}