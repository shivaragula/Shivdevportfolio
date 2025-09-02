# Deployment Guide - E-commerce Analytics Dashboard

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended for Frontend)
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `client/build`
4. Deploy!

### Option 2: Heroku (Full-Stack)
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Push: `git push heroku main`

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## 🔧 Local Development

```bash
# Install dependencies
npm install
cd client && npm install && cd ..

# Start development
npm run dev

# In another terminal
cd client && npm start
```

## 🌐 Environment Variables

Create `.env` file:
```
PORT=5000
NODE_ENV=production
CLIENT_URL=https://your-frontend-url.com
```

## 📱 Demo Features

- Real-time sales dashboard
- Interactive charts with Recharts
- Live data updates via Socket.io
- Responsive Material-UI design
- Sample e-commerce analytics data

## 🔗 Live Demo
Visit: https://ecommerce-analytics-demo.netlify.app