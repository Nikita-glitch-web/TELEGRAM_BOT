
const fetch = require("node-fetch");

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={06c5f199747cce8b744a02e23013298f}`;

const createRequestCityUrl = (cityName) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=06c5f199747cce8b744a02e23013298f`;
};

exports.requsetToServer = async (req, res, next) => {
  const cityName = req.params.city
  const response = await fetch(createRequestCityUrl(cityName));
  const data = await response.json();
  const mappedData = {
    temerature: `${data.main.temp} C`,
    wind: `${data.wind.speed} m/s`,
    maxTemperature: `${data.main.temp_max} C`
  }
  res.send(mappedData)
  next();
};

exports.weekWeatherRes = async (req, res, next) => {
    const week = req.params.week;
    const response = await fetch(createRequestCityUrl(week)); 
}