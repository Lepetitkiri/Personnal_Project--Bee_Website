import { React, useState, useEffect } from "react";
import axios from 'axios';

// Componnents
import WeatherWidgetStyle from "./Style";

function WeatherWidget() {

  // Clé API pour l'API OpenWeatherMap
  const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  // Coordonnées géographiques (latitude et longitude) pour la localisation de la météo.
  const lat = '50.23237';
  const lon = '2.68444';

  const [weatherData, setWeatherData] = useState(null);

  // Utilisation de useEffect pour récupérer les données météorologiques
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

  // Renvoie un composant vide si les données météorologiques ne sont pas disponibles.
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