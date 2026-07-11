import CommonCard from "../common/CommonCard"
import { images } from "../../data/gallery"

const featuredImage = images[2]

/**
 * GallerySummaryCard shows a single featured gallery image as a teaser for
 * the full Gallery page.
 *
 * Note: this component is not currently rendered by SummaryGrid — see the
 * project README for details on re-enabling it.
 *
 * @returns {JSX.Element}
 */
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
        </article>
      </div>
    </CommonCard>
  )
}
