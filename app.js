
//тобі треба зробити реквест на опен везер апі і повернути результат
//тобі треба брати це city і робити запит на opwnweather через await чекати респонса і потім результат відправляти вже клієнту який робив запит

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const weatherRoutes = require('./routes/weather-routes');
const weatherControllers = require("./controllers/weather-logic");


const app = express();
app.use(fetch)
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


app.get("/weather/:city", weatherControllers.requsetToServer);

app.get('/health-check', (req, res, next) => {
  console.log('HEALTH CHECK');
  res.send('Health-Check')
})

app.listen(9000, () => {
  console.log('Hello wolrd!')
});

