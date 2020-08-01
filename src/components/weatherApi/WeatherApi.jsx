import React, { useState, useEffect } from 'react';
import apiKey from './apiKey';

function WeatherApi() {
  const [ temperature, setTemperature ] = useState('');
  const [ weather, setWeather ] = useState('');
  const [ weatherIcon, setWeatherIcon ] = useState('');

  const [ city, setCity ] = useState('');
  const [ cityFound, setCityFound ] = useState('');
  
  const fahrenheitToCelcius = kel => (kel - 273.15).toFixed(1);

  useEffect(() => {
    fetchWeather('Helsinki');
  }, []);

  const fetchWeather = c => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${c}%20&APPID=${apiKey}`)
      .then(data => data.json())
      .then(weather => {
        setCityFound(weather.name);
        setTemperature(fahrenheitToCelcius(weather.main.temp));
        setWeather(weather.weather[0].main);
        setWeatherIcon(weather.weather[0].icon);
      })
      .catch(() => {
        alert('Sorry! No such city found.')
        setCityFound('');
        setTemperature(fahrenheitToCelcius('273.1'));
        setWeather('');
        setWeatherIcon('');
      })
  }

  return (
    <div>
      <input type='text' name='city' onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => fetchWeather(city)}>Get Weather</button>
      <h3>City: {cityFound}</h3>
      <h3>Temperature: {temperature}</h3>
      <h3>Weather: {weather} </h3>
      <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt='Weather image'/>
    </div>
  );
}

export default WeatherApi;
