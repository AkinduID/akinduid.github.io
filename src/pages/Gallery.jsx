import { useMemo, useState } from "react"
import PageShell from "../components/common/PageShell"

import oneDayMore from "../assets/gallery/1 day more.png"
import albumCover from "../assets/gallery/album cover.png"
import chameleon from "../assets/gallery/chameleon.png"
import csChapter from "../assets/gallery/CS Chapter.png"
import dscn7984 from "../assets/gallery/DSCN7984.JPG"
import dscn8098 from "../assets/gallery/DSCN8098.JPG"
import dscn8100 from "../assets/gallery/DSCN8100.JPG"
import nameTag from "../assets/gallery/name tag with photo.jpg"
import profileGuide from "../assets/gallery/profile guide cover.png"
import shark2 from "../assets/gallery/shark2.png"
import thumbnail from "../assets/gallery/thumbnail.png"

const images = [
  { src: dscn8100, alt: "Stone building and car", category: "photography" },
  { src: dscn8098, alt: "Curving railway in greenery", category: "photography" },
  { src: dscn7984, alt: "Sunlight through forest canopy", category: "photography" },
  { src: oneDayMore, alt: "1 day more", category: "graphic-design" },
  { src: albumCover, alt: "Album cover", category: "graphic-design" },
  { src: chameleon, alt: "Chameleon illustration", category: "graphic-design" },
  { src: csChapter, alt: "CS Chapter", category: "graphic-design" },
  { src: nameTag, alt: "Name tag with photo", category: "graphic-design" },
  { src: profileGuide, alt: "Profile guide cover", category: "graphic-design" },
  { src: shark2, alt: "Shark", category: "graphic-design" },
  { src: thumbnail, alt: "Thumbnail", category: "graphic-design" },
]

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
    <PageShell>
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