const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        required: true,
        type: String,
        unique: true
    },
    salt: {
        type: String
    },
    hash: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;