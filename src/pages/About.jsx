import PageShell from "../components/PageShell"
import uomLogo from "../assets/institutes/University_of_Moratuwa_logo.png"
import suslLogo from "../assets/institutes/Logo-SUSL.png"
import sccLogo from "../assets/institutes/SCC Logo.png"
import uomCseLogo from "../assets/institutes/uomcse-448x212.png"
import wso2Logo from "../assets/institutes/WSO2_Software_Logo.png"
import ieeeRasLogo from "../assets/organizations/RAS New Logo Color.png"
import ieeeSbLogo from "../assets/organizations/IEEE STUDENT B LOGO.png"
import moraLogo from "../assets/institutes/University_of_Moratuwa_logo.png"
import sccAuLogo from "../assets/organizations/SCCAU Logo.png"
import sccScoutLogo from "../assets/organizations/new logo SCCSG.png"

const educationItems = [
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

const experienceItems = [
  {
    logo: uomCseLogo,
    role: "Teaching Assistant",
    company: "Department of Computer Science and Engineering, University of Moratuwa",
    team: "Robotics and Automation",
    date: "Feb 2026 - Jun 2026",
    tasks: [
      "Co-Developed a lab series covering key topics such as ROS, Gazebo, and Nav2, to provide students with hands-on experience in robotics software development.",
      "Co-Developed H5P interactive content for the course, including Introductory, Theoritical and Tutorial Content on fundamental conecpts of ROS, Gazebo and Nav2, to enhance student engagement and facilitate self-paced learning.",
      "Co-Developed Quizzes covering the content in H5P interactive content, to assess student understanding and reinforce key concepts in robotics and automation.",
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
      "Developed Infra Portal, a full-stack infrastructure automation platform using Ballerina, React and MySQL to replace legacy manual workflows, streamlining GitHub repository provisioning across the company.",
      "Upgraded and optimized existing internal middleware services to facilitate seamless integration with the GitHub API using GraphQL, ensuring robust communication between the new portal and external providers.",
      "Architected the solution to be extensible beyond GitHub, designing a scalable foundation to support future infrastructure automation requirements.",
      "Implemented secure authentication using Asgardeo and deployed the production-ready containerized application on Choreo for internal organizational use.",
    ],
    tags: ["Ballerina", "React", "MySQL", "GraphQL", "Docker", "Asgardeo", "Choreo"],
  },
]

const achievementSections = [
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
  {
    title: "Certifications",
    groups: [
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
    ],
  },
]

const volunteeringSections = [
  {
    title: "University of Moratuwa",
    items: [
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
    ],
  },
  {
    title: "Sivali Central College",
    items: [
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
    ],
  },
]

function SectionCard({ title, children, className = "" }) {
  return (
    <section className={`rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function EducationCard({ logo, institution, degree, year, details }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 p-2">
          <img src={logo} alt={institution} className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-white">{institution}</p>
              <p className="mt-1 text-sm text-white/76">{degree}</p>
            </div>
            <span className="rounded-full border border-[#8be9ff]/20 bg-[#8be9ff]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8be9ff]">
              {year}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-white/74">
            {details.map((detail) => (
              <li key={typeof detail === "string" ? detail : detail.label} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8be9ff]" />
                {typeof detail === "string" ? (
                  <span>{detail}</span>
                ) : (
                  <span>
                    <strong className="text-[#8be9ff]">{detail.label}</strong> - {detail.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function ExperienceCard({ logo, role, company, team, date, tasks, tags }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 p-2">
          <img src={logo} alt={company} className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-white">{role}</p>
              <p className="mt-1 text-sm text-white/76">{company}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8be9ff]/80">{team}</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/78">
              {date}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-white/74">
            {tasks.map((task) => (
              <li key={task} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8be9ff]" />
                <span>{task}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/72">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function SectionHeading({ title }) {
  return <h3 className="text-base font-semibold text-white">{title}</h3>
}

function MetaCard({ title, meta }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm leading-6 text-white/76">{meta}</p>
    </article>
  )
}

function VolunteeringCard({ logo, organization, details }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 p-2">
          <img src={logo} alt={organization} className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{organization}</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/74">
            {details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8be9ff]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function About() {
  return (
    <PageShell>
      <div className="grid gap-4 text-white/80">
        <div className="grid gap-4 lg:grid-cols-2">
          <SectionCard title="Education">
            <div className="space-y-4">
              {educationItems.map((item) => (
                <EducationCard key={item.institution} {...item} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Experience">
            <div className="space-y-4">
              {experienceItems.map((item) => (
                <ExperienceCard key={item.company} {...item} />
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Achievements">
          <div className="space-y-6">
            {achievementSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <SectionHeading title={section.title} />

                {section.items ? (
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {section.items.map((item) => (
                      <MetaCard key={item.title} title={item.title} meta={item.meta} />
                    ))}
                  </div>
                ) : null}

                {section.groups ? (
                  <div className="space-y-5">
                    {section.groups.map((group) => (
                      <div key={group.title} className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8be9ff]/80">{group.title}</h4>
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          {group.items.map((item) => (
                            <MetaCard key={item.title} title={item.title} meta={item.meta} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Volunteering">
          <div className="space-y-6">
            {volunteeringSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <SectionHeading title={section.title} />
                <div className="grid gap-4 lg:grid-cols-2">
                  {section.items.map((item) => (
                    <VolunteeringCard key={item.organization} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PageShell>
  )
}