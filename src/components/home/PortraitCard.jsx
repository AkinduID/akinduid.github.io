import useIsDarkMode from "../../hooks/useIsDarkMode"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

/**
 * PortraitCard renders the site owner's circular portrait
 * with an availability status dot. The image swaps between a dark-theme and
 * light-theme variant based on the active theme.
 *
 * @returns {JSX.Element}
 */
export default function PortraitCard() {
  const isDark = useIsDarkMode()
  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <div className="relative inline-block h-[clamp(13rem,16vw,18rem)] w-[clamp(13rem,16vw,18rem)]">
      <img src={portraitSrc} alt="Akindu Delgahagoda" className="op-avatar" />
    </div>
  )
}
