import { useEffect, useState } from "react"
import CommonCard from "../common/CommonCard"
import LazyImage from "../common/LazyImage"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

export default function PortraitCard() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"))
    })

    observer.observe(html, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <CommonCard className="rounded-3xl !p-0">
      <LazyImage
        src={portraitSrc}
        loading="lazy"
        className="block h-full w-full rounded-3xl object-cover object-center"
        alt="Akindu Delgahagoda"
      />
    </CommonCard>
  )
}