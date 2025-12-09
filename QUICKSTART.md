# 🚀 Cricket Live Analytics - Quick Start Guide

## Prerequisites
- Node.js 18+
- npm 9+
- Docker & Docker Compose (optional but recommended)
- MongoDB
- Redis

## 1️⃣ Clone Repository
```bash
git clone https://github.com/arpancodez/cricket-live-analytics.git
cd cricket-live-analytics
```

## 2️⃣ Setup Environment Variables
```bash
cp .env.example .env.local
cp .env.example apps/backend/.env
cp .env.example apps/frontend/.env.local
```

## 3️⃣ Installation & Setup

### Option A: Docker (Recommended)
```bash
# Start all services
npm run docker:build

# Or just start without rebuild
npm run docker:up
```
Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- MongoDB: localhost:27017
- Redis: localhost:6379

### Option B: Local Setup

#### Install Dependencies
```bash
npm install
npm install --workspace=apps/backend
npm install --workspace=apps/frontend
```

#### Start MongoDB & Redis
```bash
# MongoDB
mongod

# Redis (in another terminal)
redis-server
```

#### Start Backend
```bash
cd apps/backend
npm run dev
# Server runs on http://localhost:3001
```

#### Start Frontend (in another terminal)
```bash
cd apps/frontend
npm run dev
# App runs on http://localhost:3000
```

## 4️⃣ Testing the Application

### API Health Check
```bash
curl http://localhost:3001/api/health
```

### Get Matches
```bash
curl http://localhost:3001/api/matches
```

### Open Frontend
```
http://localhost:3000
```

## 📁 Project Structure
```
cricket-live-analytics/
├── apps/
│   ├── backend/          # Express API
│   │   └── src/
│   │       └── index.ts  # Main server
│   └── frontend/         # Next.js App
├── .env.example
├── docker-compose.yml
├── package.json
└── README.md
```

## 🔧 Available Scripts

### Root Level
```bash
npm run dev              # Run both apps in parallel
npm run docker:up       # Start Docker containers
npm run docker:down     # Stop containers
```

### Backend
```bash
cd apps/backend
npm run dev              # Development mode
npm run build            # Build TypeScript
npm run start            # Production mode
```

### Frontend  
```bash
cd apps/frontend
npm run dev              # Development mode
npm run build            # Build for production
npm run start            # Production mode
```

## 🎯 Features Currently Available

- ✅ Live score API endpoints
- ✅ WebSocket support for real-time updates
- ✅ Demo match and player data
- ✅ Express backend with Socket.io
- ✅ Next.js frontend setup
- ✅ Docker configuration

## 📊 API Endpoints

### Matches
- `GET /api/matches` - Get all matches
- `GET /api/matches/:id` - Get match details
- `POST /api/matches` - Create new match

### Players
- `GET /api/players` - Get all players
- `GET /api/players/:id` - Get player details

### Analytics
- `GET /api/analytics/predictions` - Get AI predictions

## 🔌 WebSocket Events

- `join-match` - Join a match room
- `score-update` - Send score updates
- `score:update` - Receive score updates

## 🛠️ Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**MongoDB connection error:**
Ensure MongoDB is running and URI in .env is correct

**Redis connection error:**
Ensure Redis is running on port 6379

## 📚 Next Steps

1. Explore the codebase
2. Add your cricket data
3. Customize the UI
4. Deploy to production

## 🚢 Deployment

See README.md for deployment guides for Vercel and AWS

## 💬 Support

For issues, open a GitHub issue or contact arpan@example.com

---
**Happy coding! 🎉**
