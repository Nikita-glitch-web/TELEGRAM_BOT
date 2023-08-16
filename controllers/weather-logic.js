
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={06c5f199747cce8b744a02e23013298f}`;

const createRequestCityUrl = (cityName, units = "metric") => {
  return `${API_URL}/geo/1.0/direct?units=${units}&q=${cityName}&appId=${appId}`;
};

exports.requsetToServer = async (req, res, next) => {
  console.log(req.params.city);
  fetch(API_URL(values)).then((cityName, currentWeather) => {
    req.json({ cityName: cityName, currentWeather: currentWeather });
    JSON.toString()
    console.log(req.params.currentWeather);
    console.log(cityName, "WORKS!");
  });
};

//тобі треба брати це city і робити запит на opwnweather через await чекати респонса і потім результат відправляти вже клієнту який робив запит

//Тобі треба ретурнити те що отримуєш в контроллірі

// ctrl+F

//   fetchCityInfo(value) {
//     fetch(createRequestCityUrl(value))
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       this.handleCityNameResponse(data)
//     });
//   }
