<div align="center">
  <br />
  <img src="./public/Screen.png" alt="Project Banner" width="100%" />
  <br />
  <br/>
  <!-- Tech Stack Badges -->
  <div style={"margin-top:2px"}>
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logo=vite&logoColor=white&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-React_19-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Radix_UI-black?style=for-the-badge&logo=react&logoColor=white&color=8B5CF6" alt="radix ui" />
    <img src="https://img.shields.io/badge/-Recharts-black?style=for-the-badge&logo=chartdotjs&logoColor=white&color=E4572E" alt="recharts" />
    <img src="https://img.shields.io/badge/-React_Query-black?style=for-the-badge&logo=react-query&logoColor=white&color=FF4154" alt="react-query" />
    <img src="https://img.shields.io/badge/-i18next-black?style=for-the-badge&logo=i18next&logoColor=white&color=0F52BA" alt="i18next" />
  </div>

  <h3 align="center">🌦️ Klimate – Weather Intelligence Dashboard</h3>

  <div align="center">
    A dynamic, multi-language weather dashboard built with React 19, Tailwind CSS, Radix UI, and React Query. Delivers live weather analytics with interactive UI, charts, themes, and localization.
  </div>

  <br />
  <div align="center">
    🌐 <strong>Live Demo</strong>: <a href="https://KarthickRamAlagar.github.io/klimate/">Klimate -Live Demo/a>
  </div>

  <br />

  <!-- Personal Links -->
  <div align="center">
    <a href="https://github.com/karthickramalagar">
      <img src="https://img.shields.io/badge/GitHub-KarthickRamAlagar-black?style=for-the-badge&logo=github" alt="GitHub" />
    </a>
    <a href="[https://linkedin.com/in/karthickramalagar](https://www.linkedin.com/in/karthickeyan-ramalagar-763404370/)">
      <img src="https://img.shields.io/badge/LinkedIn-KarthickRamAlagar-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    <a href="mailto:karthickramalagar@gmail.com">
      <img src="https://img.shields.io/badge/Email-karthickramalagar@gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
  </div>
</div>

---

## 📋 Table of Contents

1. [Introduction](#-introduction)  
2. [Tech Stack](#-tech-stack)  
3. [Features](#-features)  
4. [Quick Start](#-quick-start)  
5. [Installation](#-installation)  
6. [License](#-license)  
7. [Acknowledgements](#-acknowledgements)  

---

### 🚀 Introduction

**Klimate** is a responsive, intelligent weather dashboard built using the latest frontend technologies.  
It features real-time weather data, dynamic charts, a theme system, and multi-language support.

Designed to be fast, responsive, and developer-friendly, this project is great for showcasing UI architecture, query management, and localization with i18next.

---

### 🔧 Tech Stack

- ⚛ **React 19** – UI Library  
- ⚡ **Vite** – Build tool for instant development  
- 💨 **Tailwind CSS** – Utility-first CSS framework  
- 🎯 **Radix UI** – Unstyled accessible component primitives  
- 🌍 **i18next** – Internationalization  
- 📊 **Recharts** – Declarative charting library  
- 🔄 **React Query** – Async state & data fetching  
- 📆 **date-fns** – Modern date utility  
- 🧩 **Lucide + Sonner + cmdk** – UI/UX enhancements  
- 🌐 **GitHub Pages** – Deployment

---

## ⚙ Features

- ✅ **City-based Weather Dashboard** with routing  
- 🌐 **Multi-language support** via `react-i18next`  
- 🌞 **Light/Dark Theme toggle** with `next-themes`  
- 📊 **Dynamic Weather Charts** using Recharts  
- ⚡ **React Query** for efficient API caching  
- 🧠 **Radix UI Dialogs & Tooltips**  
- 🌈 **Smooth Animations** via Tailwind Animate  
- 🖼 **Responsive layout** for mobile & desktop  
- 🚀 **Deployed via GitHub Pages** with `gh-pages`

---

## ⚡ Quick Start

### 📦 Prerequisites

- Node.js ≥ 18  
- npm or pnpm


### 🛠️ Installation

```bash
git clone https://github.com/KarthickRamAlagar/klimate.git
cd klimate
```
### Install dependencies
```npm install```

### Start development server
```
npm run dev
```
### 🔨 Build & Deploy
```bash
npm run build        # Build the production files
npm run deploy       # Deploy to GitHub Pages
```
### 🙏 Acknowledgements
- React
- Vite
- Tailwind CSS
- Radix UI
- Recharts
- React Query
- i18next
- GitHub Pages
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
