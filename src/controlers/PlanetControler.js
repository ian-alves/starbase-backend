const axios = require('axios');
const Planet = require('../models/Planet');

module.exports = {
    async index(req, res) {
        const planets = await Planet.find()

        return res.json(planets);
    },

    async store(req, res) {
        const { planetName } = req.body;

        const planetExists = await Planet.findOne({ planetName: planetName });

        if (planetExists) {
            return res.json(planetExists);
        }

        const planet = await Planet.create({
            name: planetName
        })

        return res.json(planet)
    }
}
// index, show, store, update, delete