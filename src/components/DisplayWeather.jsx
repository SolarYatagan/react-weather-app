import React from 'react'
import '../Weather.css'

const DisplayWeather = ({weatherStats}) => {
  let today = new Date().toDateString();
  let icon =`${process.env.REACT_APP_ICON_URL}/`+weatherStats.weather[0].icon+'.png';
  return (
    <div className="main-output">
      <div className="weather-text">
        <h1 className="date">{today}</h1>
        <h1 className="city-name">{weatherStats.name}</h1>
        <h1 className="temp">{Math.round(weatherStats.main.temp)}°C</h1>
        <img src={icon} className="icon"></img>
        <div className="addition-info">
          <p>Wind speed {weatherStats.wind.speed} m/s</p>
          <p>Humidity {weatherStats.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayWeather