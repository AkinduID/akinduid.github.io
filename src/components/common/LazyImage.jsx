import { useEffect, useRef, useState } from "react"

export default function LazyImage({
  src,
  alt,
  rootMargin = "120px 0px",
  loading = "lazy",
  decoding = "async",
  ...imgProps
}) {
  const imgRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const target = imgRef.current
    if (!target || shouldLoad) return undefined

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [rootMargin, shouldLoad])

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? src : undefined}
      data-src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      {...imgProps}
    />
  )
}