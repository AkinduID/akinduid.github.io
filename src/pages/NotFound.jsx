import PageShell from "../components/PageShell"

export default function NotFound() {
  return (
    <PageShell
      eyebrow="404"
      title="Page not found"
      description="The route you opened does not exist. Use the navbar to return to a valid page."
    >
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/80">
        This fallback keeps direct navigation predictable while the portfolio grows.
      </div>
    </PageShell>
  )
}