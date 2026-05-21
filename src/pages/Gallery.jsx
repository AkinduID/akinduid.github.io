import PageShell from "../components/PageShell"

import oneDayMore from "../assets/gallery/1 day more.png"
import albumCover from "../assets/gallery/album cover.png"
import chameleon from "../assets/gallery/chameleon.png"
import csChapter from "../assets/gallery/CS Chapter.png"
import nameTag from "../assets/gallery/name tag with photo.jpg"
import profileGuide from "../assets/gallery/profile guide cover.png"
import shark2 from "../assets/gallery/shark2.png"
import thumbnail from "../assets/gallery/thumbnail.png"

const images = [
  { src: oneDayMore, alt: "1 day more" },
  { src: albumCover, alt: "Album cover" },
  { src: chameleon, alt: "Chameleon illustration" },
  { src: csChapter, alt: "CS Chapter" },
  { src: nameTag, alt: "Name tag with photo" },
  { src: profileGuide, alt: "Profile guide cover" },
  { src: shark2, alt: "Shark" },
  { src: thumbnail, alt: "Thumbnail" },
]

export default function Gallery() {
  return (
    <PageShell>
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/80">
        <p className="mb-4">A curated collection of visuals and experiments.</p>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((img, idx) => (
            <figure key={idx} className="mb-4 break-inside-avoid">
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