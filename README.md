# HealthIQ - AI-Powered Health Information and Community Platform

A comprehensive health platform that combines artificial intelligence with community-driven insights to provide accessible, a health guidance for diverse communities.

## 🎯 Project Overview

HealthIQ is a sophisticated health information platform that addresses the gap in accessible health guidance for semi-urban and rural communities. It combines AI intelligence with community knowledge to provide reliable health and nutrition information, disease education, and personalized diet planning.

**Live Project**: `https://dietiq.vercel.app/` (Production environment)

## 🚀 Tech Stack

- **Frontend**: React 19.2.0 + Vite (High-performance rendering)
- **Routing**: React Router v7 (Centralized route configuration)
- **Styling**: CSS Modules + Custom Styling (Modern UI components)
- **AI Engine**: Google Generative AI (Gemini Flash for ingredient insights)
- **Real-time DB**: Appwrite (Real-time chat and community features)
- **Maps**: Leaflet + leaflet.heat (Interactive disease heatmap)
- **PDF Generation**: @react-pdf/renderer (Diet plan PDFs)
- **State Management**: React Hooks + Zustand (Global state management)
- **Icons**: Custom SVG and Unicode icons

## 📁 Project Structure

The project follows a scalable **Component-Based Architecture**:

```
d:\dietiq
├── .env
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
├── vite.config.js
├── public
│   └── data
└── src
    ├── assets
    ├── components
    ├── constants
    ├── data
    ├── layouts
    └── pages
        └── home\
```

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory with the following variables:
```env
VITE_APPWRITE_PROJECT_ID = "your_appwrite_project_id"
VITE_APPWRITE_ENDPOINT = "https://your_appwrite_endpoint/v1"
VITE_APPWRITE_DATABASE_ID = "your_database_id"
VITE_APPWRITE_COLLECTION_ID = "collection_name"
VITE_GEMINI_API_KEY = "your_gemini_api_key"
```

### 3. Run Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173`

### 4. Build & Deploy
```bash
npm run build
```

## 🌟 Key Features

### Community Health Network
- **Public Discussions**: Platform for health-related topic discussions
- **Expert Verification**: Medical professionals verify community posts
- **Real-time Insights**: Extracts disease and location insights from discussions
- **Voting System**: Community can upvote/downvote posts

### Disease HeatMap
- **AI Analysis**: Analyzes community health conversations to detect early signs of regional disease outbreaks
- **Interactive Map**: Displays disease prevalence with intensity indicators
- **Detailed Information**: Shows explanations and health tips for each location

### Health Awareness Trivia
- **Educational Quizzes**: Structured health quizzes on hygiene, medicines, preventive care
- **Multiple Topics**: Covers various health aspects in general knowledge format
- **Progress Tracking**: Shows score and review of answers

### Adaptive Diet Plan Generator
- **Personalized Calculations**: Uses BMR and activity level to determine calorie needs
- **Macro Distribution**: Balanced protein, carbohydrate, and fat distribution
- **Diet Preferences**: Supports vegetarian, non-vegetarian, and vegan diets
- **PDF Export**: Generates 7-day meal plans in PDF format

### Ingredient Insight
- **AI-Powered Analysis**: Explains food ingredients and their properties
- **Safety Information**: Identifies natural/artificial ingredients and risk levels
- **Health Impact**: Provides information on who should limit or avoid ingredients

## 🔒 Security & Privacy
- **Secure API Keys**: Environment variables protect sensitive API keys
- **Appwrite Integration**: Secure real-time database with permission controls
- **Privacy Focused**: No personal health data stored unnecessarily

## 🌍 Accessibility Features
- **Multilingual Support**: Designed for regional language adaptation  (Future adoption)
- **Simple Interface**: Easy-to-use interface for users with varying digital literacy
- **Community Driven**: Incorporates local health practices and knowledge

## ✅ Implementation Status
- [x] **Community Chat**: Real-time health discussion forum with expert verification
- [x] **Disease Heatmap**: Interactive map showing disease outbreak patterns
- [x] **Health Trivia**: Educational quiz system for health awareness
- [x] **Diet Generator**: Personalized diet planning with PDF export
- [x] **Ingredient Insights**: AI-powered ingredient safety checker
- [x] **Disease Education**: Comprehensive database of common diseases

---

**Built with ❤️ by Health Innovators for the future of community health education**
