# 🚀 Setup & Installation Guide

## ⚡ Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
cd portfolio2
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: http://localhost:3000

That's it! Your portfolio is now running.

---

## 📋 Prerequisites

- **Node.js**: v16.x or higher
  - [Download Node.js](https://nodejs.org/)
  - Verify: `node --version`

- **npm**: v7.x or higher (comes with Node.js)
  - Verify: `npm --version`

- **Git** (optional, for version control)
  - [Download Git](https://git-scm.com/)

---

## 🛠️ Full Setup Instructions

### 1. Navigate to Project Directory
```bash
cd c:/Users/codec/Desktop/portfolio/portfolio2
```

### 2. Install All Dependencies
```bash
npm install
```
This will:
- Download all required packages
- Install Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- Create `node_modules` folder and `package-lock.json`

**Expected time**: 2-3 minutes (first time)

### 3. Start Development Server
```bash
npm run dev
```

**Output should show:**
```
> prabhat-portfolio@1.0.0 dev
> next dev

▲ Next.js 15.0.0
- Local:        http://localhost:3000
```

### 4. View Your Portfolio
- Open browser: http://localhost:3000
- You should see the splash screen, then the portfolio
- Hot reload enabled - changes save automatically

### 5. Stop Development Server
Press `Ctrl + C` in terminal

---

## 📦 Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code for errors
npm run lint
```

---

## 🔍 Project Structure

```
portfolio2/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── AnimatedBackground.tsx
│       ├── SplashScreen.tsx
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── Experience.tsx
│       ├── Achievements.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/                      # Static files
├── package.json                 # Dependencies + scripts
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind config
├── next.config.js              # Next.js config
├── postcss.config.js           # PostCSS config
├── resume-data.json            # Resume structured data
├── README.md                   # Main documentation
├── DEPLOYMENT.md               # Deployment guide
├── SITEMAP.md                  # Content structure
└── .gitignore                  # Git ignore rules
```

---

## ⚙️ Configuration Files

### package.json
Defines project metadata, dependencies, and scripts.

### tsconfig.json
TypeScript configuration for type checking.

### tailwind.config.js
Tailwind CSS customization (colors, themes, plugins).

### next.config.js
Next.js build optimization and features.

### postcss.config.js
CSS processing pipeline (Tailwind + Autoprefixer).

---

## 🎨 Customization

### Update Portfolio Content
Edit `resume-data.json` to update resume information.

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#00d9ff',      // Cyan
      secondary: '#0099ff',    // Blue
      accent: '#ff00ff',       // Magenta
    },
  },
}
```

### Modify Sections
Edit component files in `src/components/`:
- `Hero.tsx` - Update hero content
- `Experience.tsx` - Modify experience cards
- `Skills.tsx` - Update skills list
- etc.

### Add New Sections
1. Create new component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to Navigation
4. Update SITEMAP.md

---

## 🚀 Production Build

### Step 1: Build
```bash
npm run build
```
Creates optimized production build in `.next/` folder.

### Step 2: Test Locally
```bash
npm start
```
Runs production version locally at http://localhost:3000

### Step 3: Deploy
See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker
- Traditional server

---

## 🐛 Troubleshooting

### npm install fails
```bash
# Clear cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Styles not loading (CSS missing)
```bash
# Rebuild Tailwind CSS
npm run dev

# If still broken, restart dev server
```

### TypeScript errors
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Fix with ESLint
npm run lint
```

### Hot reload not working
- Save file (may need direct file save)
- Hard refresh browser (Ctrl+Shift+R)
- Restart dev server

---

## 📊 System Requirements

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| RAM | 2GB | 4GB+ |
| Storage | 500MB | 1GB+ |
| Node.js | 16.x | 18.x+ |
| npm | 7.x | 9.x+ |
| Browser | ES2020+ | Latest |

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Guide](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✅ Verification Checklist

After setup, verify:
- [ ] Dependencies installed (`npm install` completed)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser shows portfolio at localhost:3000
- [ ] Splash screen animation plays
- [ ] Navigation works
- [ ] Sections scroll smoothly
- [ ] Responsive on mobile (F12 → Device Toolbar)
- [ ] No console errors (F12 → Console tab)

---

## 📞 Need Help?

1. **Check logs**: Look at terminal output for errors
2. **Check README.md**: Main documentation
3. **Check DEPLOYMENT.md**: Hosting help
4. **Check SITEMAP.md**: Content structure

---

**You're all set! Happy coding! 🎉**
