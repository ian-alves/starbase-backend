const Airship = require('../models/Airship');

module.exports = {
    async index(req, res) {
        const airships = await Airship.find()

        return res.json(airships);
    },

    async store(req, res) {
        const { airshipName, airshipCapacity, authorId } = req.body;

        const airshipExists = await Airship.findOne({ name: airshipName });

        if (airshipExists) {
            return res.json(airshipExists);
        }

        const airship = await Airship.create({
            authorId: authorId,
            name: airshipName,
            capacity: airshipCapacity
        })

        return res.json(airship)
    }
}
// index, show, store, update, delete