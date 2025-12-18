const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const errorMsg = document.getElementById('error-msg');
const currentWeatherSection = document.getElementById('current-weather');
const forecastSection = document.getElementById('forecast-section');

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

// Load last city on startup
document.addEventListener('DOMContentLoaded', () => {
    const lastCity = Storage.getLastCity();
    fetchWeather(lastCity);
});

// Main Function to Fetch & Display
async function fetchWeather(city) {
    try {
        errorMsg.classList.add('hidden');
        
        // 1. Get Data
        const current = await WeatherAPI.getCurrentWeather(city);
        const forecast = await WeatherAPI.getForecast(city);

        // 2. Update UI
        updateCurrentUI(current);
        updateForecastUI(forecast);
        
        // 3. Save to Local Storage
        Storage.saveCity(city);
        
        // 4. Show Sections
        currentWeatherSection.classList.remove('hidden');
        forecastSection.classList.remove('hidden');

    } catch (error) {
        console.error(error);
        errorMsg.classList.remove('hidden');
    }
}

function updateCurrentUI(data) {
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('date').textContent = new Date().toLocaleDateString();
    document.getElementById('temperature').textContent = Math.round(data.main.temp);
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind').textContent = data.wind.speed;
    
    // Set Icon
    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function updateForecastUI(data) {
    const forecastGrid = document.getElementById('forecast-grid');
    forecastGrid.innerHTML = ''; // Clear old data

    // The API returns data for every 3 hours. We filter to get one reading per day (approx noon)
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    dailyData.slice(0, 5).forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
        const icon = day.weather[0].icon;
        const temp = Math.round(day.main.temp);

        const card = `
            <div class="forecast-card">
                <p><strong>${date}</strong></p>
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="icon">
                <p>${temp}°C</p>
            </div>
        `;
        forecastGrid.innerHTML += card;
    });
}