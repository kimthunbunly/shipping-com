const mongoose = require('mongoose');
require('mongoose-type-email');
const hash = require('./functions/fnHash');
const token = require('./functions/fnToken');

const userSchema = new mongoose.Schema({
    email: { type: mongoose.SchemaTypes.Email, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'User phone number required'],
        validate: {
            validator: function(v) {
              return /^([0-9]{3})([0-9]{3})([0-9]{3,4})$/im.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    address: { type: String, required: true },
    country: { type: String, required: true },
    postCode: { type: String, required: false }
});

hash(userSchema);
token(userSchema);

module.exports = mongoose.model('User', userSchema);