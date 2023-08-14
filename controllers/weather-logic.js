const { validationResult } = require("express-validator/check");

const Weather = require("../models/weather");
const { Result } = require("express-validator");
const API_URL = `http://api.openweathermap.org`;

const createRequestCityUrl = (cityName, units = "metric") => {
   return `${API_URL}/geo/1.0/direct?units=${units}&q=${cityName}&appId=${appId}`;
 };


exports.requsetToServer = async (req, res, next) => {
    const resCity = await fetch(createRequestCityUrl());
    console.log(resCity);
    requsetToServerJSON = async () => {
        const cities = await resCity().json();
        return cities;
    };
    this.requsetToServerJSON().then((cities) => {
        cities;
    })
}


//тобі треба брати це city і робити запит на opwnweather через await чекати респонса і потім результат відправляти вже клієнту який робив запит

// async function fetchMovies() {
//   const response = await fetch("/movies");
//   // ждем выполнения запроса
//   console.log(response);
// }

// async function fetchMoviesJSON() {
//   const response = await fetch("/movies");
//   const movies = await response.json();
//   return movies;
// }
// fetchMoviesJSON().then((movies) => {
//   movies; // полученный список фильмов
// });