import React from 'react';
import SkillsCategory from './SkillsCategory';
import SkillItem from './SkillItem';
import './Skills.css';

// Programming Languages
import python from '../../assets/images/skills/programming/python.svg';
import cpp from '../../assets/images/skills/programming/cpp.svg';
import c from '../../assets/images/skills/programming/c.svg';
import java from '../../assets/images/skills/programming/java.svg';
import csharp from '../../assets/images/skills/programming/csharp.svg';
import markdown from '../../assets/images/skills/programming/markdown.png';
import javascript from '../../assets/images/skills/programming/javascript.svg';
import typescript from '../../assets/images/skills/programming/typescript.svg';
import powershell from '../../assets/images/skills/programming/powershell.svg';
import bash from '../../assets/images/skills/programming/bash.svg';

// Frontend
import html5 from '../../assets/images/skills/frontend/html5.svg';
import css3 from '../../assets/images/skills/frontend/css3.svg';
import streamlit from '../../assets/images/skills/frontend/streamlit.svg';
import pyqt from '../../assets/images/skills/frontend/pyqt.svg';
import react from '../../assets/images/skills/frontend/react.svg';
import redux from '../../assets/images/skills/frontend/redux.svg';
import nodered from '../../assets/images/skills/frontend/nodered.svg';
import vite from '../../assets/images/skills/frontend/vitejs.svg';

// ML/AI
import opencv from '../../assets/images/skills/ml/opencv.png';
import tensorflow from '../../assets/images/skills/ml/tensorflow.svg';
import pytorch from '../../assets/images/skills/ml/pytorch.svg';
import mediapipe from '../../assets/images/skills/ml/mediapipe.png';
import numpy from '../../assets/images/skills/ml/numpy.svg';
import pandas from '../../assets/images/skills/ml/pandas.svg';
import matplotlib from '../../assets/images/skills/ml/matplotlib.svg';
import scikit from '../../assets/images/skills/ml/scikit-learn.svg';

// Embedded
import arduino from '../../assets/images/skills/embedded/arduino.png';
import raspberrypi from '../../assets/images/skills/embedded/raspberrypi.svg';
import esp32 from '../../assets/images/skills/embedded/esp32.svg';
import platformio from '../../assets/images/skills/embedded/platformio.svg';
import ros from '../../assets/images/skills/embedded/ros.svg';
import gazebo from '../../assets/images/skills/embedded/gazebo.svg';
import vivado from '../../assets/images/skills/embedded/vivado.svg';
import verilog from '../../assets/images/skills/embedded/verilog.svg';
import vhdl from '../../assets/images/skills/embedded/vhdl.png';
import digilent from '../../assets/images/skills/embedded/digilent.svg';

// DevOps
import git from '../../assets/images/skills/devops/git.svg';
import github from '../../assets/images/skills/devops/github.svg';
import linux from '../../assets/images/skills/devops/linux.svg';
import docker from '../../assets/images/skills/devops/docker.svg';
import actions from '../../assets/images/skills/devops/actions.svg';

// Backend
import fastapi from '../../assets/images/skills/backend/fastapi.svg';
import ballerina from '../../assets/images/skills/backend/ballerina.svg';
import mysql from '../../assets/images/skills/backend/mysql.svg';
import graphql from '../../assets/images/skills/backend/graphql.svg';
import postman from '../../assets/images/skills/backend/postman.svg';

// IDEs
import vscode from '../../assets/images/skills/ides/vscode.png';
import visualstudio from '../../assets/images/skills/ides/visualstudio.png';
import datagrip from '../../assets/images/skills/ides/datagrip.svg';
import jupyter from '../../assets/images/skills/ides/jupyter.png';
import colab from '../../assets/images/skills/ides/colab.svg';
import cmake from '../../assets/images/skills/ides/cmake.svg';
import ubuntu from '../../assets/images/skills/ides/ubuntu.svg';
import windows from '../../assets/images/skills/ides/windows.svg';
import macos from '../../assets/images/skills/ides/apple.svg';

