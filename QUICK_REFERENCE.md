# ⚡ Quick Reference Guide

## 🚀 Launch Commands

```bash
# Navigate to project
cd portfolio2

# Install (first time only)
npm install

# Start development
npm run dev

# Build for production
npm run build

# Run production version
npm start

# Lint code
npm run lint

# Stop server
Ctrl + C
```

---

## 🌐 Access URLs

| Purpose | URL |
|---------|-----|
| Development | http://localhost:3000 |
| Production | https://your-domain.com (after deployment) |

---

## 📂 Important Files to Edit

### Content Changes
- `resume-data.json` - Update resume information
- `src/components/Hero.tsx` - Change hero text
- `src/components/Experience.tsx` - Update experience
- `src/components/Skills.tsx` - Modify skills

### Style Changes
- `tailwind.config.js` - Colors, fonts, themes
- `src/app/globals.css` - Global styles
- `src/components/*/tsx` - Component styles

### Configuration
- `next.config.js` - Build settings
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies, scripts

---

## 🎨 Color Quick Reference

```javascript
// In tailwind.config.js
{
  primary: '#00d9ff',    // Bright Cyan
  secondary: '#0099ff',  // Blue
  accent: '#ff00ff',     // Magenta
  dark: '#0a0e27',       // Dark bg
  darker: '#050812',     // Darker bg
}

// Use in components
className="text-cyan-400"
className="bg-gradient-to-r from-cyan-400 to-blue-400"
```

---

## 📁 Project Structure Cheat Sheet

```
portfolio2/
├── src/app/           # Next.js app directory
├── src/components/    # React components
├── public/            # Static files
├── package.json       # Dependencies
├── README.md          # Main docs
├── SETUP.md           # Setup guide
└── DEPLOYMENT.md      # Deploy guide
```

---

## 🔧 Component Quick Guide

| Component | File | Purpose | Edit For |
|-----------|------|---------|----------|
| Background | `AnimatedBackground.tsx` | Animated particles | Particle count, colors |
| Splash | `SplashScreen.tsx` | Loading screen | Timing, animation |
| Nav | `Navigation.tsx` | Header + menu | Nav items, styling |
| Hero | `Hero.tsx` | Title section | Name, summary, CTAs |
| Experience | `Experience.tsx` | Jobs timeline | Work history |
| Achievements | `Achievements.tsx` | Awards section | Achievements, icons |
| Skills | `Skills.tsx` | Skills section | Skill list, categories |
| Education | `Education.tsx` | Education timeline | Education entries |
| Contact | `Contact.tsx` | Contact section | Contact info, links |
| Footer | `Footer.tsx` | Footer | Links, social, copyright |

---

## 🎯 Common Tasks

### Add New Skill
1. Open `src/components/Skills.tsx`
2. Find `skillGroups` array
3. Add skill to appropriate category in `skills` array

### Change Colors
1. Open `tailwind.config.js`
2. Modify color values in `theme.extend.colors`
3. Restart dev server with `npm run dev`

### Update Email/Links
1. Open `src/components/Contact.tsx`
2. Edit `contactInfo` array
3. Update email or links as needed

### Modify Animations
1. Open relevant component file
2. Look for `motion.` elements (Framer Motion)
3. Adjust `initial`, `animate`, `transition` props

### Add New Section
1. Create component in `src/components/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to page layout
4. Update Navigation links
5. Update resume-data.json

---

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| CSS not working | Restart server, check tailwind.config.js |
| Module not found | Run `npm install` again |
| TypeScript errors | Check file imports, run `npx tsc --noEmit` |
| Hot reload not working | Hard refresh (Ctrl+Shift+R), restart server |

---

## 📊 Performance Commands

```bash
# Check bundle size
npm run build

# Watch build output
npm run build -- --profile

# Lint for issues
npm run lint

# Test locally like production
npm run build && npm start
```

---

## 🚀 Deployment Checklist

- [ ] Run `npm run build` (no errors)
- [ ] Test `npm start` locally
- [ ] Update `package.json` name/description
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Check all content in resume-data.json
- [ ] Test on mobile (F12 → Device Toolbar)
- [ ] Test accessibility (WAVE browser extension)
- [ ] Choose hosting (Vercel recommended)
- [ ] Deploy!

---

## 🔗 Key Dependencies

```json
{
  "next": "^15.0.0",           // Framework
  "react": "^19.0.0",          // UI
  "typescript": "^5.3.0",      // Type safety
  "tailwindcss": "^3.4.0",    // Styling
  "framer-motion": "^11.0.0", // Animations
  "lucide-react": "^0.294.0"  // Icons
}
```

---

## 📖 Documentation Map

| Document | For |
|----------|-----|
| README.md | Overview & features |
| SETUP.md | Installation help |
| DEPLOYMENT.md | Hosting options |
| SITEMAP.md | Content structure |
| DELIVERY_SUMMARY.md | Project summary |
| **This file** | **Quick reference** |

---

## 🎓 Learning Paths

### Customize Styles
1. Read: `tailwind.config.js` comments
2. Edit: Colors, spacing, fonts
3. Reference: https://tailwindcss.com/docs

### Add Animations
1. Read: Framer Motion docs
2. Edit: `motion.` elements in components
3. Reference: https://www.framer.com/motion

### Add Features
1. Create new component
2. Import into page.tsx
3. Add to Navigation
4. Style with Tailwind

### Deploy
1. Read: DEPLOYMENT.md
2. Choose platform
3. Follow step-by-step guide
4. Set up custom domain

---

## 💡 Pro Tips

1. **Hot Reload**: Save file → changes auto-appear (no refresh needed)
2. **Mobile Testing**: F12 → Ctrl+Shift+M for device toolbar
3. **Color Picker**: F12 → Pick element tool → hover over colors
4. **Performance**: Check Lighthouse in F12 → Performance tab
5. **Accessibility**: Check F12 → Accessibility panel

---

## 🚨 Important Reminders

⚠️ Don't modify:
- `.next/` folder (auto-generated)
- `node_modules/` folder (auto-generated)
- `package-lock.json` (auto-maintained)

✅ Do modify:
- Component files (`src/components/*.tsx`)
- Config files (`tailwind.config.js`, etc.)
- Data files (`resume-data.json`)
- Styles (`globals.css`)

---

## 📞 Quick Help

```bash
# Full help with docs
cat README.md

# Setup help
cat SETUP.md

# Deployment help
cat DEPLOYMENT.md

# Content structure
cat SITEMAP.md

# Project overview
cat DELIVERY_SUMMARY.md
```

---

## 🎉 You're All Set!

Keep this guide bookmarked for quick command reference.

**Happy coding!**
