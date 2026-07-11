// Static content for the About page: education history, work experience,
// achievements, certifications, and volunteering/extra-curricular activity.
// Each export is consumed by a matching section component under
// src/components/about/.
import uomLogo from "../assets/logos/institutes/University_of_Moratuwa_logo.png"
import suslLogo from "../assets/logos/institutes/Logo-SUSL.png"
import sccLogo from "../assets/logos/institutes/SCC Logo.png"
import uomCseLogo from "../assets/logos/institutes/uomcse-448x212.png"
import wso2Logo from "../assets/logos/institutes/WSO2_Software_Logo.png"
import thakshanaLogo from "../assets/logos/institutes/thakshana.jpg"
import ieeeRasLogo from "../assets/logos/organizations/RAS New Logo Color.png"
import ieeeSbLogo from "../assets/logos/organizations/IEEE STUDENT B LOGO.png"
import moraLogo from "../assets/logos/institutes/University_of_Moratuwa_logo.png"
import sccAuLogo from "../assets/logos/organizations/SCCAU Logo.png"
import sccScoutLogo from "../assets/logos/organizations/new logo SCCSG.png"

export const educationItems = [
  {
    logo: uomLogo,
    institution: "University of Moratuwa",
    degree: "BSc Hons in Engineering",
    year: "2022-2026",
    details: [
      "Specialization - Computer Science and Engineering",
      "Stream - Integrated Computer Engineering",
      "CGPA - 3.5",
    ],
  },
  {
    logo: suslLogo,
    institution: "Sabaragamuwa University of Sri Lanka",
    degree: "Diploma in English",
    year: "2021-2022",
    details: ["Credit Pass"],
  },
  {
    logo: sccLogo,
    institution: "Sivali Central College",
    degree: "GCE Advanced Level & Ordinary Level",
    year: "2007-2020",
    details: [
      {
        label: "GCE Advanced Level (2020)",
        value: "Physical Science Stream | 3A Passes | Island Rank - 423 | District Rank - 13",
      },
      {
        label: "GCE Ordinary Level (2017)",
        value: "9A Passes",
      },
    ],
  },
]

export const experienceItems = [
  {
    logo: thakshanaLogo,
    role: "Embedded Software Engineer",
    company: "Thakshana Technologies (Pvt) Ltd",
    team: "",
    date: "Jul 2026 - Present",
    tasks: [],
    tags: [],
  },
  {
    logo: uomCseLogo,
    role: "Teaching Assistant",
    company: "Department of Computer Science and Engineering, University of Moratuwa",
    team: "Robotics and Automation",
    date: "Feb 2026 - Jun 2026",
    tasks: [
      "Developed ROS/Gazebo/Nav2 lab series",
      "Created H5P interactive tutorials",
      "Authored quizzes to assess students",
    ],
    tags: ["ROS", "Gazebo", "Nav2", "GitHub", "GitHub Actions", "GitHub Classroom", "Ubuntu"],
  },
  {
    logo: wso2Logo,
    role: "Intern Software Engineer",
    company: "WSO2",
    team: "Digital Transformation Team",
    date: "Jan 2025 - Jun 2025",
    tasks: [
      "Built Infra Portal (Ballerina, React, MySQL)",
      "Integrated GitHub via GraphQL",
      "Designed an extensible automation architecture",
      "Implemented Asgardeo auth and deployed on Choreo",
    ],
    tags: ["Ballerina", "React", "MySQL", "GraphQL", "Docker", "Asgardeo", "Choreo"],
  },
]

export const achievementSections = [
  {
    title: "Awards & Honors",
    items: [
      { title: "Dean's List", meta: "University of Moratuwa | Semester 6" },
      { title: "Evolve IoT Mini Research Competition", meta: "1st Place" },
      { title: "SLIoT Challenge 2023", meta: "Semifinalists" },
      { title: "President's Scout Award", meta: "Issued in 2019" },
      { title: "National Junior Science Olympiad 2016", meta: "Gold Medal" },
      { title: "International Mathematics and Science Olympiad 2013", meta: "Silver Medal" },
    ],
  },
]

// Extract certifications data from former achievement entry and keep it separate
export const certifications = [
  {
    title: "Embedded AI & Machine Learning",
    items: [
      { title: "Embedded AI: ML at the Edge", meta: "Arm | Apr 2025" },
      { title: "Computer Vision with Embedded ML", meta: "Edge Impulse | Mar 2025" },
      { title: "Intro to Embedded ML", meta: "Edge Impulse | Mar 2025" },
      { title: "CV & AI Vision Language Models", meta: "OpenCV University | Dec 2024" },
      { title: "Fundamentals of Deep Learning", meta: "NVIDIA DLI | Dec 2024" },
      { title: "Computer Vision", meta: "Kaggle | Dec 2024" },
      { title: "Intro to Machine Learning", meta: "Kaggle | Jan 2024" },
    ],
  },
  {
    title: "Embedded Systems",
    items: [
      { title: "Arm Cortex-M Architecture & Software Dev", meta: "Arm | Apr 2025" },
      { title: "Embedded Software & Hardware Architecture", meta: "CU Boulder | Mar 2025" },
    ],
  },
  {
    title: "DevOps & Engineering",
    items: [
      { title: "GitHub Foundations", meta: "GitHub | Mar 2025" },
      { title: "Docker Training for Absolute Beginners", meta: "KodeKloud | Feb 2025" },
    ],
  },
]

export const volunteeringSections = [
      {
        logo: ieeeRasLogo,
        organization: "IEEE Robotics and Automation Society, UoM",
        details: [
          "Secretary | Oct 2024 – Oct 2025",
          "Vice Chairman | Oct 2023 – Oct 2024",
          "Design Committee Member | Oct 2022 – Oct 2023",
          "BotTalks 1.0 Co-Chair | Mar – Apr 2023",
        ],
      },
      {
        logo: ieeeSbLogo,
        organization: "IEEE Student Branch, UoM",
        details: [
          "Membership Development Committee | Nov 2023 – Nov 2024",
          "IEEE Open Week Volunteer | Feb – Mar 2024",
        ],
      },
      {
        logo: uomCseLogo,
        organization: "Department of CSE, UoM",
        details: [
          "CSE40 Marketing Committee | Jan – May 2025",
          "Hit The Grounds Marketing Committee | Dec 2024 – Jan 2025",
          "CSE Career Fair 2024 Company Coordination | Dec 2023 – Jan 2024",
        ],
      },
      {
        logo: moraLogo,
        organization: "Mora Hiking Club, UoM",
        details: [
          "Stridian 2025 Media Team | Jul – Sep 2025",
          "Stridian 2024 Health Team | Jul – Sep 2024",
        ],
      },
      {
        logo: sccAuLogo,
        organization: "Sivali Astronomy Union",
        details: ["President | Oct 2018 – Oct 2019"],
      },
      {
        logo: sccScoutLogo,
        organization: "Sivali Scout Group",
        details: ["Senior Scout | Jul 2017 – Jul 2020", "Junior Scout | Jan 2014 – Jul 2017"],
      },
      {
        logo: sccLogo,
        organization: "Sivali Prefects Guild",
        details: ["Junior Prefect | Jan 2017 – Jan 2018"],
      },
    ]