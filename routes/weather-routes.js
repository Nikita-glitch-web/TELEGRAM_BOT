const express = require("express");
const { body } = require("express-validator/check");

const weatherControllers = require('../controllers/weather-logic');

const router = express.Router();

router.get("/weather", weatherControllers.requsetToServer);

module.exports = router;