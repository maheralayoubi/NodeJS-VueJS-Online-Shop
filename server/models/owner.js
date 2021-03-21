const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
    name: String,
    about: String,
    photo: String
});

// Exporting our userSchema so we can use it in another file
module.exports = mongoose.model('Owner', OwnerSchema);

