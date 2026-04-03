# Deployment Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

## Production Build

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Hosting Options

### 1. Vercel (Recommended)
Fastest and easiest deployment:

```bash
npm install -g vercel
vercel
```

### 2. Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### 3. AWS Amplify
1. Push code to GitHub
2. Connect to AWS Amplify
3. Configure as Next.js app
4. Deploy

### 4. Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build app
COPY . .
RUN npm run build

# Start server
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t prabhat-portfolio .
docker run -p 3000:3000 prabhat-portfolio
```

### 5. Traditional Server (Linux)
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone <your-repo-url>
cd portfolio2
npm install
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## Performance Tips

1. **Enable Caching**: Configure CDN headers for static assets
2. **Enable Compression**: gzip compression for CSS/JS
3. **Image Optimization**: Next.js handles this automatically
4. **Monitor**: Use Vercel Analytics or similar

## Environment Variables

No environment variables are required for this portfolio. If you add email functionality in the future, add:

```env
NEXT_PUBLIC_EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_api_key_here
```

## Custom Domain

### Vercel
1. Go to project settings
2. Add custom domain
3. Update DNS records (instructions provided)

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Update DNS records

## Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### CSS not loading
Check that Tailwind CSS is properly configured in `tailwind.config.js`

## Performance Monitoring

Add analytics:
```bash
npm install @vercel/analytics
```

Update page.tsx:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div>
      {/* your content */}
      <Analytics />
    </div>
  );
}
```

---

Need help? Check the main README.md for more information.
