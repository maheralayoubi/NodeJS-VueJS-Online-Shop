const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: String,
});

// Exporting our userSchema so we can use it in another file
module.exports = mongoose.model('Category', CategorySchema);

