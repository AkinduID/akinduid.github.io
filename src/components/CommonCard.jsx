import { cn } from "../lib/utils"

const baseClasses =
  "flex h-full flex-col rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-8"

export default function CommonCard({ children, className = "", ...props }) {
  return (
    <div className={cn(baseClasses, className)} {...props}>
      {children}
    </div>
  )
}
