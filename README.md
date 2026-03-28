# PathForge – Intelligent Learning Roadmap Platform

A full-stack MERN application where users follow structured learning roadmaps with progress tracking, analytics, weakness detection, and AI-based recommendations.

## ✨ Features
- **Structured Roadmaps**: DSA, MERN, Java Backend, and more.
- **Progress Tracking**: Real-time updates as you complete modules.
- **Intelligent Analytics**: Visualize your learning journey with interactive charts.
- **Weakness Detection**: Identify areas where you need more practice.
- **AI Recommendations**: Personalized suggestions based on your performance.
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS.

## 🛠 Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS, Axios, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose).
- **Authentication**: JWT (JSON Web Tokens).

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Backend Setup
```bash
cd server
cp .env.example .env    # Edit .env with your MongoDB URI
npm install
npm run seed            # Seed 4 predefined roadmaps
npm run dev             # Start dev server on port 5000
```

### Frontend Setup
```bash
cd client
npm install
npm run dev             # Start Vite dev server on port 5173
```

## 📁 Project Structure
```
pathforge/
├── server/              # Express.js + MongoDB backend
│   ├── config/          # Database connection
│   ├── controllers/     # Route handlers
│   ├── middleware/       # JWT auth middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route definitions
│   ├── services/        # Business logic (weakness detection, recommendations)
│   └── data/            # Seed data for roadmaps
├── client/              # React + Vite + Tailwind frontend
│   └── src/
│       ├── api/         # Axios instance
│       ├── components/  # Reusable UI components
│       ├── context/     # Auth context
│       └── pages/       # Route pages
```

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/signup` | No | Register |
| POST | `/api/auth/login` | No | Login |
| GET | `/api/auth/me` | Yes | Get profile |
| PUT | `/api/auth/me` | Yes | Update profile |
| GET | `/api/roadmaps` | Yes | List roadmaps |
| GET | `/api/roadmaps/:id` | Yes | Roadmap detail |
| GET | `/api/progress/:roadmapId` | Yes | Get progress |
| POST | `/api/progress/:roadmapId/complete` | Yes | Mark complete |
| POST | `/api/progress/:roadmapId/uncomplete` | Yes | Unmark |
| GET | `/api/analytics/overview` | Yes | Stats |
| GET | `/api/analytics/weaknesses` | Yes | Weak areas |
| GET | `/api/analytics/recommendations` | Yes | AI recs |
| GET | `/api/analytics/activity` | Yes | Daily activity |

## 🚀 Deployment

- **Frontend**: Deploy `client/` to Vercel
- **Backend**: Deploy `server/` to Render
- Set `VITE_API_URL` environment variable on Vercel to your Render backend URL
