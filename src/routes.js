const express = require('express');

const routes = express.Router();

const PlanetControler = require('./controlers/PlanetControler');

routes.get('/planets', PlanetControler.index);
routes.post('/planets', PlanetControler.store);

module.exports = routes;