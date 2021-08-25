import React, { useEffect, useState } from "react";
import fetchWeather from "./api/fetchWeather";
import fetchWeathers from "./api/fetchWeathers";

function Forecast({ queryObject }) {
  const [cityObject, setCityObject] = useState({});

  useEffect(() => {
    if (queryObject?.filterType === "city") {
      fetchWeather(queryObject.query)
        .then((data) => setCityObject(data))
        .catch((err) => console.log(err.message));
    } else if (queryObject?.filterType === "country") {
      fetchWeathers(queryObject.query)
        .then((data) => setCityObject(data))
        .catch((err) => console.log(err.message));
    }
  }, [queryObject]);

  console.log(cityObject);

  return cityObject
    ? Object.keys(cityObject).length > 0 && (
        <div>
          <div className='mt-16 bg-yellow-300 city'>
            <div className='city-name' key={cityObject.name}>
              <span>{cityObject.title}</span>
              <sup> {cityObject.parent.title}</sup>
              <sup>
                {cityObject.consolidated_weather.at(-1).weather_state_name}
              </sup>
              <img
                src={`https://www.metaweather.com/static/img/weather/${
                  cityObject.consolidated_weather.at(-1).weather_state_abbr
                }.svg`}
                height='35'
                width='35'
              ></img>
            </div>
            ;
          </div>
        </div>
      )
    : null;
}

export default Forecast;
