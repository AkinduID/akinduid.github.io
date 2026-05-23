import { cn } from "../../lib/utils"

const baseClasses =
  "theme-card theme-card-hover flex h-full flex-col p-6 sm:p-8"

export default function CommonCard({ children, className = "", ...props }) {
  return (
    <div className={cn(baseClasses, className)} {...props}>
      {children}
    </div>
  )
}
