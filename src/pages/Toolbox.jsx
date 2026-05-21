import PageShell from "../components/PageShell"
import ToolboxSection from "../components/ToolboxSection"

const toolboxSections = [
  {
    title: "Programming & Scripting Languages",
    items: ["Python", "C++", "C", "Java", "C#", "JavaScript", "TypeScript", "PowerShell", "Bash"],
  },
  {
    title: "Data Science & ML",
    items: ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "Jupyter", "Google Colab"],
  },
  {
    title: "Deep Learning & Computer Vision",
    items: ["OpenCV", "MediaPipe", "TensorFlow", "PyTorch", "ONNX", "YOLO"],
  },
  {
    title: "Embedded Systems & Robotics",
    items: ["Arduino", "Raspberry Pi", "ESP32", "PlatformIO", "ROS", "Gazebo", "Node-RED", "MQTT"],
  },
  {
    title: "Hardware Acceleration & FPGA",
    items: ["Vivado", "VHDL", "Verilog", "CUDA", "Basys3 FPGA"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Git", "GitHub", "Docker", "GitHub Actions", "GitHub Pages", "Linux", "Ubuntu"],
  },
  {
    title: "Frontend & UI",
    items: ["HTML5", "CSS3", "Streamlit", "PyQt", "React", "Vite", "Redux"],
  },
  {
    title: "Backend, API & Database",
    items: ["FastAPI", "Ballerina", "REST", "GraphQL", "MySQL", "Postman"],
  },
  {
    title: "IDEs & Dev. Environments",
    items: ["Visual Studio Code", "Visual Studio", "CMake", "DataGrip", "Jupyter", "Google Colab", "Ubuntu", "Windows", "macOS"],
  },
  {
    title: "Documentation",
    items: ["LaTeX", "Markdown", "MkDocs", "Read the Docs", "Sphinx"],
  },
  {
    title: "Graphic Design",
    items: ["Adobe Photoshop", "Adobe Illustrator"],
  },
]

export default function Toolbox() {
  return (
    <PageShell>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {toolboxSections.map((section) => (
          <ToolboxSection key={section.title} title={section.title} items={section.items} />
        ))}
      </div>
    </PageShell>
  )
}