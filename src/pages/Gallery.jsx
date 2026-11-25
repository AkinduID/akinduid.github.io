import { useMemo, useState } from "react"
import PageShell from "../components/common/PageShell"

import { images } from "../data/gallery"

/** Filter options shown at the top of the Gallery page. */
const GALLERY_FILTERS = [
  { key: "photography", label: "Photography" },
  { key: "graphic-design", label: "Graphic Design" },
]

/**
 * Gallery renders the Gallery page: category filters above a masonry grid of
 * photography and graphic design images. Images sit directly on the page with
 * a hairline border — no wrapper card.
 *
 * @returns {JSX.Element}
 */
export default function Gallery() {
  const [filter, setFilter] = useState("photography")

  const filteredImages = useMemo(() => {
    return images.filter((image) => image.category === filter)
  }, [filter])

  return (
    <PageShell
      eyebrow="Gallery"
      title="Photography & design"
      description="A showcase of my design work and photography."
      width="wide"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-1.5">
        {GALLERY_FILTERS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setFilter(item.key)}
            aria-pressed={filter === item.key}
            className={`op-filter ${filter === item.key ? "op-filter-active" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div key={filter} className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {filteredImages.map((img, idx) => (
          <figure
            key={`${filter}-${idx}`}
            className="project-card-enter op-thumb mb-3 break-inside-avoid !rounded-[14px]"
            style={{ animationDelay: `${Math.min(idx * 60, 240)}ms` }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" className="block h-auto w-full" />
          </figure>
        ))}
      </div>
    </PageShell>
  )
}
