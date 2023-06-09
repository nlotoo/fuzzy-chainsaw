const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({

    owner: {
        type: String
    },
    description: {
        type: String
    },
    tumbsUP: {
        type: Number
    },
    tumbsDown: {
        type: Number
    },






})


module.exports = mongoose.model("Post", postSchema);