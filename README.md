# Weather App (Project 03)

A responsive, real-time weather application built with React and TypeScript. The app fetches live weather data from a public API and displays current conditions including temperature, humidity, wind speed, and more — with a dedicated default view for **Lagos, Nigeria**.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Features](#features)
- [App Taxonomy](#app-taxonomy)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Methodology](#methodology)
- [Expected Outcomes](#expected-outcomes)

---

## Project Overview

The Weather App is a web-based application that provides users with real-time weather information. It fetches data from a public weather API (e.g., OpenWeatherMap) and displays relevant weather details in a clean, user-friendly interface. A key feature is the default Lagos weather view, offering immediate local relevance for Nigerian users.

---

## Objectives

- Build a responsive and user-friendly weather application
- Practice React TypeScript concepts such as `useEffect` and asynchronous API calls
- Learn how to handle and display API data effectively
- Implement a dedicated section or default view for Lagos weather

---

## Features

- Real-time weather data (temperature, humidity, wind speed, conditions)
- Default Lagos, Nigeria weather view
- Loading state with visual feedback
- Error state handling for failed API calls
- Fully responsive UI
- Search for weather by city name

---

## App Taxonomy

A breakdown of the application's structure, components, and data flow.

### Component Tree

```
App
├── Header
│   └── AppTitle
├── SearchBar
│   └── CityInput
├── WeatherDashboard
│   ├── LagosWeatherCard (default view)
│   │   ├── CityName
│   │   ├── Temperature
│   │   ├── WeatherCondition
│   │   ├── WeatherIcon
│   │   └── WeatherDetails
│   │       ├── Humidity
│   │       ├── WindSpeed
│   │       └── FeelsLike
│   └── SearchedWeatherCard (conditional)
│       └── [same structure as LagosWeatherCard]
├── LoadingSpinner (conditional)
└── ErrorMessage (conditional)
```

### Application States

| State | Description | UI Behavior |
|---|---|---|
| `idle` | App just loaded, no search performed | Shows Lagos weather card |
| `loading` | API call in progress | Shows spinner, hides cards |
| `success` | Data fetched successfully | Renders weather card with data |
| `error` | API call failed | Displays error message with retry option |

### Data Flow

```
User Action (search / on mount)
        │
        ▼
  useEffect / Handler
        │
        ▼
  Async API Call (OpenWeatherMap)
        │
   ┌────┴────┐
   ▼         ▼
Success    Error
   │         │
   ▼         ▼
Set Data   Set Error
State      State
   │         │
   ▼         ▼
Render    Render
Weather   Error
Card      Message
```

### TypeScript Interfaces

```ts
interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  icon: string;
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

interface OpenWeatherResponse {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

interface OpenWeatherErrorResponse {
  cod: number | string;
  message: string;
}
```

### Key Hooks & Utilities

| Hook / Utility | Purpose |
|---|---|
| `useEffect` | Triggers Lagos fetch on component mount |
| `useState` | Manages weather data, loading, and error states |
| `async/await` | Handles asynchronous API fetch calls |
| `fetchWeather(city)` | Utility function to call the weather API |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend framework |
| TypeScript | Static typing and improved DX |
| Tailwind CSS | Utility-first responsive styling |
| OpenWeatherMap API | Live weather data source |
| Vite | Build tool and dev server |

---

## Project Structure

```
weather-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── WeatherDetails.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorMessage.tsx
│   ├── hooks/
│   │   └── useWeather.ts
│   ├── services/
│   │   └── weatherApi.ts
│   ├── types/
│   │   └── weather.types.ts
│   ├── utils/
│   │   └── formatWeather.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- OpenWeatherMap API key ([get one free here](https://openweathermap.org/api))

### Installation

```bash
# Clone the repository
git clone https://github.com/PEeGEe21/weather-app.git

# Navigate into the project directory
cd weather-app

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
```

### Running the App

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

---

## API Integration

The app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current).

**Endpoint:**
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

**Example — Lagos:**
```
GET https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=YOUR_KEY&units=metric
```

---

## State Management

State is managed locally using React's built-in `useState` and `useEffect` hooks. No external state library is required for this project scope.

```ts
const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  fetchWeather("Lagos"); // Default city on mount
}, []);
```

---

## Methodology

The project follows a component-based architecture in React TypeScript:

- **`useEffect`** triggers the Lagos weather fetch automatically on mount
- **`async/await`** handles all asynchronous API operations cleanly
- **Loading, success, and error states** are managed explicitly to guide user experience
- **TypeScript interfaces** enforce type safety across components and API responses
- **Tailwind CSS** handles responsive layout without custom stylesheets

## Live Preview
```
For a live preview - https://weather-app-two-ruddy-47.vercel.app/

```
---