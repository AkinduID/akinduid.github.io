import CommonCard from "../common/CommonCard"
import useIsDarkMode from "../../hooks/useIsDarkMode"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

/**
 * PortraitCard displays the site owner's portrait photo, automatically
 * swapping between a dark-theme and light-theme variant of the image based
 * on the currently active theme.
 *
 * @returns {JSX.Element}
 */
export default function PortraitCard() {
  const isDark = useIsDarkMode()
  const portraitSrc = isDark ? darkPortrait : lightPortrait

  return (
    <CommonCard className="rounded-3xl !p-0">
      <img
        src={portraitSrc}
        loading="lazy"
        className="block h-full w-full rounded-3xl object-cover object-center"
        alt="Akindu Delgahagoda"
      />
    </CommonCard>
  )
}