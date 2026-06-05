# InvestEasy 💰

An AI-powered investment learning and recommendation platform designed for beginners.

InvestEasy helps users understand their risk profile, receive personalized portfolio recommendations, and learn investing concepts through an AI tutor.

---

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality

### Risk Assessment

Users complete a questionnaire covering:

* Investment Horizon
* Market Crash Reaction
* Loss Tolerance
* Investment Knowledge
* Portfolio Preference
* Risk vs Return Preference

The system calculates:

* Risk Score
* Investor Classification

Investor Types:

* Conservative
* Moderate
* Aggressive

---

### Portfolio Recommendations

Based on assessment results, InvestEasy generates:

* Portfolio Allocation
* Investment Distribution
* AI-Generated Explanation

Sample Allocation:

#### Conservative

* Stocks: 20%
* Mutual Funds: 30%
* Bonds: 40%
* Cash: 10%

#### Moderate

* Stocks: 40%
* Mutual Funds: 40%
* Bonds: 15%
* Cash: 5%

#### Aggressive

* Stocks: 70%
* Mutual Funds: 20%
* Bonds: 5%
* Cash: 5%

---

### AI Investment Tutor

Users can ask investing-related questions such as:

* What is a mutual fund?
* What is diversification?
* Why are bonds safer than stocks?

The AI Tutor:

* Uses simple language
* Provides beginner-friendly explanations
* Uses examples and analogies
* Avoids personalized financial advice

---

### History Tracking

#### Assessment History

View previous:

* Risk Scores
* Investor Types
* Assessment Dates

#### Recommendation History

View previous:

* Portfolio Recommendations
* Investment Goals
* Recommendation Dates

---

## 🏗️ System Architecture

User

↓

Frontend (React + Tailwind CSS)

↓

Backend API (Node.js + Express)

↓

Business Logic Layer

* Risk Engine
* Recommendation Engine
* AI Integration

↓

MongoDB Atlas

↓

Gemini AI

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

### AI

* Google Gemini 2.5 Flash
* @google/genai

---

## 📂 Project Structure

### Backend

```text
backend/src

config/
controllers/
middleware/
models/
routes/
services/
utils/

app.js
server.js
```

### Frontend

```text
frontend/src

api/
components/
context/
pages/
services/

App.jsx
main.jsx
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd InvestEasy
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

Run:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Assessments

```http
POST /api/assessments
GET  /api/assessments
GET  /api/assessments/latest
```

### Recommendations

```http
POST /api/recommendations/generate
GET  /api/recommendations
GET  /api/recommendations/latest
```

### AI Tutor

```http
POST /api/tutor/ask
```

---

## 📸 Screenshots

Add screenshots of:

* Login Page
* Dashboard
* Assessment Page
* Recommendation Page
* Tutor Page
* History Pages

---

## ⚠️ Disclaimer

InvestEasy is an educational platform.

It:

* Does not predict stock prices
* Does not execute trades
* Does not connect to brokers
* Does not guarantee investment returns
* Does not provide personalized financial advice

All recommendations are generated for educational purposes only.

---

## 👨‍💻 Author

Sai

Built as a full-stack MERN + AI project to help beginners learn investing through risk assessment, portfolio recommendations, and AI-powered financial education.
