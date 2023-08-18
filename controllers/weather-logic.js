
const fetch = require("node-fetch");

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={06c5f199747cce8b744a02e23013298f}`;

const weekUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={06c5f199747cce8b744a02e23013298f}`;

// нова урл на 16 днив

const createRequestCityUrl = (cityName) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=06c5f199747cce8b744a02e23013298f`;
};

//   "lon": 30.5167,
//         "lat": 50.4333

const createWeekRequestUrl = (lat, lon) => {
    return `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={1}&appid={06c5f199747cce8b744a02e23013298f}`;
}


exports.requsetToServer = async (req, res, next) => {
  const cityName = req.params.city
  const response = await fetch(createRequestCityUrl(cityName));
  const data = await response.json();
  console.log(cityName);
  console.log(data, "DATA CONSOLE");
  const mappedData = {
    temperature: `${data.main.temp}`,
    wind: `${data.wind.speed} m/s`,
    maxTemperature: `${data.main.temp_max}`,
  };
  res.send(mappedData)
  next();
};

exports.cityCoordinateRes = async (req, res, next) => {
    const city = req.params.city;
    const cityResponse = await fetch(createRequestCityUrl(city));
    const cityData = await cityResponse.json();
    const cityMappedData = {
        lat: `${cityData.coord.lat}`,
        lon: `${cityData.coord.lon}`,
        cityName: `${cityData.name}`
}
    // const weekMappedData = {
    //     date: `${weekData.date}`
    // }
    res.send(cityMappedData);
    console.log(cityMappedData);
    next();
}

exports.weekRes = async (req, res, next) => {
    const week = req.params.week
    const weekResponse = await fetch(createWeekRequestUrl(week));
    const weekData = await cityResponse.json();
    const weekMappedData = {

    }
};


// Параметры запроса URL (URL Query Parameters) — это 
// дополнительная информация, которую можно добавить в 
// URL-адрес. Состоит из двух обязательных элементов: 
// из самого параметра и его значения, разделенных знаком 
// равенства (=).