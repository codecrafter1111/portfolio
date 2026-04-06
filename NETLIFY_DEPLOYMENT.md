# Netlify Deployment Guide for Portfolio

## Pre-Deployment Checklist ✅

- [x] No database connections needed
- [x] No API keys or secrets required
- [x] All static assets optimized (images in /public)
- [x] Environment variables: None (not required)
- [x] Build dependencies: All satisfied
- [x] TypeScript compiled successfully
- [x] ESLint configured and passing
- [x] Next.js version: ^16.2.2 (fully compatible)

## Deployment Steps

### 1. Connect to GitHub
- Push your code to GitHub
- Visit https://netlify.com
- Click "New site from Git"
- Authorize and select your repository

### 2. Configure Build Settings
Netlify will auto-detect Next.js settings. These are already configured in:
- `netlify.toml` - Build config
- `.nvmrc` - Node version (18)
- `package.json` - Build script: `npm run build`

### 3. Deploy
- Click "Deploy site"
- Netlify will automatically:
  - Install dependencies
  - Run `npm run build`
  - Deploy the `.next` directory
  - Set up CDN cache headers

## After Deployment

### Custom Domain
1. Domain Settings → Custom Domains
2. Add your domain
3. Update DNS records (Netlify will provide instructions)

### SSL Certificate
- Automatically provisioned by Netlify
- Renews automatically

### Environment Variables (if needed later)
- Site Settings → Build & Deploy → Environment
- Add via UI (no .env files needed for this portfolio)

## Performance Tips

The configuration includes:
- ✅ HTTP/2 push
- ✅ Gzip compression
- ✅ Image optimization (already in next.config.js)
- ✅ Cache headers optimized
- ✅ Security headers included

## Troubleshooting

### Build fails with "npm ERR"
→ Run `npm install` locally, commit `package-lock.json`

### Site loads but CSS/JS not applying
→ Check cache: Site Settings → Clear cache and redeploy

### Images not showing
→ Verify paths use `/` prefix: `/public/path/image.png` → `/path/image.png`

## Support
- Netlify Docs: https://docs.netlify.com/
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/next-js/
