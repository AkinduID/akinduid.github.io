// Project portfolio entries and the category filter options used on the
// Projects page.
import medibox from "../assets/images/projects/medibox.png"
import minershield from "../assets/images/projects/minershield.jpg"
import nanoprocessor from "../assets/images/projects/nanoprocessor.jpg"
import audio_spectrum from "../assets/images/projects/audio_spectrum_visualizer.png"
import jetvio from "../assets/images/projects/jetvio.jpg"
import mechapulse from "../assets/images/projects/mechapulse.png"
import quot3d from "../assets/images/projects/quot3d.png"
import infraportal from "../assets/images/projects/infraportal.png"
import fazetrak from "../assets/images/projects/fazetrak.jpg"
import aspiretrust from "../assets/images/projects/aspiretrust.png"
import lseg from "../assets/images/projects/lseg.png"

export const projects = [
  {
    title: "JetVIO",
    image: jetvio,
    date: "Jul 2025 - Ongoing",
    type: "University of Moratuwa | Group Project",
    description:
      "An autonomous UAV featuring a GPU-accelerated Visual-Inertial Navigation System (VINS) powered by an NVIDIA Jetson Orin NX and an Intel RealSense D455 camera, enabling robust localization and navigation in GPS-denied environments.",
    tags: ["Python", "C++", "ROS", "Computer Vision"],
    link: "https://github.com/team-vinsight",
    category: "robotics",
  },
  {
    title: "Flower Exchange System",
    image: lseg,
    date: "Feb 2026 - April 2026",
    type: "LSEG C++ Workshop | Group Project",
    description:
      "A simplified stock exchange and matching engine. The system reads buy and sell orders from a CSV file, processes them using an order matching engine, and generates execution reports.",
    tags: ["C++", "CMake", "Github Actions"],
    link: "https://github.com/AkinduID/LSEG-Flower-Exchange",
    category: "software",
  },
  {
    title: "FPGA Audio Spectrum Analyzer",
    image: audio_spectrum,
    date: "Jul 2025 - Dec 2025",
    type: "University of Moratuwa | Group Project",
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
    type: "University of Moratuwa | Group Project",
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
    type: "WSO2 Internship | Individual Project",
    description:
      "Full-stack infrastructure automation platform streamlining GitHub repository provisioning company-wide. Deployed production-ready containerized application with secure authentication.",
    tags: ["Ballerina", "React", "MySQL", "Docker"],
    category: "software",
  },
  {
    title: "FazeTrak",
    image: fazetrak,
    date: "Jul 2024 - Nov 2024",
    type: "University of Moratuwa | Individual Project",
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
    type: "EVOLVE IoT Competition | Group Project",
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
    type: "SLIoT 2024 | Group Project",
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
    type: "University of Moratuwa | Individual Project",
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
    type: "University of Moratuwa | Group Project",
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
    type: "University of Moratuwa | Group Project",
    description:
      "Custom-designed 4-bit nanoprocessor implemented on FPGA. Architected top-level processor design and managed simulation workflows, successfully deployed on Basys3 FPGA board.",
    tags: ["VHDL", "Xilinx Vivado", "FPGA"],
    link: "https://github.com/AkinduID/Nano-Processor-Final",
    category: "fpga",
  },
]

/** Filter pill options shown at the top of the Projects page. */
export const PROJECT_FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "software", label: "Software" },
  { key: "fpga", label: "FPGA" },
  { key: "iot", label: "IoT/Embedded" },
  { key: "ai", label: "AI/ML" },
  { key: "robotics", label: "Robotics" },
]