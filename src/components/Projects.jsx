import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import './Projects.css';

// Import images
import pic02 from '../assets/pic02.jpg';
import pic05 from '../assets/pic05.jpg';
import quot3d from '../assets/quot3d.png';
import infraportal from '../assets/infraportal.png';
import fazetrak from '../assets/fazetrak.jpg';
import aspiretrust from '../assets/aspiretrust.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "JetVIO",
      image: pic02,
      date: "Jul 2025 – Ongoing",
      type: "Final Year Project | Team",
      description: "Visual-inertial navigation system for autonomous UAV operation in GPS-denied environments. Assembled UAV platform with simulation-based testing for stable state estimation.",
      tags: ["Python", "C++", "ROS", "Computer Vision"],
      category: "robotics ai"
    },
    {
      title: "FPGA Audio Spectrum Analyzer",
      image: pic05,
      date: "Jul 2025 – Dec 2025",
      type: "Module Project | Team",
      description: "Real-time hardware-accelerated audio visualizer performing FFT analysis and VGA rendering on FPGA. Deployed on Nexys A7 with low-latency signal processing.",
      tags: ["VHDL", "Xilinx Vivado", "FPGA"],
      category: "fpga"
    },
    {
      title: "QUOT3D",
      image: quot3d,
      date: "Jan 2025 – Jun 2025",
      type: "Module Project | Team",
      description: "Web-based platform for generating instant 3D printing quotations. Developed backend service to analyze 3D models and extract pricing metrics with automated vendor-configurable quotation generation.",
      tags: ["Python", "FastAPI", "Docker"],
      category: "software"
    },
    {
      title: "Infra Portal",
      image: infraportal,
      date: "Jan 2025 – Jun 2025",
      type: "WSO2 Internship | Individual",
      description: "Full-stack infrastructure automation platform streamlining GitHub repository provisioning company-wide. Deployed production-ready containerized application with secure authentication.",
      tags: ["Ballerina", "React", "MySQL", "Docker"],
      category: "software"
    },
    {
      title: "FazeTrak",
      image: fazetrak,
      date: "Jul 2024 – Nov 2024",
      type: "Semester Project | Individual",
      description: "Smart webcam with face recognition and gesture-based tracking. Achieved real-time face tracking with pan-tilt servo control and video streaming via OBS Virtual Camera Driver.",
      tags: ["Python", "C++", "OpenCV", "ESP32"],
      link: "https://github.com/AkinduID/FazeTrak",
      category: "iot ai"
    },
    {
      title: "MinerShield",
      image: pic05,
      date: "Jul 2024 – Oct 2024",
      type: "Competition Project | Team",
      description: "IoT-based wireless monitoring system for miner safety in underground environments. Demonstrated reliable environmental and miner-status monitoring through prototype sensor network.",
      tags: ["C++", "JavaScript", "ESP32", "Node-RED"],
      category: "iot"
    },
    {
      title: "MechaPulse",
      image: pic02,
      date: "Jan 2024 – May 2024",
      type: "Competition Project | Team",
      description: "Industrial IoT system for machinery fault detection using acoustic signal analysis via ML. Led ML model deployment on Raspberry Pi and validated fault detection of drill machine prototype.",
      tags: ["C++", "Python", "Raspberry Pi", "FastAPI"],
      category: "iot ai"
    },
    {
      title: "Smart MediBox",
      image: pic05,
      date: "Jan 2024 – Mar 2024",
      type: "Module Project | Individual",
      description: "Smart medicine container for scheduled intake reminders. Designed embedded firmware, IoT connectivity, and Node-RED control dashboard supporting remote monitoring and timely alerts.",
      tags: ["Arduino", "ESP32", "IoT", "Node-RED"],
      category: "iot"
    },
    {
      title: "AspireTrust",
      image: aspiretrust,
      date: "Sep 2023 – Nov 2023",
      type: "Module Project | Team",
      description: "Database-driven banking system supporting transactions and loan processing. Contributed to database schema design and query implementation with robust database management practices.",
      tags: ["MySQL", "HTML", "CSS"],
      link: "https://github.com/Group-02-CS3043/AspireTrust",
      category: "software"
    },
    {
      title: "Nanoprocessor",
      image: pic05,
      date: "May 2023 – Jun 2023",
      type: "Module Project | Team",
      description: "Custom-designed 4-bit nanoprocessor implemented on FPGA. Architected top-level processor design and managed simulation workflows, successfully deployed on Basys3 FPGA board.",
      tags: ["VHDL", "Xilinx Vivado", "FPGA"],
      link: "https://github.com/AkinduID/Nano-Processor-Final",
      category: "fpga"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <div className="projects-container">
      <SectionHeader title="Projects" />
      
      <p className="section-subtitle">
        Explore my portfolio of innovative projects spanning embedded systems, ML/AI, and full-stack development
      </p>
      
      <div className="project-filters">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}><span>All Projects</span></button>
        <button className={`filter-btn ${filter === 'software' ? 'active' : ''}`} onClick={() => setFilter('software')}><span>Software</span></button>
        <button className={`filter-btn ${filter === 'fpga' ? 'active' : ''}`} onClick={() => setFilter('fpga')}><span>FPGA</span></button>
        <button className={`filter-btn ${filter === 'iot' ? 'active' : ''}`} onClick={() => setFilter('iot')}><span>IoT/Embedded</span></button>
        <button className={`filter-btn ${filter === 'ai' ? 'active' : ''}`} onClick={() => setFilter('ai')}><span>AI/ML</span></button>
        <button className={`filter-btn ${filter === 'robotics' ? 'active' : ''}`} onClick={() => setFilter('robotics')}><span>Robotics</span></button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
