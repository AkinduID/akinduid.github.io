import { Link } from "react-router-dom"
import { ArrowLeft, Home, AlertTriangle } from "lucide-react"

import PageShell from "../components/common/PageShell"

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-10">
        
        <div className="relative z-10 w-full max-w-3xl">
          <div className="theme-card theme-card-hover overflow-hidden rounded-[2rem] border p-8 sm:p-12">
            
            {/* Header */}
            <div className="mb-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                <AlertTriangle className="h-9 w-9 theme-accent" strokeWidth={2.2} />
              </div>

              <h1 className="mb-4 text-5xl font-black tracking-tight sm:text-7xl">
                <span className="theme-hero-accent">404</span>
              </h1>

              <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Page Not Found
              </h2>

              <p className="max-w-xl text-sm leading-7 theme-text-secondary sm:text-base">
                The page you are looking for does not exist, was moved,
                or is still under development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}