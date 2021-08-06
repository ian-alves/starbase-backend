const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
    // createdAt, updateAt
});

module.exports = model('Planet', DevSchema);