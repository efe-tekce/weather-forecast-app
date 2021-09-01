import axios from "axios";
import fetchWeather from "./fetchWeather";

const fetchWeathers = async (countryName) => {
  if (countryName) {
    try {
      const { data } = await axios("cities.json");
      const data2 = {};
      data.forEach((d) => (data2[d.country] = d.city));
      const capital = await fetchWeather(data2[countryName]);
      return capital;
    } catch (e) {
      return {};
    }
  }
};

export default fetchWeathers;
