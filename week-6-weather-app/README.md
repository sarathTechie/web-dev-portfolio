# 🌦️ Weather Dashboard App (Week 6)

## 📖 Project Overview
The Weather Dashboard is a dynamic Single Page Application (SPA) that interacts with the **OpenWeatherMap API**. It allows users to search for any city worldwide and instantly retrieve current weather conditions and a 5-day forecast. This project bridges the gap between static design and dynamic data.

## 🚀 Key Features
* **Live API Integration:** Fetches real-time data (Temperature, Humidity, Wind Speed, Weather Icons) asynchronously.
* **Smart Search:** Users can search for any city; the app handles errors (e.g., "City Not Found") gracefully.
* **5-Day Forecast:** Processes complex JSON API responses to filter and display weather predictions for upcoming days.
* **Persistent Preferences:** Uses `localStorage` to remember the last searched city, so the user sees relevant data immediately upon returning to the app.

## 🛠️ Technical Highlights
* **Async/Await:** Implemented modern ES6+ asynchronous patterns to handle API requests without blocking the UI.
* **Fetch API:** Used native JS `fetch()` to handle HTTP GET requests.
* **Error Handling:** `try...catch` blocks ensure the app doesn't crash if the API is down or the input is invalid.
* **DOM Injection:** Dynamically creates HTML elements (Forecast Cards) based on the data received.

## ⚙️ Setup Instructions
1.  Get a free API Key from [OpenWeatherMap](https://openweathermap.org/).
2.  Open `js/api.js`.
3.  Replace `const API_KEY = 'YOUR_KEY'` with your actual key.
4.  Open `index.html` in your browser.

## 📂 Project Structure
```text
week-6-weather-app/
├── js/
│   ├── api.js       
│   ├── storage.js   
│   └── app.js       
├── css/styles.css
└── index.html