const mongoose = require('mongoose');
require('mongoose-type-email');
const { hash, token } = require('./functions/fnUser');

const userSchema = new mongoose.Schema({
    email: { type: mongoose.SchemaTypes.Email, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    country: { type: String, required: false },
    postCode: { type: String, required: false }
});

hash(userSchema);
token(userSchema);

module.exports = mongoose.model('User', userSchema);