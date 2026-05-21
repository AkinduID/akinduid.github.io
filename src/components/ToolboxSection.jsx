function createBadgeDataUri(label) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase()

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="g" x1="10" y1="8" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0ea5e9"/>
          <stop offset="1" stop-color="#22c55e"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#g)"/>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="white" fill-opacity="0.08"/>
      <text x="32" y="38" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" text-anchor="middle">${initials}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const itemIcon = {
  Python: "/programming/python.png",
  JavaScript: "/programming/javascript.png",
  C: "/programming/c.png",
  "C++": "/programming/cpp.png",
  Java: "/programming/java.png",
  "C#": "/programming/csharp.png",
  VHDL: "/programming/vhdl.svg",
  Markdown: "/programming/markdown.png",
  TypeScript: "/programming/typescript.png",
  PowerShell: "/programming/powershell.png",
  Bash: "/programming/bash.png",
  NumPy: "/ml/numpy.svg",
  Pandas: "/ml/pandas.svg",
  Matplotlib: "/ml/matplotlib.svg",
  "scikit-learn": "/ml/numpy.svg",
  Jupyter: "/ides/jupyter.png",
  "Google Colab": "/ides/colab.svg",
  OpenCV: "/ml/opencv.png",
  MediaPipe: "/ml/mediapipe.png",
  TensorFlow: "/ml/tensorflow.svg",
  PyTorch: "/ml/pytorch.svg",
  ONNX: "/ml/tensorflow.svg",
  YOLO: "/ml/opencv.png",
  Arduino: "/embedded/arduino.png",
  "Raspberry Pi": "/embedded/raspberrypi.svg",
  ESP32: "/embedded/esp32.svg",
  PlatformIO: "/embedded/platformio.svg",
  ROS: "/embedded/ros.svg",
  Gazebo: "/embedded/gazebo.svg",
  "Node-RED": "/frontend/nodered.svg",
  MQTT: "/embedded/ros.svg",
  Vivado: "/embedded/vivado.svg",
  Verilog: "/embedded/vivado.svg",
  CUDA: "/embedded/vivado.svg",
  "Basys3 FPGA": "/embedded/vivado.svg",
  Git: "/devops/git.svg",
  GitHub: "/devops/github.svg",
  Docker: "/devops/docker.svg",
  "GitHub Actions": "/devops/github.svg",
  "GitHub Pages": "/devops/github.svg",
  Linux: "/devops/linux.svg",
  Ubuntu: "/devops/linux.svg",
  HTML5: "/frontend/html5.png",
  CSS: "/frontend/css3.png",
  CSS3: "/frontend/css3.png",
  Streamlit: "/frontend/streamlit.svg",
  PyQt: "/frontend/pyqt.svg",
  React: "/frontend/react.svg",
  Vite: "/frontend/react.svg",
  Redux: "/frontend/redux.svg",
  FastAPI: "/backend/fastapi.svg",
  Ballerina: "/backend/ballerina.svg",
  REST: "/backend/fastapi.svg",
  GraphQL: "/backend/fastapi.svg",
  MySQL: "/backend/mysql.svg",
  Postman: "/backend/fastapi.svg",
  "Visual Studio Code": "/ides/vscode.png",
  "Visual Studio": "/ides/visualstudio.png",
  CMake: "/ides/vscode.png",
  DataGrip: "/ides/datagrip.svg",
  Windows: "/ides/visualstudio.png",
  macOS: "/ides/visualstudio.png",
  LaTeX: "/programming/markdown.png",
  MkDocs: "/programming/markdown.png",
  "Read the Docs": "/programming/markdown.png",
  Sphinx: "/programming/markdown.png",
  "Adobe Photoshop": "/ides/datagrip.svg",
  "Adobe Illustrator": "/ides/datagrip.svg",
}

export default function ToolboxSection({ title, items }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8be9ff]/90">
        {title}
      </h2>

      <ul className="mt-4 grid grid-cols-3 gap-4">
        {items.map((item) => (
          <li key={item} className="flex flex-col items-center gap-2 text-center text-sm text-white/82">
            <img
              src={itemIcon[item] || createBadgeDataUri(item)}
              alt=""
              className="h-12 w-12 shrink-0 object-contain"
              loading="lazy"
            />
            <span className="min-w-0 leading-tight">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}