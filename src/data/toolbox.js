import pythonLogo from "../assets/icons/programming/python.png"
import javascriptLogo from "../assets/icons/programming/javascript.png"
import cLogo from "../assets/icons/programming/c.png"
import cppLogo from "../assets/icons/programming/cpp.png"
import javaLogo from "../assets/icons/programming/java.png"
import csharpLogo from "../assets/icons/programming/csharp.png"
import markdownLogo from "../assets/icons/programming/Markdown.png"
import typescriptLogo from "../assets/icons/programming/typescript.png"
import powershellLogo from "../assets/icons/programming/powershell.png"
import bashLogo from "../assets/icons/programming/bash.png"

import numpyLogo from "../assets/icons/ml/NumPy.png"
import pandasLogo from "../assets/icons/ml/Pandas.png"
import matplotlibLogo from "../assets/icons/ml/Matplotlib.png"
import opencvLogo from "../assets/icons/ml/opencv.png"
import mediapipeLogo from "../assets/icons/ml/mediapipe.png"
import tensorflowLogo from "../assets/icons/ml/TensorFlow.png"
import pytorchLogo from "../assets/icons/ml/PyTorch.png"
import scikitleanLogo from "../assets/icons/ml/scikit-learn.png"
import colabLogo from "../assets/icons/ml/colab.png"
import onnxLogo from "../assets/icons/ml/onnx.png"
import yoloLogo from "../assets/icons/ml/yolo.png"
import jupyterLogo from "../assets/icons/ml/jupyter.png"

import arduinoLogo from "../assets/icons/embedded/arduino.png"
import raspberryPiLogo from "../assets/icons/embedded/Raspberry Pi.png"
import esp32Logo from "../assets/icons/embedded/esp32.png"
import platformioLogo from "../assets/icons/embedded/platformio.png"
import rosLogo from "../assets/icons/embedded/ROS.png"
import gazeboLogo from "../assets/icons/embedded/Gazebo.png"
import noderedLogo from "../assets/icons/embedded/nodered.png"
import mqttLogo from "../assets/icons/embedded/mqtt.png"

import vivadoLogo from "../assets/icons/embedded/vivado.png"
import vhdlLogo from "../assets/icons/embedded/vhdl.png"
import verilogLogo from "../assets/icons/embedded/verilog.png"
import basys3Logo from "../assets/icons/embedded/basys3.png"
import cudaLogo from "../assets/icons/embedded/cuda.png"

import gitLogo from "../assets/icons/devops/Git.png"
import githubLogo from "../assets/icons/devops/GitHub.png"
import githubpagesLogo from "../assets/icons/devops/github pages.png"
import githubactionsLogo from "../assets/icons/devops/GitHub Actions.png"
import dockerLogo from "../assets/icons/devops/Docker.png"
import linuxLogo from "../assets/icons/devops/Linux.png"

import htmlLogo from "../assets/icons/frontend/html5.png"
import cssLogo from "../assets/icons/frontend/css3.png"
import streamlitLogo from "../assets/icons/frontend/Streamlit.png"
import pyqtLogo from "../assets/icons/frontend/Qt.png"
import reactLogo from "../assets/icons/frontend/React.png"
import reduxLogo from "../assets/icons/frontend/Redux.png"
import viteLogo from "../assets/icons/frontend/Vite.js.png"
import tailwindLogo from "../assets/icons/frontend/Tailwind CSS.png"

import fastapiLogo from "../assets/icons/backend/FastAPI.png"
import ballerinaLogo from "../assets/icons/backend/Ballerina.png"
import mysqlLogo from "../assets/icons/backend/MySQL.png"
import graphqlLogo from "../assets/icons/backend/GraphQL.png"
import postmanLogo from "../assets/icons/backend/Postman.png"
import restapiLogo from "../assets/icons/backend/restapi.png"

import vscodeLogo from "../assets/icons/ides/vscode.png"
import visualStudioLogo from "../assets/icons/ides/visualstudio.png"
import datagripLogo from "../assets/icons/ides/DataGrip.png"
import latexLogo from "../assets/icons/ides/LaTeX.png"
import cmakeLogo from "../assets/icons/ides/CMake.png"
import windowsLogo from "../assets/icons/ides/Windows 11.png"
import appleLogo from "../assets/icons/ides/Apple.png"
import ubuntuLogo from "../assets/icons/ides/Ubuntu.png"

import psLogo from "../assets/icons/design/PS.ico"
import aiLogo from "../assets/icons/design/AI.ico"
import figmaLogo from "../assets/icons/design/Figma.png"

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
      { name: "scikit-learn", icon: scikitleanLogo },
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
      { name: "ONNX", icon: onnxLogo },
      { name: "YOLO", icon: yoloLogo },
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
      { name: "MQTT", icon: mqttLogo },
    ],
  },

  {
    title: "Hardware Acceleration & FPGA",
    items: [
      { name: "Vivado", icon: vivadoLogo },
      { name: "VHDL", icon: vhdlLogo },
      { name: "Verilog", icon: verilogLogo },
      { name: "CUDA", icon: cudaLogo },
      { name: "Basys3 FPGA", icon: basys3Logo },
    ],
  },

  {
    title: "DevOps & Cloud",
    items: [
      { name: "Git", icon: gitLogo },
      { name: "GitHub", icon: githubLogo },
      { name: "Docker", icon: dockerLogo },
      { name: "GitHub Actions", icon: githubactionsLogo },
      { name: "GitHub Pages", icon: githubpagesLogo },
      { name: "Linux", icon: linuxLogo },
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
      { name: "Tailwind CSS", icon: tailwindLogo },
      { name: "Vite", icon: viteLogo },
      { name: "Redux", icon: reduxLogo },
    ],
  },

  {
    title: "Backend, API & Database",
    items: [
      { name: "FastAPI", icon: fastapiLogo },
      { name: "Ballerina", icon: ballerinaLogo },
      { name: "REST", icon: restapiLogo },
      { name: "GraphQL", icon: graphqlLogo },
      { name: "MySQL", icon: mysqlLogo },
      { name: "Postman", icon: postmanLogo },
    ],
  },

  {
    title: "IDEs & Dev. Environments",
    items: [
      { name: "Visual Studio Code", icon: vscodeLogo },
      { name: "Visual Studio", icon: visualStudioLogo },
      { name: "CMake", icon: cmakeLogo },
      { name: "DataGrip", icon: datagripLogo },
      { name: "Ubuntu", icon: ubuntuLogo },
      { name: "Windows", icon: windowsLogo },
      { name: "macOS", icon: appleLogo },
    ],
  },

  {
    title: "Documentation",
    items: [
      { name: "LaTeX", icon: latexLogo },
      { name: "Markdown", icon: markdownLogo },
    ],
  },

  {
    title: "Graphic Design",
    items: [
      { name: "Adobe Photoshop", icon: psLogo },
      { name: "Adobe Illustrator", icon: aiLogo },
      { name: "Figma", icon: figmaLogo },
    ],
  },
]