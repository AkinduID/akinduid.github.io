import React from 'react';
import SectionHeader from './SectionHeader';
import SkillsCategory from './SkillsCategory';
import SkillItem from './SkillItem';
import './Skills.css';

// Programming Languages
import python from '../assets/images/programming/python.png';
import cpp from '../assets/images/programming/cpp.png';
import c from '../assets/images/programming/c.png';
import java from '../assets/images/programming/java.png';
import csharp from '../assets/images/programming/csharp.png';
import vhdl from '../assets/images/programming/vhdl.svg';
import markdown from '../assets/images/programming/markdown.png';
import javascript from '../assets/images/programming/javascript.png';

// Frontend
import html5 from '../assets/images/frontend/html5.png';
import css3 from '../assets/images/frontend/css3.png';
import streamlit from '../assets/images/frontend/streamlit.svg';
import pyqt from '../assets/images/frontend/pyqt.svg';
import react from '../assets/images/frontend/react.svg';
import redux from '../assets/images/frontend/redux.svg';
import nodered from '../assets/images/frontend/nodered.svg';

// ML/AI
import opencv from '../assets/images/ml/opencv.png';
import tensorflow from '../assets/images/ml/tensorflow.svg';
import pytorch from '../assets/images/ml/pytorch.svg';
import mediapipe from '../assets/images/ml/mediapipe.png';
import numpy from '../assets/images/ml/numpy.svg';
import pandas from '../assets/images/ml/pandas.svg';
import matplotlib from '../assets/images/ml/matplotlib.svg';

// Embedded
import arduino from '../assets/images/embedded/arduino.png';
import raspberrypi from '../assets/images/embedded/raspberrypi.svg';
import esp32 from '../assets/images/embedded/esp32.svg';
import platformio from '../assets/images/embedded/platformio.svg';
import ros from '../assets/images/embedded/ros.svg';
import gazebo from '../assets/images/embedded/gazebo.svg';
import vivado from '../assets/images/embedded/vivado.svg';

// DevOps
import git from '../assets/images/devops/git.svg';
import github from '../assets/images/devops/github.svg';
import linux from '../assets/images/devops/linux.svg';
import docker from '../assets/images/devops/docker.svg';

// Backend
import fastapi from '../assets/images/backend/fastapi.svg';
import ballerina from '../assets/images/backend/ballerina.svg';
import mysql from '../assets/images/backend/mysql.svg';

// IDEs
import vscode from '../assets/images/ides/vscode.png';
import visualstudio from '../assets/images/ides/visualstudio.png';
import datagrip from '../assets/images/ides/datagrip.svg';
import jupyter from '../assets/images/ides/jupyter.png';
import colab from '../assets/images/ides/colab.svg';

const Skills = () => {
  return (
    <div className="skills-container">
      <SectionHeader title="Tech Stack" />
      
      <p className="section-subtitle">
        Technologies and tools I work with to bring ideas to life
      </p>
      
      <div className="skills-content">
        <SkillsCategory title="Programming Languages">
          <SkillItem icon={python} label="Python" link="https://www.python.org/" />
          <SkillItem icon={cpp} label="C++" link="https://isocpp.org/" />
          <SkillItem icon={c} label="C" link="https://en.wikipedia.org/wiki/C_(programming_language)" />
          <SkillItem icon={java} label="Java" link="https://www.java.com/" />
          <SkillItem icon={csharp} label="C#" link="https://learn.microsoft.com/en-us/dotnet/csharp/" />
          <SkillItem icon={vhdl} label="VHDL" link="https://en.wikipedia.org/wiki/VHDL" />
          <SkillItem icon={markdown} label="Markdown" link="https://www.markdownguide.org/" />
          <SkillItem icon={javascript} label="JavaScript" link="https://www.w3schools.com/js/" />
        </SkillsCategory>

        <SkillsCategory title="Frontend Development">
          <SkillItem icon={html5} label="HTML5" link="https://www.w3.org/standards/history/html52/" />
          <SkillItem icon={css3} label="CSS3" link="https://www.w3.org/TR/CSS/#css" />
          <SkillItem icon={streamlit} label="Streamlit" link="https://streamlit.io/" />
          <SkillItem icon={pyqt} label="PyQt" link="https://www.qt.io/" />
          <SkillItem icon={react} label="React" link="https://react.dev/" />
          <SkillItem icon={redux} label="Redux" link="https://redux.js.org/" />
          <SkillItem icon={nodered} label="Node-RED" link="https://nodered.org/" />
        </SkillsCategory>

        <SkillsCategory title="ML/AI & Data Science">
          <SkillItem icon={opencv} label="OpenCV" link="https://opencv.org/" />
          <SkillItem icon={tensorflow} label="TensorFlow" link="https://www.tensorflow.org/" />
          <SkillItem icon={pytorch} label="PyTorch" link="https://pytorch.org/" />
          <SkillItem icon={mediapipe} label="MediaPipe" link="https://mediapipe.dev/" />
          <SkillItem icon={numpy} label="NumPy" link="https://numpy.org/" />
          <SkillItem icon={pandas} label="Pandas" link="https://pandas.pydata.org/" />
          <SkillItem icon={matplotlib} label="Matplotlib" link="https://matplotlib.org/" />
        </SkillsCategory>

        <SkillsCategory title="Embedded Systems & Robotics">
          <SkillItem icon={arduino} label="Arduino" link="https://www.arduino.cc/" />
          <SkillItem icon={raspberrypi} label="Raspberry Pi" link="https://www.raspberrypi.org/" />
          <SkillItem icon={esp32} label="ESP32" link="https://www.espressif.com/en/products/socs/esp32" />
          <SkillItem icon={platformio} label="PlatformIO" link="https://platformio.org/" />
          <SkillItem icon={ros} label="ROS" link="https://www.ros.org/" />
          <SkillItem icon={gazebo} label="Gazebo" link="http://gazebosim.org/" />
          <SkillItem icon={vivado} label="Vivado" link="https://www.vivado.com/" />
        </SkillsCategory>

        <SkillsCategory title="DevOps & Version Control">
          <SkillItem icon={git} label="Git" link="https://git-scm.com/" />
          <SkillItem icon={github} label="GitHub" link="https://github.com/" />
          <SkillItem icon={linux} label="Linux" link="https://www.linuxfoundation.org/" />
          <SkillItem icon={docker} label="Docker" link="https://www.docker.com/" />
        </SkillsCategory>

        <SkillsCategory title="Backend Development">
          <SkillItem icon={fastapi} label="FastAPI" link="https://fastapi.tiangolo.com/" />
          <SkillItem icon={ballerina} label="Ballerina" link="https://ballerina.io/" />
          <SkillItem icon={mysql} label="MySQL" link="https://www.mysql.com/" />
        </SkillsCategory>

        <SkillsCategory title="IDEs & Development Tools">
          <SkillItem icon={vscode} label="VS Code" link="https://code.visualstudio.com/" />
          <SkillItem icon={visualstudio} label="Visual Studio" link="https://visualstudio.microsoft.com/" />
          <SkillItem icon={datagrip} label="DataGrip" link="https://www.jetbrains.com/datagrip/" />
          <SkillItem icon={jupyter} label="Jupyter" link="https://jupyter.org/" />
          <SkillItem icon={colab} label="Google Colab" link="https://colab.research.google.com/" />
        </SkillsCategory>
      </div>
    </div>
  );
};

export default Skills;
