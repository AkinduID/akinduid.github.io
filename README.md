# AkinduID Portfolio

<a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React"/></a>
<a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite"/></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"/></a>
<a href="https://www.w3.org/TR/CSS/#css"><img src="https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff"/></a>
<a href="https://github.com/features/actions"><img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions"/></a>
<a href="https://code.visualstudio.com/"><img src="https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=visualstudiocode&logoColor=white"/></a>
<a href="https://pages.github.com/"/><img src = "https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white"/></a>

A responsive personal portfolio website built using React and Vite, styled after the Once UI / Magic Portfolio aesthetic: quiet, typography-led, near-monochrome, with hairline dividers instead of boxed cards. It features dynamic content rendering and automated deployment with GitHub Actions.

## 🚀 Features

- **Modern Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Dark / Light Mode Toggle** — Seamless theme switching with custom color schemes.
- **Interactive UI Components** — Includes sections for About, Experience, Skills, Projects, Achievements, and Volunteering.
- **Dynamic Content Structure** — Easily maintain and update portfolio data through reusable components and centralized data files.
- **Restrained Motion** — A short opacity cross-fade between routes and a gentle fade-in for lists; no blur, glow or parallax effects.
- **Automated Deployment** — Continuous deployment to GitHub Pages using GitHub Actions.

## 📂 Project Structure

```
src/
├── assets/        # Static images, icons, and logos, grouped by purpose
├── components/    # Reusable React components, grouped by feature area
│   ├── common/    # Shared UI shell: layout, nav, header/footer, cards
│   ├── home/      # Components used only on the Home page
│   ├── about/     # Components used only on the About page
│   ├── projects/  # Components used only on the Projects page
│   └── toolbox/   # Components used only on the Toolbox page
├── data/          # Static content data, one file per page/domain area
├── hooks/         # Reusable custom React hooks (useIsDarkMode, useActiveSection)
├── lib/           # Shared utility functions (kept as `lib/` for shadcn/ui
│                  # tooling compatibility — see components.json)
├── pages/         # Top-level route components, one per page
├── App.jsx        # Root layout, routing, and route cross-fade
└── main.jsx       # Application entry point
```

Vite's `@` path alias (configured in `vite.config.js` / `jsconfig.json`)
resolves to `src/`, so imports can use `@/components/...` instead of long
relative paths where convenient.

## 📐 Codebase Standards

- **Components** use PascalCase filenames matching their default export
  (e.g. `EducationCard.jsx` exports `EducationCard`). Every component file
  contains exactly one component.
- **Hooks, utilities, and data files** use camelCase filenames (e.g.
  `useIsDarkMode.js`).
- **Static configuration arrays** (navigation links, filter options, social
  links) use `UPPER_SNAKE_CASE` (e.g. `NAV_LINKS`, `SOCIAL_LINKS`,
  `PROJECT_FILTERS`). Larger content datasets (project entries, education
  history, gallery images) keep camelCase names, since they represent
  page content rather than fixed configuration.
- **JSDoc** comments document every component's props and every custom
  hook/utility's parameters and return value, since the project uses plain
  JavaScript rather than TypeScript.
- Some summary components under `src/components/home/` (`EducationSummaryCard`,
  `CertificationSummaryCard`, `AchievementSummaryCard`, `VolunteeringSummaryCard`,
  `SkillsSummaryCard`, `GallerySummaryCard`) and `ConnectCard` are not currently rendered.
  They still use the legacy `theme-*` classes (kept in `index.css`, remapped to the flat
  look) — restyle them with the `op-*` classes before wiring them into `SummaryList.jsx`.

## 🎨 Design System (Once UI style)

All styling lives in `src/index.css` as CSS variables plus a small set of component
classes; Tailwind utilities are used for layout and spacing.

- **Theming:** light and dark share one set of `--op-*` variables. The `.dark` class on
  `<html>` (toggled by `ThemeToggle`) swaps them. Light surface `#fbfbfa`, dark surface
  `#0e0e0d` (near-black, not pure black).
- **Colour:** one neutral ramp (`--op-fg`, `--op-fg-2`, `--op-muted`, `--op-faint`) and no
  accent colour. The only colour on the page is the green availability dot.
- **Structure:** `SectionBlock` (uppercase label + hairline) and `.op-row` (logo + text, separated
  by 1px hairlines) replace the old boxed cards. Chips (`.op-chip`) and filters (`.op-filter`)
  use 8px radii; buttons use 10px; the avatar uses 20px.
- **Layout widths:** `PageShell` takes `width="narrow" | "medium" | "wide"`
  (44rem / 56rem / 64rem) — About uses medium, Gallery uses wide, the rest narrow.
- **Hero copy:** the hero role line lives in `HERO_ROLE` and the rotating focus badge uses
  `FOCUS_AREAS`, both in `src/data/home.js`.

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

## 🎨 Design Inspiration

This project's design and layout were inspired by the following websites:

* https://www.braydoncoyer.dev/
* https://demo.magic-portfolio.com/
* https://bootstrapmade.com/demo/Folio/
