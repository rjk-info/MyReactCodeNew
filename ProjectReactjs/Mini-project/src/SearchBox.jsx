import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8665a6fda987ba0a50ce4e5f84c24821";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod === 200) {
                let result = {
                    temp: jsonResponse.main.temp,
                    weather: jsonResponse.weather[0].description,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                };
                setWeather(result);
                setError(null);
            } else {
                setError(jsonResponse.message);
                setWeather(null);
            }
        } catch (error) {
            setError("An error occurred while fetching the weather information.");
            setWeather(null);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getWeatherInfo();
        setCity("");
    };

    return (
        <div className='SearchBox'>
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    required
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
            {weather && (
                <div className="WeatherInfo">
                    <h4>Weather Information</h4>
                    <p>Temperature: {weather.temp} °C</p>
                    <p>Condition: {weather.weather}</p>
                    <p>Min Temp: {weather.tempMin} °C</p>
                    <p>Max Temp: {weather.tempMax} °C</p>
                    <p>Humidity: {weather.humidity}%</p>
                    <p>Feels Like: {weather.feelsLike} °C</p>
                </div>
            )}
            {error && <p className="Error">{error}</p>}
        </div>
    );
}
