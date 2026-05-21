export default function PageShell({ eyebrow, title, description, children }) {
  return (
    <section className="relative z-10 px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-18 lg:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8be9ff]/90">
              {eyebrow}
            </p>
          ) : null}

          {title ? (
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          ) : null}

          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-8 border-t border-white/10 pt-7">{children}</div>
      </div>
    </section>
  )
}