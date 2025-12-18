const API_KEY = 'af0512e06dc174a62a97bf4992cb9d26'; // <-- PASTE YOUR KEY HERE inside the quotes!
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

class WeatherAPI {
    // Fetch Current Weather
    static async getCurrentWeather(city) {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    }

    // Fetch 5-Day Forecast
    static async getForecast(city) {
        const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    }
}