import { SOCIAL_LINKS } from "../../data/home"

/**
 * Footer renders the site-wide footer with a copyright notice and social
 * links.
 *
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="mt-0 border-t border-[var(--theme-border)] bg-[var(--theme-navbar)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 text-center sm:flex-row sm:text-left">
        
        <p className="text-xs theme-text-muted sm:text-sm">
          © {new Date().getFullYear()} AkinduID. All rights reserved.
        </p>

        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, title, link }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={title}
                className="group flex h-8 w-8 items-center justify-center transition-all duration-150 hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5 text-[var(--theme-text-secondary)] transition-all duration-200 group-hover:text-[var(--theme-accent)]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}