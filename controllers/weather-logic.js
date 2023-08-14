const { validationResult } = require("express-validator/check");

const Weather = require("../models/weather");
const { Result } = require("express-validator");
const API_URL = `http://api.openweathermap.org`;

const createRequestCityUrl = (cityName, units = "metric") => {
   return `${API_URL}/geo/1.0/direct?units=${units}&q=${cityName}&appId=${appId}`;
 };


exports.requsetToServer = async (req, res, next) => {
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     const error = new Error("Validation failed.");
    //     error.statusCode = 422;
    //     error.data = errors.array();
    //     throw error;
    //   }
    //   res.createRequestCityUrl();
    //   const city = req.body.city;    
    //     try {
    //       const result = await city.save();
    //       res
    //         .status(201)
    //         .json({ message: "City finded", cityId: result._id });
    //     } catch (err) {
    //       if (!err.statusCode) {
    //         err.statusCode = 500;
    //       }
    //       next(err);
    //     }
   
   try {
     //fetch(getCity(), {method: "GET"});
      let getCity = req.createRequestCityUrl();
      await res.getCity();
   } catch (err) {
     if (!err.statusCode) {
       err.statusCode = 500;
     }
     next(err);
   }
}

//тобі треба брати це city і робити запит на opwnweather через await чекати респонса і потім результат відправляти вже клієнту який робив запит

