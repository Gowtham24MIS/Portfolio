# 🚀 Personal Portfolio — Web Developer & ML Enthusiast

A modern, futuristic portfolio built with **React (Vite)** + **TailwindCSS** + **Framer Motion**.

---

## ⚡ Quick Setup (3 steps)

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173
```

---

## 🏗️ Build for Production
```bash
npm run build
npm run preview   # preview the production build
```

---

## 🖼️ Adding Your Profile Photo

1. Copy your photo to: `src/assets/profile.jpg`
2. Open `src/data.js`
3. Change this line:
```js
profileImage: null,
// to:
profileImage: '/src/assets/profile.jpg',
```

---

## ✏️ Personalizing Content

All your personal info, projects, skills, and timeline are in **one file**:

```
src/data.js
```

Edit these sections:
- `personal` → name, email, tagline, social links
- `skills` → your skill categories and levels
- `projects` → your project cards
- `timeline` → your learning journey

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx       ← Loading animation
│   │   ├── Cursor.jsx       ← Custom cursor
│   │   ├── Navbar.jsx       ← Navigation + theme toggle
│   │   ├── Hero.jsx         ← Full-screen intro
│   │   ├── About.jsx        ← About + code block
│   │   ├── Skills.jsx       ← Skill bars + tech badges
│   │   ├── Projects.jsx     ← Project cards
│   │   ├── Journey.jsx      ← Timeline
│   │   ├── Contact.jsx      ← Contact form + socials
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── usePortfolio.js
│   ├── data.js              ← ✅ Edit all your content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎨 Features

- ✅ Futuristic dark theme with acid-green / cyan / coral accents
- ✅ Custom animated cursor (desktop)
- ✅ Loading screen with progress bar
- ✅ Smooth Framer Motion animations
- ✅ Dark / Light theme toggle
- ✅ Fully responsive (mobile + desktop)
- ✅ Glassmorphism cards
- ✅ Animated skill bars
- ✅ Project cards with hover effects
- ✅ Timeline learning journey
- ✅ Contact form (UI only, no backend)
- ✅ Scroll reveal animations

---

## 🚀 Deploy

**Vercel (recommended):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# drag & drop the `dist/` folder to netlify.com
```
