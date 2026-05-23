export default function Footer() {
  return (
    <footer className="theme-text-muted py-2 text-center">
      <div className="container mx-auto">
        © {new Date().getFullYear()} Akindu. All rights reserved.
      </div>
    </footer>
  )
}