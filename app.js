const path = require("path");

//тобі треба зробити реквест на опен везер апі і повернути результат
//тобі треба брати це city і робити запит на opwnweather через await чекати респонса і потім результат відправляти вже клієнту який робив запит

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const graphql = require("graphql");

const app = express();

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb+srv://nikitalytvynov0506:Nikita12235970@cluster0.jqkve7h.mongodb.net/messages"
  )
  .then((result) => {
    app.listen(5050);
  })
  .catch((err) => console.log(err));


