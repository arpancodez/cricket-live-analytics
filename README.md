# Cricket Live Analytics 🏏

**A Real-time Cricket Match Analytics Platform with Live Scores, Statistics, and AI-Powered Insights**

![Next.js](https://img.shields.io/badge/Next.js-13+-black) ![Node.js](https://img.shields.io/badge/Node.js-18+-339933) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

## Overview

Cricket Live Analytics is an enterprise-grade, full-stack platform designed to provide real-time cricket match analytics, live score tracking, and AI-powered predictive insights. Built with modern web technologies, it offers seamless WebSocket-based live updates, comprehensive statistics, player performance tracking, and machine learning-driven match predictions.

## ✨ Features

### Core Features
- 🔴 **Live Match Tracking**: Real-time score updates via WebSockets
- 📊 **Advanced Statistics**: Ball-by-ball analysis, player metrics, and team performance
- 👥 **Player Analytics**: Individual performance tracking, career stats, and form indicators
- 🤖 **AI Predictions**: ML-based win probability, player performance forecasts
- 📈 **Interactive Dashboards**: Real-time visualization of match data
- 💾 **Data Persistence**: MongoDB for reliable data storage
- 🔐 **Authentication**: JWT-based secure user sessions
- 📱 **Responsive Design**: Mobile-first UI with Tailwind CSS
- 🌐 **REST & GraphQL APIs**: Flexible data querying
- 📧 **Notifications**: Real-time alerts for match events

### Advanced Features
- Historical data analysis and trend prediction
- Player comparison tools
- Custom analytics dashboards
- Export reports in multiple formats (PDF, CSV)
- Admin panel for match management
- Rate limiting and caching for optimal performance

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 13+ (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Real-time**: Socket.io client
- **Charts**: Chart.js, Recharts
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js (18+)
- **Framework**: Express.js / NestJS
- **Language**: TypeScript
- **Real-time**: Socket.io
- **Database**: MongoDB + Redis (caching)
- **Authentication**: JWT
- **Validation**: Joi, Zod
- **API**: REST + GraphQL (Apollo Server)

### DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes (production)
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (frontend), AWS ECS (backend)
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack

### ML & Data Science
- **ML Framework**: TensorFlow / PyTorch
- **Data Processing**: Pandas, NumPy
- **Analysis**: Jupyter Notebooks

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Redis
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arpancodez/cricket-live-analytics.git
   cd cricket-live-analytics
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd apps/frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Backend .env
   MONGO_URI=mongodb://localhost:27017/cricket
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=your_secret_key
   NODE_ENV=development

   # Frontend .env.local
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_WS_URL=ws://localhost:3001
   ```

4. **Start Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd apps/backend
   npm run dev

   # Terminal 2 - Frontend
   cd apps/frontend
   npm run dev
   ```

   Application will be available at `http://localhost:3000`

## 📁 Project Structure

```
cricket-live-analytics/
├── apps/
│   ├── frontend/                 # Next.js application
│   │   ├── src/
│   │   │   ├── app/             # App router pages
│   │   │   ├── components/      # React components
│   │   │   ├── hooks/           # Custom hooks
│   │   │   ├── store/           # Zustand stores
│   │   │   ├── services/        # API services
│   │   │   └── types/           # TypeScript types
│   │   └── public/              # Static assets
│   │
│   └── backend/                  # Express/NestJS API
│       ├── src/
│       │   ├── routes/          # API routes
│       │   ├── controllers/     # Request handlers
│       │   ├── services/        # Business logic
│       │   ├── models/          # MongoDB schemas
│       │   ├── middleware/      # Express middleware
│       │   ├── websocket/       # Socket.io handlers
│       │   ├── utils/           # Helper functions
│       │   └── config/          # Configuration
│       └── tests/               # Test files
│
├── ml/                           # Machine Learning
│   ├── models/                  # Trained ML models
│   ├── notebooks/               # Jupyter notebooks
│   └── scripts/                 # Data processing scripts
│
├── docker-compose.yml           # Local development
├── kubernetes/                  # K8s manifests
└── README.md
```

## 🔗 API Endpoints

### Live Matches
- `GET /api/matches` - List all matches
- `GET /api/matches/:id` - Get match details
- `GET /api/matches/:id/live` - Live match data
- `POST /api/matches` - Create match (admin)

### Player Stats
- `GET /api/players` - List players
- `GET /api/players/:id` - Player profile
- `GET /api/players/:id/stats` - Player statistics

### Analytics
- `GET /api/analytics/predictions` - Match predictions
- `GET /api/analytics/trends` - Trend analysis
- `POST /api/analytics/compare` - Compare players/teams

### WebSocket Events
- `match:update` - Live match updates
- `player:event` - Player action events
- `score:update` - Score changes
- `commentary:new` - New commentary

## 📊 Database Schema

### Collections
- **matches**: Match information and results
- **players**: Player profiles and metadata
- **innings**: Innings data
- **deliveries**: Ball-by-ball information
- **teams**: Team data
- **users**: User accounts and preferences
- **predictions**: ML-generated predictions

## 🧪 Testing

```bash
# Run all tests
npm run test

# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 🐳 Docker Support

```bash
# Build and run with Docker Compose
docker-compose up -d

# Individual services
docker build -t cricket-frontend ./apps/frontend
docker build -t cricket-backend ./apps/backend
```

## 📦 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Backend (AWS ECS / Docker)
```bash
docker build -t cricket-backend .
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin
docker tag cricket-backend:latest [ECR_URI]/cricket-backend:latest
docker push [ECR_URI]/cricket-backend:latest
```

## 📈 Performance Metrics

- **API Response Time**: < 100ms (p95)
- **WebSocket Latency**: < 50ms
- **Live Update Frequency**: 100ms intervals
- **Database Query Optimization**: Indexed queries
- **Caching**: Redis with 5-min TTL

## 🔒 Security

- JWT authentication with refresh tokens
- Rate limiting (100 req/min per IP)
- CORS configuration
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- HTTPS only
- Secrets management with environment variables

## 📝 Code Standards

- **Linting**: ESLint + Prettier
- **Type Safety**: Strict TypeScript
- **Code Quality**: SonarQube
- **Pre-commit Hooks**: Husky
- **Commit Messages**: Conventional Commits

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Socket.io Documentation](https://socket.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📊 Project Roadmap

- [x] Core live score functionality
- [ ] AI-powered match predictions
- [ ] Multi-format support (T20, ODI, Test)
- [ ] Mobile app (React Native)
- [ ] Advanced player analytics
- [ ] Blockchain-based predictions market
- [ ] Multiplayer fantasy cricket integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arpan** - [@arpancodez](https://github.com/arpancodez)

## 🙏 Acknowledgments

- Cricket data sources and APIs
- Open source community
- Contributors and testers

## 📞 Support

For support, email arpan@example.com or open an issue on GitHub.

---

**⭐ If you find this project helpful, please give it a star!**


## Getting Started

```bash
npm install
npm start
```

## API Documentation

### Real-time Updates
- WebSocket connection for live score updates
- ML predictions every 30 seconds
- Player performance calculations

## Tech Stack

- Frontend: Next.js, WebSockets
- Backend: Node.js, Express
- ML: Python, TensorFlow
- Database: MongoDB
