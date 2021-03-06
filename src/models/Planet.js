const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    authorId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    predominantBreeds: [{
        type: Schema.Types.ObjectId,
        // fk
        ref: 'Breed'
    }]
}, {
    timestamps: true
    // createdAt, updateAt
});

module.exports = model('Planet', DevSchema);