import PageShell from "../components/common/PageShell"

/**
 * NotFound renders the 404 fallback page shown for unmatched routes.
 *
 * @returns {JSX.Element}
 */
export default function NotFound() {
  return (
    <PageShell>
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="op-eyebrow mb-3">Error 404</p>
        <h1 className="text-5xl font-bold tracking-tight text-[var(--op-fg)] sm:text-6xl">404</h1>
        <h2 className="mt-4 text-lg font-semibold text-[var(--op-fg)]">Page Not Found</h2>
        <p className="mt-3 max-w-md text-[0.8125rem] leading-7 text-[var(--op-muted)]">
          The page you are looking for does not exist, was moved, or is still under development.
        </p>
      </div>
    </PageShell>
  )
}
