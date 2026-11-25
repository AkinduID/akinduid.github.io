/** Maximum content widths available to pages, keyed by the `width` prop. */
const PAGE_WIDTHS = {
  narrow: "max-w-[44rem]",
  medium: "max-w-4xl",
  wide: "max-w-5xl",
}

/**
 * PageShell provides the shared page-level layout used by every route: a
 * centered, max-width column with an optional editorial page header
 * (eyebrow, title and muted description) above the page content.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Page content.
 * @param {string} [props.eyebrow] - Small uppercase label shown above the title (e.g. "About").
 * @param {string} [props.title] - Page heading.
 * @param {string} [props.description] - Optional muted intro line shown under the title.
 * @param {"narrow"|"medium"|"wide"} [props.width="narrow"] - Maximum content width.
 * @param {boolean} [props.verticallyCenter=false] - Center the page content in the available height.
 * @returns {JSX.Element}
 */
export default function PageShell({
  children,
  eyebrow,
  title,
  description,
  width = "narrow",
  verticallyCenter = false,
}) {
  const hasHeader = Boolean(eyebrow || title || description)

  return (
    <section
      className={
        verticallyCenter
          ? "relative z-10 flex flex-1 flex-col justify-center px-6 py-12"
          : "relative z-10 px-6 pb-16 pt-14 sm:pt-16"
      }
    >
      <div className={`mx-auto w-full ${PAGE_WIDTHS[width]}`}>
        {hasHeader && (
          <header className="mb-10 text-center">
            {eyebrow && <p className="op-eyebrow mb-2">{eyebrow}</p>}
            {title && <h1 className="op-title">{title}</h1>}
            {description && (
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--op-muted)]">
                {description}
              </p>
            )}
          </header>
        )}

        <div>{children}</div>
      </div>
    </section>
  )
}
