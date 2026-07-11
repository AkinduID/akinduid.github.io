import CommonCard from "../common/CommonCard"
import { images } from "../../data/gallery"

const featuredImage = images[2]
const galleryCategories = [...new Set(images.map((image) => image.category))]

export default function GallerySummaryCard() {
  return (
    <CommonCard className="rounded-3xl !p-5">
      <div className="mb-0 flex items-center gap-4 px-1">
        <span className="theme-kicker text-xs font-semibold opacity-90">Gallery Preview</span>
        <div className="h-px flex-1 bg-[var(--theme-border)] opacity-70" />
      </div>

      <div className="mt-3 px-1">
        <article>
          {featuredImage && (
            <figure className="relative overflow-hidden rounded-xl bg-[var(--theme-secondary-background)]">
              <div className="absolute inset-0 bg-black/0 dark:bg-black/25" />
              <img
                src={featuredImage.src}
                alt={featuredImage.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Featured image
                </p>
              </div>
            </figure>
          )}

          {/* <div className="mt-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[var(--theme-text-primary)]">
                {featuredImage?.alt}
              </p>
              <p className="mt-1 text-xs leading-5 theme-text-secondary">
                A quick look at photography and graphic design work.
              </p>
            </div>

            <span className="theme-pill-active shrink-0 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
              {images.length} items
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <span key={category} className="theme-tag rounded-full px-3 py-1 text-xs font-medium">
                {category.replace("-", " ")}
              </span>
            ))}
          </div> */}
        </article>
      </div>
    </CommonCard>
  )
}