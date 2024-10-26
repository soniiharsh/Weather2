// src/Weather.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Delhi');
    const [error, setError] = useState('');

    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; // Add your API key in .env

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: { q: city, appid: apiKey }
            });
            processWeatherData(response.data);
        } catch (err) {
            setError('Error fetching weather data. Please try again.');
        }
    };

    const processWeatherData = (data) => {
        const tempCelsius = data.main.temp - 273.15; // Convert Kelvin to Celsius
        const condition = data.weather[0].main;
        setWeather({ temp: tempCelsius.toFixed(2), condition });
        setError(''); // Clear any previous error
    };

    useEffect(() => {
        fetchWeather();
        const interval = setInterval(fetchWeather, 300000); // Fetch every 5 minutes
        return () => clearInterval(interval);
    }, [city]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <h1>Weather in {city}</h1>
            <input type="text" value={city} onChange={handleCityChange} />
            <button onClick={fetchWeather}>Get Weather</button>
            {error && <p>{error}</p>}
            {weather && (
                <div>
                    <p>Temperature: {weather.temp} °C</p>
                    <p>Condition: {weather.condition}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
