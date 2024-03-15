import { React, useState, useEffect } from "react";
import axios from 'axios';

// Componnents
import WeatherWidgetStyle from "./Style";

function WeatherWidget() {

  const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const lat = '50.23237';
  const lon = '2.68444';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${APIKey}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [lat, lon, APIKey]);

  if (!weatherData) {
    return <></>;
  }

  return (
    <WeatherWidgetStyle>
      <h4>Quel temps fait-il à {weatherData.name} en ce moment ?</h4>
      <p>Température : {weatherData.main.temp}°C</p>
      <p>Temps : {weatherData.weather[0].description}</p>
    </WeatherWidgetStyle>
  );
}

export default WeatherWidget;