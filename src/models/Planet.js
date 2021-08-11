const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    authorId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
    // createdAt, updateAt
});

module.exports = model('Planet', DevSchema);