# 🇮🇳 Rashtra Vayu — Personalized Weather & AQI Health Advisory

> AI-powered weather and air-quality intelligence for India, providing personalized health advisories based on real-time environmental conditions and individual user profiles.

## 🌐 Live Demo

🚀 **Live Website:** https://rashtravayu.netlify.app/

---

## 📌 About the Project

**Rashtra Vayu** is an AI-powered personalized weather and Air Quality Index (AQI) health advisory platform.

Traditional weather and AQI applications provide the same warnings and recommendations to everyone. However, the impact of environmental conditions can vary depending on a person's age, health condition, occupation, and level of outdoor exposure.

Rashtra Vayu addresses this problem by combining **real-time weather data, AQI information, and user profile information** to generate personalized and easy-to-understand health advisories.

---

## 🎯 Problem Statement

Generic weather and AQI alerts use common thresholds and recommendations for everyone.

However, different people can have different levels of risk under the same environmental conditions.

For example:

- A healthy adult working indoors
- An elderly person
- A person with asthma
- An outdoor worker

may all require different levels of precaution when exposed to the same weather and air-quality conditions.

**Rashtra Vayu provides personalized environmental health guidance based on individual user profiles.**

---

## ⚙️ How It Works

```text
User Profile
     ↓
Location Selection
     ↓
Real-Time Weather + AQI Data
     ↓
Environmental Analysis
     ↓
AI Personalization
     ↓
Personalized Health Advisory
     ↓
Dashboard + Trends
```

The platform analyzes the user's profile together with current environmental conditions and generates recommendations relevant to that specific user.

---

## ✨ Key Features

### 🌤️ Real-Time Weather Information
Displays current weather conditions for the selected location.

### 💨 AQI Monitoring
Provides air-quality information to help users understand current pollution levels.

### 👤 Personalized User Profile
Users can provide information such as:

- Age group
- Health condition
- Occupation

This information is used to personalize the advisory.

### 🤖 AI-Powered Health Advisory
Generates personalized, plain-English recommendations based on the user's profile, weather conditions, and AQI.

### 📊 Weather & AQI Trends
Provides historical/trend information to help users understand how environmental conditions are changing.

### ⚠️ Personalized Risk Awareness
Instead of treating every user equally, the system considers individual circumstances when generating recommendations.

### 📱 Responsive Interface
Designed to provide an accessible experience across different screen sizes.

---

## 🧠 AI Personalization

The AI layer combines environmental information with user-specific information.

```text
User Profile
     +
Weather Data
     +
AQI Data
     ↓
AI / LLM
     ↓
Personalized Health Advisory
```

The goal is to convert complex environmental data into simple and actionable recommendations that are easier for individual users to understand.

---

## 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript / JSX

### Backend
- Node.js
- Python

### APIs & AI
- Weather API
- AQI Data API
- AI / LLM Integration

### Deployment
- Netlify
- Vercel Configuration

---

## 📁 Project Structure
```
rashtra-vayu/
├── index.html                 # HTML — page shell
├── css/
│   └── styles.css             # CSS — custom styles & animations
├── js/
│   └── app.jsx                # JavaScript (React 18 JSX) — full UI & logic
├── logo.png                   # Brand logo
├── netlify.toml               # Netlify config
├── vercel.json                # Vercel config
└── backend/
    ├── node/
    │   ├── server.js          # Node.js / Express (optional API server)
    │   └── package.json       # Node dependencies
    └── python/
        ├── app.py             # Python HTTP server (optional)
        ├── run_demo.py        # Local launcher
        └── requirements.txt   # Python dependencies
```

---

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/ayushcoder25/rashtra-vayu.git
cd rashtra-vayu
```

### Install Node.js Dependencies
```bash
cd backend/node
npm install
```

### Install Python Dependencies
```bash
cd ../python
pip install -r requirements.txt
```

### Run the Project
Follow the configuration provided in the project files to run the frontend and backend locally.

---

## 🌐 Live Application

The project is deployed and accessible online:

🚀 **Rashtra Vayu:** https://rashtravayu.netlify.app/

---

## 🔮 Future Improvements

- 📍 Automatic GPS-based location detection
- 🔔 Real-time health alerts and notifications
- 🗺️ India-wide AQI heatmap
- 📈 Advanced long-term environmental trend analysis
- 🗣️ Multilingual AI health advisories
- 📱 Progressive Web App / Mobile Application
- 🧠 Advanced personalized health-risk prediction
- 🌳 Integration of additional environmental parameters

---

## 🏆 Hackathon Project

Rashtra Vayu was developed as a solution for the AI-Powered Personalized Weather & AQI Health Advisory problem statement.

The project focuses on combining real-time environmental data with AI-driven personalization to make weather and air-quality information more meaningful and actionable for individual users.

---

## 👨‍💻 Team

Built with ❤️ for the hackathon.

---

## 📄 License

This project is developed for educational and hackathon purposes.
