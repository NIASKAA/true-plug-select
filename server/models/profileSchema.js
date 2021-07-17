const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    email: {type: String, unique: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    profilePic: {type: String},
    posts: {type: Array}
})

const model = mongoose.model('ProfileData', profileSchema);

module.exports = model;