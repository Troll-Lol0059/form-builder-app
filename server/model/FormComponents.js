const mongoose = require('mongoose');

const formComponentsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    placeholder: {
        type: String
    },
    required: {
        type: Boolean
    }
});

module.exports = mongoose.model("FormComponents", formComponentsSchema);

