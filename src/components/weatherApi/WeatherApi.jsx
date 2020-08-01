import React, { useState, useEffect } from 'react';
import apiKey from './apiKey';

const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=Amsterdam%20&APPID=${apiKey}`;

function WeatherApi() {
  const [ temperature, setTemperature ] = useState('');
  const [ weather, setWeather ] = useState('');
  const [ weatherIcon, setWeatherIcon ] = useState('');
  
  const fahrenheitToCelcius = kel => (kel - 273.15).toFixed(1);
  
  useEffect(() => {
    fetchWeather();
  });

  const fetchWeather = () => {
    fetch(apiURL)
      .then(data => data.json())
      .then(weather => {
        setTemperature(fahrenheitToCelcius(weather.main.temp));
        setWeather(weather.weather[0].main);
        setWeatherIcon(weather.weather[0].icon);
      })
  }

  return (
    <div className="App">
      <h3>Temperature: {temperature}</h3>
      <h3>Weather: {weather} </h3>
      <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt='weatherImage'/>
    </div>
  );
}

export default WeatherApi;
