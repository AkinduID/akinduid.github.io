export default function PageShell({ children }) {
  return (
    <section className="relative z-10 px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-18 lg:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mt-1 border-t border-white/10 pt-7">{children}</div>
      </div>
    </section>
  )
}