
//тобі треба зробити реквест на опен везер апі і повернути результат
//тобі треба брати це city і робити запит на opwnweather через await чекати респонса і потім результат відправляти вже клієнту який робив запит

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const weatherRoutes = require('./routes/weather-routes');
const weatherControllers = require("./controllers/weather-logic");


const app = express();

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// http://localhost:9000/weather/paris?units=imperial //search params
app.get("/weather/:city", weatherControllers.requsetToServer);
app.get("/weather/:city/week", weatherControllers.requsetToServer);// на тиждень
// app.get("/products/:id/category/:catId", weatherControllers.requsetToServer);

app.get('/health-check', (req, res, next) => {
  console.log('HEALTH CHECK');
  res.send('Health-Check')
})

app.listen(9000, () => {
  console.log('Hello wolrd!')
});