const Skills = () => {
  return (
    <div className="skills-container">
      {/* <p className="section-subtitle">
        Technologies and tools I work with to bring ideas to life
      </p> */}
      
      <div className="skills-content">
        <SkillsCategory title="Programming & Scripting Languages">
          <SkillItem icon={python} label="Python" link="https://www.python.org/" />
          <SkillItem icon={cpp} label="C++" link="https://isocpp.org/" />
          <SkillItem icon={c} label="C" link="https://en.wikipedia.org/wiki/C_(programming_language)" />
          <SkillItem icon={java} label="Java" link="https://www.java.com/" />
          <SkillItem icon={csharp} label="C#" link="https://learn.microsoft.com/en-us/dotnet/csharp/" />
          <SkillItem icon={javascript} label="JavaScript" link="https://www.w3schools.com/js/" />
          <SkillItem icon={typescript} label="TypeScript" link="https://www.typescriptlang.org/" />
          <SkillItem icon={powershell} label="PowerShell" link="https://learn.microsoft.com/en-us/powershell/" />
          <SkillItem icon={bash} label="Bash" link="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" />
        </SkillsCategory>

        <SkillsCategory title="Data Science & ML">
          <SkillItem icon={numpy} label="NumPy" link="https://numpy.org/" />
          <SkillItem icon={pandas} label="Pandas" link="https://pandas.pydata.org/" />
          <SkillItem icon={matplotlib} label="Matplotlib" link="https://matplotlib.org/" />
          <SkillItem icon={scikit} label="scikit-learn" link="https://scikit-learn.org/" />
          <SkillItem icon={jupyter} label="Jupyter" link="https://jupyter.org/" />
          <SkillItem icon={colab} label="Google Colab" link="https://colab.research.google.com/" />
        </SkillsCategory>

        <SkillsCategory title="Deep Learning & Computer Vision">
          <SkillItem icon={opencv} label="OpenCV" link="https://opencv.org/" />
          <SkillItem icon={mediapipe} label="MediaPipe" link="https://mediapipe.dev/" />
          <SkillItem icon={tensorflow} label="TensorFlow" link="https://www.tensorflow.org/" />
          <SkillItem icon={pytorch} label="PyTorch" link="https://pytorch.org/" />
          <SkillItem icon="https://img.shields.io/badge/ONNX-005CED?logo=ONNX&logoColor=white" label="ONNX" link="https://onnx.ai/" />
          <SkillItem icon="https://img.shields.io/badge/YOLO-111F68?logo=yolo&logoColor=fff" label="YOLO" link="https://docs.ultralytics.com/" />
        </SkillsCategory>

        <SkillsCategory title="Embedded Systems & Robotics">
          <SkillItem icon={arduino} label="Arduino" link="https://www.arduino.cc/" />
          <SkillItem icon={raspberrypi} label="Raspberry Pi" link="https://www.raspberrypi.org/" />
          <SkillItem icon={esp32} label="ESP32" link="https://www.espressif.com/en/products/socs/esp32" />
          <SkillItem icon={platformio} label="PlatformIO" link="https://platformio.org/" />
          <SkillItem icon={ros} label="ROS" link="https://www.ros.org/" />
          <SkillItem icon={gazebo} label="Gazebo" link="http://gazebosim.org/" />
          <SkillItem icon={nodered} label="Node-RED" link="https://nodered.org/" />
          <SkillItem icon="https://img.shields.io/badge/MQTT-660066?style=flat&logo=MQTT&logoColor=white" label="MQTT" link="https://mqtt.org/" />
        </SkillsCategory>

        <SkillsCategory title="Hardware Acceleration & FPGA">
          <SkillItem icon={vivado} label="Vivado" link="https://www.vivado.com/" />
          <SkillItem icon={vhdl} label="VHDL" link="https://en.wikipedia.org/wiki/VHDL" />
          <SkillItem icon={verilog} label="Verilog" link="https://en.wikipedia.org/wiki/Verilog" />
          <SkillItem icon="https://img.shields.io/badge/CUDA-76B900?logo=nvidia&logoColor=fff" label="CUDA" link="https://docs.nvidia.com/cuda/" />
          <SkillItem icon={digilent} label="Basys3 FPGA" link="https://digilent.com/reference/programmable-logic/basys-3/start" />
        </SkillsCategory>

        <SkillsCategory title="DevOps & Cloud">
          <SkillItem icon={git} label="Git" link="https://git-scm.com/" />
          <SkillItem icon={github} label="GitHub" link="https://github.com/" />
          <SkillItem icon={docker} label="Docker" link="https://www.docker.com/" />
          <SkillItem icon={actions} label="GitHub Actions" link="https://github.com/features/actions" />
          <SkillItem icon="https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white" label="GitHub Pages" link="https://pages.github.com/" />
        </SkillsCategory>

        <SkillsCategory title="Frontend & UI">
          <SkillItem icon={html5} label="HTML5" link="https://www.w3.org/standards/history/html52/" />
          <SkillItem icon={css3} label="CSS" link="https://www.w3.org/TR/CSS/#css" />
          <SkillItem icon={streamlit} label="Streamlit" link="https://streamlit.io/" />
          <SkillItem icon={pyqt} label="PyQt" link="https://www.qt.io/" />
          <SkillItem icon={react} label="React" link="https://react.dev/" />
          <SkillItem icon={vite} label="Vite" link="https://vitejs.dev/" />
          <SkillItem icon={redux} label="Redux" link="https://redux.js.org/" />
        </SkillsCategory>

        <SkillsCategory title="Backend, API & Database">
          <SkillItem icon={fastapi} label="FastAPI" link="https://fastapi.tiangolo.com/" />
          <SkillItem icon={ballerina} label="Ballerina" link="https://ballerina.io/" />
          <SkillItem icon="https://img.shields.io/badge/REST-009688?style=flat&logoColor=white" label="REST" link="https://en.wikipedia.org/wiki/REST" />
          <SkillItem icon={graphql} label="GraphQL" link="https://graphql.org/" />
          <SkillItem icon={mysql} label="MySQL" link="https://www.mysql.com/" />
          <SkillItem icon={postman} label="Postman" link="https://www.postman.com/" />
        </SkillsCategory>

        <SkillsCategory title="IDEs & Dev. Environments">
          <SkillItem icon={vscode} label="VS Code" link="https://code.visualstudio.com/" />
          <SkillItem icon={visualstudio} label="Visual Studio" link="https://visualstudio.microsoft.com/" />
          <SkillItem icon={cmake} label="CMake" link="https://cmake.org/" />
          <SkillItem icon={datagrip} label="DataGrip" link="https://www.jetbrains.com/datagrip/" />
          <SkillItem icon={ubuntu} label="Ubuntu" link="https://ubuntu.com/" />
          <SkillItem icon={windows} label="Windows" link="https://www.microsoft.com/en-us/windows" />
          <SkillItem icon={macos} label="macOS" link="https://www.apple.com/macos/" />
        </SkillsCategory>

        <SkillsCategory title="Documentation">
          <SkillItem icon="https://img.shields.io/badge/LaTeX-00A0A0?logo=latex&logoColor=fff" label="LaTeX" link="https://www.latex-project.org/" />
          <SkillItem icon={markdown} label="Markdown" link="https://www.markdownguide.org/" />
          <SkillItem icon="https://img.shields.io/badge/MkDocs-526CFE?logo=materialformkdocs&logoColor=fff" label="MkDocs" link="https://www.mkdocs.org/" />
          <SkillItem icon="https://img.shields.io/badge/Read%20the%20Docs-8CA1AF?logo=readthedocs&logoColor=fff" label="Read the Docs" link="https://about.readthedocs.com/" />
          <SkillItem icon="https://img.shields.io/badge/Sphinx-000?logo=sphinx&logoColor=fff" label="Sphinx" link="https://www.sphinx-doc.org/en/master/" />
        </SkillsCategory>
      </div>
    </div>
  );
};

export default Skills;
