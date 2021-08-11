const axios = require('axios');
const Planet = require('../models/Planet');

module.exports = {
    async index(req, res) {
        const planets = await Planet.find()

        return res.json(planets);
    },

    async store(req, res) {
        const { planetName, authorId } = req.body;

        const planetExists = await Planet.findOne({ name: planetName });

        if (planetExists) {
            return res.json(planetExists);
        }

        const planet = await Planet.create({
            authorId: authorId,
            name: planetName
        })

        return res.json(planet)
    }
}
// index, show, store, update, delete