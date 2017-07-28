const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title: {
        required: true,
        type: String,
        unique: true
    },
    body: {
        required: true,
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        //needs to be objectid
        type: Object, 
        required: true
        //get userId from logged in user
    }
})