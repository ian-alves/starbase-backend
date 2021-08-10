const express = require('express');

const routes = express.Router();

const PlanetControler = require('./controlers/PlanetControler');
const AirshipControler = require('./controlers/AirshipControler');

routes.get('/planets', PlanetControler.index);
routes.post('/planets', PlanetControler.store);
routes.get('/airships', AirshipControler.index);
routes.post('/airships', AirshipControler.store);

module.exports = routes;