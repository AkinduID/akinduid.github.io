import { SOCIAL_LINKS } from "../../data/home"

/**
 * Footer renders the site-wide footer: a hairline divider, copyright notice
 * and social links.
 *
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto max-w-[44rem]">
        <div className="op-hairline" />

        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs text-[var(--op-faint)]">
            © {new Date().getFullYear()} AkinduID. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1">
            {SOCIAL_LINKS.map(({ icon: Icon, title, link }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={title}
                title={title}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--op-faint)] transition-colors duration-150 hover:text-[var(--op-fg)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
