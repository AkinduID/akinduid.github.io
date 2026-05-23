import CommonCard from "../common/CommonCard"

import darkPortrait from "../../assets/images/me.jpg"
import lightPortrait from "../../assets/images/me2.jpg"

export default function PortraitCard() {
  return (
    <CommonCard className="rounded-3xl !p-0">
      <img
        src={lightPortrait}
        className="block h-full w-full rounded-3xl object-cover object-center dark:hidden"
        alt="Akindu Delgahagoda"
      />

      <img
        src={darkPortrait}
        className="hidden h-full w-full rounded-3xl object-cover object-center dark:block"
        alt="Akindu Delgahagoda"
      />
    </CommonCard>
  )
}