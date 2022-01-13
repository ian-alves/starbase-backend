const Breed = require('../models/Breed');

module.exports = {
    async index(req, res) {
        const breeds = await Breed.find()

        return res.json(breeds);
    },

    async store(req, res) {
        const { breedtName, authorId } = req.body;

        const breedExists = await Breed.findOne({ name: breedName });

        if (breedExists) {
            return res.json(breedExists);
        }

        const breed = await Breed.create({
            authorId: authorId,
            name: breedtName
        })

        return res.json(breed)
    }
}
// index, show, store, update, delete