import React, { useState, useEffect } from "react";
import fetchWeather from "./api/fetchWeather";
import fetchWeathers from "./api/fetchWeathers";
import HumidIcon from "./images/humid-icon.webp";
import PressureIcon from "./images/pressure-icon.webp";
import VisibilityIcon from "./images/visibility-icon.webp";
import WindIcon from "./images/wind-icon.webp";

function Forecast({ queryObject }) {
  const [cityObject, setCityObject] = useState({});
  const [info, setInfo] = useState("Select city for show weather.");

  useEffect(() => {
    if (queryObject?.filterType === "city") {
      setInfo("Loading");
      fetchWeather(queryObject.query)
        .then((data) => setCityObject(data))
        .catch((err) => console.log(err.message));
    } else if (queryObject?.filterType === "country") {
      setInfo("Loading");
      fetchWeathers(queryObject.query)
        .then((data) => setCityObject(data))
        .catch((err) => console.log(err.message));
    }

    setTimeout(() => {
      setInfo("Location not found");
    }, 3000);
  }, [queryObject]);

  return cityObject && Object.keys(cityObject).length > 0 ? (
    <div className='result-card bg-blue-500 w-full rounded-lg opacity-70 flex flex-col justify-center shadow-2xl text-center'>
      <section className='card-title'>
        <div className='city'>
          <p>{cityObject.parent.title}</p>
          <p>{cityObject.title}</p>
        </div>
        <div className='time'>
          <p>{cityObject.timezone}</p>
          <p>{new Date(cityObject.time).toLocaleString()}</p>
        </div>
      </section>
      <section className='weather-section'>
        <img
          src={`https://www.metaweather.com/static/img/weather/${
            cityObject.consolidated_weather.at(-1).weather_state_abbr
          }.svg`}
          height='85'
          width='85'
        />
        <p>{Math.round(cityObject.consolidated_weather.at(-1).the_temp)}°C</p>
      </section>
      <section className='details'>
        <h3>Humidity</h3>
        <img src={HumidIcon} alt='' width='65' width='65' />
        <p>{cityObject.consolidated_weather.at(-1).humidity}%</p>
      </section>
      <section className='details'>
        <h3>Wind</h3>
        <img src={WindIcon} alt='' width='65' width='65' />
        {/* <p>
              {cityObject.consolidated_weather.at(-1).wind_direction_compass}
            </p> */}
        <p>
          {Math.round(cityObject.consolidated_weather.at(-1).wind_speed)} km/h
        </p>
      </section>
      <section className='details'>
        <h3>Pressure</h3>
        <img src={PressureIcon} alt='' width='65' width='65' />
        <p>{cityObject.consolidated_weather.at(-1).air_pressure} mbar</p>
      </section>
      <section className='details'>
        <h3>Visibility</h3>
        <img src={VisibilityIcon} alt='' width='65' width='65' />
        <p>
          {Math.round(cityObject.consolidated_weather.at(-1).visibility)} km
        </p>
      </section>
    </div>
  ) : (
    <div className='filter-card bg-blue-500 w-full h-full rounded-lg opacity-70 flex items-center justify-center shadow-2xl text-2xl'>
      {info}
    </div>
  );
}

export default Forecast;
