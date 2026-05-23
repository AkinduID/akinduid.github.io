import pythonLogo from "../assets/icons/programming/python.png"
import javascriptLogo from "../assets/icons/programming/javascript.png"
import cLogo from "../assets/icons/programming/c.png"
import cppLogo from "../assets/icons/programming/cpp.png"
import javaLogo from "../assets/icons/programming/java.png"
import csharpLogo from "../assets/icons/programming/csharp.png"
import vhdlLogo from "../assets/icons/programming/vhdl.svg"
import markdownLogo from "../assets/icons/programming/markdown.png"
import typescriptLogo from "../assets/icons/programming/typescript.png"
import powershellLogo from "../assets/icons/programming/powershell.png"
import bashLogo from "../assets/icons/programming/bash.png"

import numpyLogo from "../assets/icons/ml/numpy.svg"
import pandasLogo from "../assets/icons/ml/pandas.svg"
import matplotlibLogo from "../assets/icons/ml/matplotlib.svg"
import opencvLogo from "../assets/icons/ml/opencv.png"
import mediapipeLogo from "../assets/icons/ml/mediapipe.png"
import tensorflowLogo from "../assets/icons/ml/tensorflow.svg"
import pytorchLogo from "../assets/icons/ml/pytorch.svg"

import jupyterLogo from "../assets/icons/ml/jupyter.png"
import colabLogo from "../assets/icons/ides/colab.svg"

import arduinoLogo from "../assets/icons/embedded/arduino.png"
import raspberryPiLogo from "../assets/icons/embedded/raspberrypi.svg"
import esp32Logo from "../assets/icons/embedded/esp32.svg"
import platformioLogo from "../assets/icons/embedded/platformio.svg"
import rosLogo from "../assets/icons/embedded/ros.svg"
import gazeboLogo from "../assets/icons/embedded/gazebo.svg"
import noderedLogo from "../assets/icons/frontend/nodered.svg"

import vivadoLogo from "../assets/icons/embedded/vivado.svg"

import gitLogo from "../assets/icons/devops/git.svg"
import githubLogo from "../assets/icons/devops/github.svg"
import dockerLogo from "../assets/icons/devops/docker.svg"
import linuxLogo from "../assets/icons/devops/linux.svg"

import htmlLogo from "../assets/icons/frontend/html5.png"
import cssLogo from "../assets/icons/frontend/css3.png"
import streamlitLogo from "../assets/icons/frontend/streamlit.svg"
import pyqtLogo from "../assets/icons/frontend/pyqt.svg"
import reactLogo from "../assets/icons/frontend/react.svg"
import reduxLogo from "../assets/icons/frontend/redux.svg"

import fastapiLogo from "../assets/icons/backend/fastapi.svg"
import ballerinaLogo from "../assets/icons/backend/ballerina.svg"
import mysqlLogo from "../assets/icons/backend/mysql.svg"

import vscodeLogo from "../assets/icons/ides/vscode.png"
import visualStudioLogo from "../assets/icons/ides/visualstudio.png"
import datagripLogo from "../assets/icons/ides/datagrip.svg"

export const toolboxSections = [
  {
    title: "Programming & Scripting Languages",
    items: [
      { name: "Python", icon: pythonLogo },
      { name: "C++", icon: cppLogo },
      { name: "C", icon: cLogo },
      { name: "Java", icon: javaLogo },
      { name: "C#", icon: csharpLogo },
      { name: "JavaScript", icon: javascriptLogo },
      { name: "TypeScript", icon: typescriptLogo },
      { name: "PowerShell", icon: powershellLogo },
      { name: "Bash", icon: bashLogo },
    ],
  },

  {
    title: "Data Science & ML",
    items: [
      { name: "NumPy", icon: numpyLogo },
      { name: "Pandas", icon: pandasLogo },
      { name: "Matplotlib", icon: matplotlibLogo },
      { name: "scikit-learn", icon: numpyLogo },
      { name: "Jupyter", icon: jupyterLogo },
      { name: "Google Colab", icon: colabLogo },
    ],
  },

  {
    title: "Deep Learning & Computer Vision",
    items: [
      { name: "OpenCV", icon: opencvLogo },
      { name: "MediaPipe", icon: mediapipeLogo },
      { name: "TensorFlow", icon: tensorflowLogo },
      { name: "PyTorch", icon: pytorchLogo },
      { name: "ONNX", icon: tensorflowLogo },
      { name: "YOLO", icon: opencvLogo },
    ],
  },

  {
    title: "Embedded Systems & Robotics",
    items: [
      { name: "Arduino", icon: arduinoLogo },
      { name: "Raspberry Pi", icon: raspberryPiLogo },
      { name: "ESP32", icon: esp32Logo },
      { name: "PlatformIO", icon: platformioLogo },
      { name: "ROS", icon: rosLogo },
      { name: "Gazebo", icon: gazeboLogo },
      { name: "Node-RED", icon: noderedLogo },
      { name: "MQTT", icon: rosLogo },
    ],
  },

  {
    title: "Hardware Acceleration & FPGA",
    items: [
      { name: "Vivado", icon: vivadoLogo },
      { name: "VHDL", icon: vhdlLogo },
      { name: "Verilog", icon: vivadoLogo },
      { name: "CUDA", icon: vivadoLogo },
      { name: "Basys3 FPGA", icon: vivadoLogo },
    ],
  },

  {
    title: "DevOps & Cloud",
    items: [
      { name: "Git", icon: gitLogo },
      { name: "GitHub", icon: githubLogo },
      { name: "Docker", icon: dockerLogo },
      { name: "GitHub Actions", icon: githubLogo },
      { name: "GitHub Pages", icon: githubLogo },
      { name: "Linux", icon: linuxLogo },
      { name: "Ubuntu", icon: linuxLogo },
    ],
  },

  {
    title: "Frontend & UI",
    items: [
      { name: "HTML5", icon: htmlLogo },
      { name: "CSS3", icon: cssLogo },
      { name: "Streamlit", icon: streamlitLogo },
      { name: "PyQt", icon: pyqtLogo },
      { name: "React", icon: reactLogo },
      { name: "Vite", icon: reactLogo },
      { name: "Redux", icon: reduxLogo },
    ],
  },

  {
    title: "Backend, API & Database",
    items: [
      { name: "FastAPI", icon: fastapiLogo },
      { name: "Ballerina", icon: ballerinaLogo },
      { name: "REST", icon: fastapiLogo },
      { name: "GraphQL", icon: fastapiLogo },
      { name: "MySQL", icon: mysqlLogo },
      { name: "Postman", icon: fastapiLogo },
    ],
  },

  {
    title: "IDEs & Dev. Environments",
    items: [
      { name: "Visual Studio Code", icon: vscodeLogo },
      { name: "Visual Studio", icon: visualStudioLogo },
      { name: "CMake", icon: vscodeLogo },
      { name: "DataGrip", icon: datagripLogo },
      { name: "Jupyter", icon: jupyterLogo },
      { name: "Google Colab", icon: colabLogo },
      { name: "Ubuntu", icon: linuxLogo },
      { name: "Windows", icon: visualStudioLogo },
      { name: "macOS", icon: visualStudioLogo },
    ],
  },

  {
    title: "Documentation",
    items: [
      { name: "LaTeX", icon: markdownLogo },
      { name: "Markdown", icon: markdownLogo },
      { name: "MkDocs", icon: markdownLogo },
      { name: "Read the Docs", icon: markdownLogo },
      { name: "Sphinx", icon: markdownLogo },
    ],
  },

  {
    title: "Graphic Design",
    items: [
      { name: "Adobe Photoshop", icon: datagripLogo },
      { name: "Adobe Illustrator", icon: datagripLogo },
    ],
  },
]