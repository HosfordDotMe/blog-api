const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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

userSchema.methods.setPassword = function setPassword(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
}
userSchema.methods.isValidPassword = function isValidPassword(password) {
    const testHash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === testHash;
}

const User = mongoose.model('User', userSchema);
module.exports = User;