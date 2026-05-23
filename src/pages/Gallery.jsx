import { useMemo, useState } from "react"
import PageShell from "../components/common/PageShell"

import {images} from "../data/gallery"

const filters = [
  { key: "photography", label: "Photography" },
  { key: "graphic-design", label: "Graphic Design" },
]

export default function Gallery() {
  const [filter, setFilter] = useState("photography")

  const filteredImages = useMemo(() => {
    return images.filter((image) => image.category === filter)
  }, [filter])

  return (
    <PageShell description="A showcase of my design work and photography.">
      <div className="flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className={`theme-pill rounded-full px-4 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-200 ${
                filter === item.key ? "theme-pill-active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      <div className="theme-card mt-4 rounded-2xl p-5 text-sm leading-7">

        <div key={filter} className="columns-1 gap-5 sm:columns-1 md:columns-2 lg:columns-3">
          {filteredImages.map((img, idx) => (
            <figure
              key={`${filter}-${idx}`}
              className="project-card-enter mb-4 break-inside-avoid"
              style={{ animationDelay: `${Math.min(idx * 70, 280)}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-lg object-cover shadow-md"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </PageShell>
  )
}