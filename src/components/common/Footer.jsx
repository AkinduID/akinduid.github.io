export default function Footer() {
  return (
    <footer className="mt-0 border-t border-[var(--theme-border)] bg-[var(--theme-navbar)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 text-center sm:flex-row sm:text-left">
        
        <p className="text-xs theme-text-muted sm:text-sm">
          © {new Date().getFullYear()} / AkinduID / Portfolio
        </p>

        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <span className="theme-text-muted">Built with React + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}