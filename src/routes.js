const express = require('express');

const routes = express.Router();

const PlanetController = require('./controllers/PlanetController');
const AirshipController = require('./controllers/AirshipController');
const BreedController = require('./controllers/BreedController');

routes.get('/planets', PlanetController.index);
routes.post('/planets', PlanetController.store);
routes.get('/airships', AirshipController.index);
routes.post('/airships', AirshipController.store);
routes.get('/breeds', BreedController.index);
routes.post('/breeds', BreedController.store);

module.exports = routes;