const express = require('express');
const bootcampController = require('../controller/bootcampController');
const bootcampRoutes = express.Router();

bootcampRoutes.get('/', bootcampController.index);

module.exports = bootcampRoutes;
