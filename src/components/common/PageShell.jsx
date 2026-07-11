/**
 * PageShell provides the shared page-level layout (max-width container,
 * spacing, and optional intro description) used by every route.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Page content.
 * @param {string} [props.description] - Optional intro paragraph shown above the content.
 * @returns {JSX.Element}
 */
export default function PageShell({ children, description }) {
  return (
    <section className="relative z-10 px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-18 lg:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        
        {description && (
          <p className="theme-text-muted mb-6 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-center">
            {description}
          </p>
        )}

        <div>
          {children}
        </div>
      </div>
    </section>
  )
}