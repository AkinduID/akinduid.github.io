import { cn } from "../../lib/utils"

const baseClasses =
  "theme-card theme-card-hover flex h-full flex-col p-6 sm:p-8"

/**
 * CommonCard is the shared surface used by most content cards across the
 * site (theme background, border, hover state, and padding).
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Card content.
 * @param {string} [props.className] - Additional class names merged with the base card styles.
 * @returns {JSX.Element}
 */
export default function CommonCard({ children, className = "", ...props }) {
  return (
    <div className={cn(baseClasses, className)} {...props}>
      {children}
    </div>
  )
}
