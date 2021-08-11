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
    capacity: {
        type: Number
    }
}, {
    timestamps: true
    // createdAt, updateAt
});

module.exports = model('Airship', DevSchema);