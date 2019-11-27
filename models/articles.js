const mongoose = require('mongoose');

const ArticlesSchema = mongoose.Schema({
    item_title: {
        type: String,
        required: true
    },
    item_description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Articles', ArticlesSchema);