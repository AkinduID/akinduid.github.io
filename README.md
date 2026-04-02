# AkinduID Portfolio

<a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React"/></a>
<a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"/></a>
<a href="https://www.w3.org/TR/CSS/#css"><img src="https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff"/></a>
<a href="https://github.com/features/actions"><img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions"/></a>
<a href="https://code.visualstudio.com/"><img src="https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=visualstudiocode&logoColor=white"/></a>

A responsive portfolio website built with React and Vite, featuring a modern design and automated deployment.

## 🚀 Features

- **Interactive UI**: Components for About, Experience, Projects, Skills, and Volunteering.
- **Responsive Design**: Custom CSS ensuring compatibility across devices.
- **Dynamic Content**: Data-driven components for easy updates.

## 📂 Project Structure

- `src/components/`: Functional React components (Profile, Navbar, Achievements, etc.).
- `src/assets/`: Static assets including images and resume.
- `public/`: Public static files.

## 🛠️ Installation & Usage

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 🔄 CI/CD

Automated via **GitHub Actions** (`.github/workflows/deploy.yml`):
- Triggers on push to `main`.
- Builds the React application.
- Deploys artifacts to **GitHub Pages**.
