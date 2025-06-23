# Resume Website - TypeScript React

A modern resume website built with TypeScript, React, and Tailwind CSS.

## ✨ Features

### 🎨 Design and UX
- **Responsive Design** - looks great on all devices
- **Dark/Light Theme** - toggle between themes
- **Multilingual** - support for English and Japanese
- **Modern UI** - using Shadcn/ui components

### 🚀 New Features (React Bits)
- **Loading Page** - animated page with effects
  - Typing text "Hello! This is my resume website"
  - Animated "Decrypted Text"
  - Rotating cubes with different colors
  - Smooth transitions and animations
- **Particles Background** - interactive particles on background
  - Adapts to dark/light theme
  - Interactivity on hover and click
  - Smooth animations and transitions
- **Routing** - navigation between pages
  - Loading page (`/`)
  - Main resume page (`/resume`)

### 🛠 Technologies
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Particles** for background effects
- **i18next** for internationalization
- **Shadcn/ui** components

## 🚀 Installation and Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd resume-site-ts-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the project**
```bash
npm start
```

4. **Open browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── LoadingPage.tsx     # Loading page
│   ├── ResumePage.tsx      # Main resume page
│   ├── ParticlesBackground.tsx # Background particles
│   ├── Header.tsx          # Site header
│   ├── MainContent.tsx     # Main content
│   ├── ContentBlock.tsx    # Content blocks
│   ├── ContactBlock.tsx    # Contact information
│   └── types.ts           # TypeScript types
├── contexts/
│   ├── ThemeContext.tsx    # Theme context
│   └── LanguageContext.tsx # Language context
├── locales/
│   ├── en.json            # English translations
│   └── jp.json            # Japanese translations
└── utils/
    ├── i18n.ts            # i18next configuration
    └── utils.ts           # Utilities
```

## 🎯 Usage

### Theme Switching
- Click "Switch to Dark/Light" button in header
- Theme automatically saves and applies to all components

### Language Switching
- Click "English/日本語" button in header
- All content automatically translates

### Navigation
- On main resume page there's "← Back to Loading" button
- Can return to loading page at any time

## 🎨 Customization

### Colors
Colors can be changed in `tailwind.config.js`:
```javascript
colors: {
  customBlue: '#5067EB',
  customBlueWhite: '#F0F4FF',
  customPurple: '#291D89',
}
```

### Animations
Animations are configured in components using Framer Motion:
- `LoadingPage.tsx` - loading animations
- `ParticlesBackground.tsx` - particle settings

### Content
Content is edited in localization files:
- `src/locales/en.json` - English content
- `src/locales/jp.json` - Japanese content

## 🚀 Deployment

Project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## 📝 License

MIT License 