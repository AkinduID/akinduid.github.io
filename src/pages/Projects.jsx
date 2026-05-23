import { useMemo, useState } from "react"
import PageShell from "../components/PageShell"
import ProjectCard from "../components/ProjectCard"

import medibox from "../assets/medibox.png"
import minershield from "../assets/minershield.jpg"
import nanoprocessor from "../assets/nanoprocessor.jpg"
import audio_spectrum from "../assets/audio_spectrum_visualizer.png"
import jetvio from "../assets/jetvio.jpg"
import mechapulse from "../assets/mechapulse.png"
import quot3d from "../assets/quot3d.png"
import infraportal from "../assets/infraportal.png"
import fazetrak from "../assets/fazetrak.jpg"
import aspiretrust from "../assets/aspiretrust.png"

const projects = [
  {
    title: "JetVIO",
    image: jetvio,
    date: "Jul 2025 - Ongoing",
    type: "Final Year Project | Team",
    description:
      "Visual-inertial navigation system for autonomous UAV operation in GPS-denied environments. Assembled UAV platform with simulation-based testing for stable state estimation.",
    tags: ["Python", "C++", "ROS", "Computer Vision"],
    link: "https://github.com/team-vinsight",
    category: "robotics ai",
  },
  {
    title: "FPGA Audio Spectrum Analyzer",
    image: audio_spectrum,
    date: "Jul 2025 - Dec 2025",
    type: "Module Project | Team",
    description:
      "Real-time hardware-accelerated audio visualizer performing FFT analysis and VGA rendering on FPGA. Deployed on Nexys A7 with low-latency signal processing.",
    tags: ["VHDL", "Xilinx Vivado", "FPGA"],
    link: "https://github.com/AkinduID/FPGA-Spectrum-Visualizer",
    category: "fpga",
  },
  {
    title: "QUOT3D",
    image: quot3d,
    date: "Jan 2025 - Jun 2025",
    type: "Module Project | Team",
    description:
      "Web-based platform for generating instant 3D printing quotations. Developed backend service to analyze 3D models and extract pricing metrics with automated vendor-configurable quotation generation.",
    tags: ["Python", "FastAPI", "Docker"],
    link: "https://github.com/Team-Akatsuki-CS3940",
    category: "software",
  },
  {
    title: "Infra Portal",
    image: infraportal,
    date: "Jan 2025 - Jun 2025",
    type: "WSO2 Internship | Individual",
    description:
      "Full-stack infrastructure automation platform streamlining GitHub repository provisioning company-wide. Deployed production-ready containerized application with secure authentication.",
    tags: ["Ballerina", "React", "MySQL", "Docker"],
    category: "software",
  },
  {
    title: "FazeTrak",
    image: fazetrak,
    date: "Jul 2024 - Nov 2024",
    type: "Semester Project | Individual",
    description:
      "Smart webcam with face recognition and gesture-based tracking. Achieved real-time face tracking with pan-tilt servo control and video streaming via OBS Virtual Camera Driver.",
    tags: ["Python", "C++", "OpenCV", "ESP32"],
    link: "https://github.com/AkinduID/FazeTrak",
    category: "iot ai",
  },
  {
    title: "MinerShield",
    image: minershield,
    date: "Jul 2024 - Oct 2024",
    type: "Competition Project | Team",
    description:
      "IoT-based wireless monitoring system for miner safety in underground environments. Demonstrated reliable environmental and miner-status monitoring through prototype sensor network.",
    tags: ["C++", "JavaScript", "ESP32", "Node-RED"],
    link: "https://github.com/Team-Razorcrest",
    category: "iot",
  },
  {
    title: "MechaPulse",
    image: mechapulse,
    date: "Jan 2024 - May 2024",
    type: "Competition Project | Team",
    description:
      "Industrial IoT system for machinery fault detection using acoustic signal analysis via ML. Led ML model deployment on Raspberry Pi and validated fault detection of drill machine prototype.",
    tags: ["C++", "Python", "Raspberry Pi", "FastAPI"],
    link: "https://github.com/AkinduID/MechaPulse",
    category: "iot ai",
  },
  {
    title: "Smart MediBox",
    image: medibox,
    date: "Jan 2024 - Mar 2024",
    type: "Module Project | Individual",
    description:
      "Smart medicine container for scheduled intake reminders. Designed embedded firmware, IoT connectivity, and Node-RED control dashboard supporting remote monitoring and timely alerts.",
    tags: ["Arduino", "ESP32", "IoT", "Node-RED"],
    link: "https://github.com/AkinduID/Smart-MediBox",
    category: "iot",
  },
  {
    title: "AspireTrust",
    image: aspiretrust,
    date: "Sep 2023 - Nov 2023",
    type: "Module Project | Team",
    description:
      "Database-driven banking system supporting transactions and loan processing. Contributed to database schema design and query implementation with robust database management practices.",
    tags: ["MySQL", "HTML", "CSS"],
    link: "https://github.com/Group-02-CS3043/AspireTrust",
    category: "software",
  },
  {
    title: "Nanoprocessor",
    image: nanoprocessor,
    date: "May 2023 - Jun 2023",
    type: "Module Project | Team",
    description:
      "Custom-designed 4-bit nanoprocessor implemented on FPGA. Architected top-level processor design and managed simulation workflows, successfully deployed on Basys3 FPGA board.",
    tags: ["VHDL", "Xilinx Vivado", "FPGA"],
    link: "https://github.com/AkinduID/Nano-Processor-Final",
    category: "fpga",
  },
]

const filters = [
  { key: "all", label: "All Projects" },
  { key: "software", label: "Software" },
  { key: "fpga", label: "FPGA" },
  { key: "iot", label: "IoT/Embedded" },
  { key: "ai", label: "AI/ML" },
  { key: "robotics", label: "Robotics" },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects
    }

    return projects.filter((project) => project.category.includes(filter))
  }, [filter])

  return (
    <PageShell>
      <div className="space-y-6">

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

        <div key={filter} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={`${filter}-${project.title}`}
              animationDelay={`${Math.min(filteredProjects.indexOf(project) * 70, 280)}ms`}
              {...project}
            />
          ))}
        </div>
      </div>
    </PageShell>
  )
}