import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaDiscord } from "react-icons/fa"
import { SiBehance } from "react-icons/si"
import { FiMail } from "react-icons/fi"

/** Social/contact links shown in the navbar footer and hero "connect" row. */
export const SOCIAL_LINKS = [
  {
    icon: FiMail,
    title: "Email",
    handle: "akinduid@gmail.com",
    link: "mailto:akinduid@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    handle: "@akinduid",
    link: "https://linkedin.com/in/akinduid",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    handle: "@AkinduID",
    link: "https://github.com/AkinduID",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    handle: "@akinduid",
    link: "https://instagram.com/akindu.id",
  },
  {
    icon: FaTwitter,
    title: "Twitter",
    handle: "@akinduid",
    link: "https://twitter.com/akinduid",
  },
  {
    icon: SiBehance,
    title: "Behance",
    handle: "@akinduid",
    link: "https://behance.net/akinduid",
  },
  {
    icon: FaFacebook,
    title: "Facebook",
    handle: "@akinduid",
    link: "https://facebook.com/akindu.id",
  },
  {
    icon: FaDiscord,
    title: "Discord",
    handle: "@akinduid",
    link: "https://discord.com/users/akinduid",
  },
]

/** Focus areas displayed as static chips in the hero section. */
export const FOCUS_AREAS = ["Robotics", "IoT", "Computer Vision","Embedded Systems", "AI", "HPC"]
