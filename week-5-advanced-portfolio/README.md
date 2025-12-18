# 🎨 Advanced Portfolio Redesign (Week 5)

## 📖 Project Overview
This project is a complete re-engineering of my personal portfolio using **modern front-end architecture**. Moving away from basic CSS, this version implements the **BEM (Block Element Modifier)** naming convention and modular CSS files to create a scalable, maintainable codebase similar to what is used in professional software teams.

## 🚀 Key Features
* **Modular Architecture:** CSS is split into specialized files (`layout`, `main`, `animations`) rather than one giant file.
* **Advanced Animations:**
    * **Entrance Animations:** Elements fade in and slide up upon page load using `@keyframes`.
    * **Hover Effects:** Project cards lift up (`transform: translateY`) and cast shadows on interaction.
* **Instant Theming:** A high-performance Dark Mode that switches instantly by reassigning CSS variables, with zero layout shift.

## 🛠️ Technical Highlights
* **BEM Methodology:** Used classes like `.card__title`, `.card__header`, and `.btn--primary` to prevent style conflicts.
* **CSS Grid & Flexbox Hybrid:** Used Grid for the main page layout and Flexbox for internal component alignment.
* **Pseudo-classes:** utilized `:hover`, `:active`, and `:nth-child` for refined interactivity.

## 📂 Project Structure
```text
week-5-advanced-portfolio/
├── css/
│   ├── main.css       
│   ├── layout.css     
│   └── animations.css 
├── js/theme-switcher.js
└── index.html