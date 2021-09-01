import axios from "axios";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const fetchWeather = async (query) => {
  if (query) {
    try {
      const response = await axios(`${REQUEST_URL}/search`, {
        params: { query: query },
      });

      const { data } = await axios(`${REQUEST_URL}/${response.data[0].woeid}/`);

      return data;
    } catch (e) {
      return {};
    }
  }
};

export default fetchWeather;
