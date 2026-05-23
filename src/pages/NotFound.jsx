import PageShell from "../components/PageShell"

export default function NotFound() {
  return (
    <PageShell
      eyebrow="404"
      title="Page not found"
      description="The route you opened does not exist. Use the navbar to return to a valid page."
    >
      <div className="theme-card rounded-2xl p-5 text-sm leading-7 theme-text-secondary">
        This fallback keeps direct navigation predictable while the portfolio grows.
      </div>
    </PageShell>
  )
}