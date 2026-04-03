# Portfolio Sitemap & Content Structure

## Website Architecture

```
🏠 Website Root
│
├── 🎬 Splash Screen (1.5s intro)
│   ├── Animated monogram "PY"
│   ├── Loading progress bar
│   └── Smooth transition to Hero
│
├── 📍 Navigation Bar (Sticky)
│   ├── Logo "PY" (clickable - goes to Hero)
│   ├── Desktop Menu Links:
│   │   ├── Home
│   │   ├── Experience
│   │   ├── Skills
│   │   ├── Achievements
│   │   ├── Education
│   │   └── Contact
│   ├── Mobile Burger Menu
│   └── Progress Indicator (scroll bar)
│
├── 🦸 Hero Section (#hero)
│   ├── Title: "Prabhat Yadav"
│   ├── Role: "MERN Stack Developer"
│   ├── Summary: Professional description
│   ├── Location: Dehradun, India
│   ├── Primary CTA: "View Experience" → scrolls to #experience
│   ├── Secondary CTA: "Download Resume"
│   ├── Scroll indicator animation
│   └── Floating background elements
│
├── 💼 Experience Section (#experience)
│   ├── Section Title & Description
│   ├── Timeline with dots
│   ├── Experience Cards (Accordion style):
│   │   ├── Job title
│   │   ├── Company name
│   │   ├── Dates (badges)
│   │   ├── Location
│   │   └── Expanding details:
│   │       ├── Description
│   │       └── Highlight bullets
│   └── Expandable/collapsible cards
│
├── 🏆 Achievements Section (#achievements)
│   ├── Section Title
│   ├── Top 3 Impact Strip
│   │   ├── ★ Hackathon Winner
│   │   ├── ★ Recognized at Appathon
│   │   └── ★ MERN Stack Expertise
│   ├── Achievement Cards (3 columns):
│   │   ├── Trophy Card
│   │   │   ├── Icon (animated)
│   │   │   ├── Category badge
│   │   │   ├── Title
│   │   │   └── Description
│   │   ├── Award Card
│   │   └── Zap/Expertise Card
│   └── Hover effects with glow
│
├── 🛠️ Skills Section (#skills)
│   ├── Section Title
│   ├── Skill Categories (2x2 grid):
│   │   ├── Frontend Skills:
│   │   │   ├── React.js
│   │   │   ├── Next.js
│   │   │   ├── JavaScript
│   │   │   ├── TypeScript
│   │   │   ├── Tailwind CSS
│   │   │   └── React Native (Basic)
│   │   ├── Backend Skills:
│   │   │   ├── Node.js
│   │   │   ├── Express.js
│   │   │   ├── MongoDB
│   │   │   └── REST APIs
│   │   ├── Tools & Others:
│   │   │   ├── Git
│   │   │   ├── Multer
│   │   │   └── Redis
│   │   └── Specializations:
│   │       ├── Responsive Design
│   │       ├── Scalable Apps
│   │       └── Clean Code
│   └── Tech count summary
│
├── 🎓 Education Section (#education)
│   ├── Section Title
│   ├── Timeline with connecting line:
│   │   ├── UTU - B.Tech CSE (2024-2028)
│   │   │   ├── Icon (GraduationCap)
│   │   │   └── Details card
│   │   ├── Tula's - B.Tech (2024-2028)
│   │   │   ├── Icon (GraduationCap)
│   │   │   └── Details card
│   │   └── 12th Grade (2023-2024)
│   │       ├── Icon (BookOpen)
│   │       └── Details card
│   └── Vertical timeline connection
│
├── 📧 Contact Section (#contact)
│   ├── Section Title
│   ├── Contact Cards (3 columns):
│   │   ├── Email (codecrafter432@gmail.com)
│   │   │   └── Copy to clipboard button
│   │   ├── Alternate Email (kprabhat1585@gmail.com)
│   │   │   └── Copy to clipboard button
│   │   └── LinkedIn
│   │       └── Opens in new tab
│   ├── Resume Download Section:
│   │   ├── Download Resume Button (JSON format)
│   │   └── Description
│   └── Email CTA link
│
├── 🔗 Footer
│   ├── About section
│   ├── Quick links:
│   │   ├── About
│   │   ├── Experience
│   │   ├── Skills
│   │   └── Contact
│   ├── Social links:
│   │   ├── Email
│   │   └── LinkedIn
│   ├── Copyright notice
│   └── Credits
│
└── 🎨 Animated Background (Throughout)
    ├── Canvas-based particles
    ├── Gradient mesh overlay
    ├── Connecting lines
    └── Smooth motion (60fps)
```

## Detailed Section Content

### Hero Section
- **Primary Purpose**: First impression, engagement
- **Key Elements**: Name, role, high-impact summary
- **CTAs**: Two action buttons for navigation
- **Animations**: Staggered fade-in, scroll indicator

### Experience Section
- **Purpose**: Showcase work history and roles
- **Format**: Accordion-style timeline cards
- **Note**: Currently shows "Open to Opportunities" as seeking role
- **Expandable Details**: Click to reveal achievements and metrics

### Achievements Section
- **Purpose**: Highlight recognition and wins
- **Featured Wins**:
  - TechFusion Hackathon Winner
  - Appathon | The Art of Web Award
  - Full MERN Stack Expertise
- **Cards**: Trophy-style with animated icons

### Skills Section
- **Total Skills**: 20+
- **Categories**: Frontend, Backend, Tools, Specializations
- **Interactive**: Hover effects, smooth animations
- **Summary**: Shows total skill count

### Education Section
- **Timeline Format**: Vertical flow with connecting line
- **Details Per Entry**: Institution, degree, field, timeline
- **Icons**: Different icons for college vs secondary

### Contact Section
- **Contact Methods**: Email (2x) and LinkedIn
- **Interaction**: Copy-to-clipboard for emails
- **Resume**: Download as JSON
- **Purpose**: Encourage communication

## Interactive Elements

### Animations
- Splash screen (1.5s)
- Scroll reveals (staggered)
- Hover states (scale, glow)
- Section transitions
- Parallax effects
- Progress bar on scroll

### Accessibility
- Keyboard navigation
- Focus visual indicators
- ARIA labels
- Respects prefers-reduced-motion
- Touch-friendly targets

### Responsive Behavior
- Mobile: Stacked layouts, burger menu
- Tablet: Optimized spacing, readable font
- Desktop: Full grid layouts, hover effects

---

**Navigation Flow**: Front → Back (Hero → Footer) or Jump (via Nav) → Automatic smooth scroll
