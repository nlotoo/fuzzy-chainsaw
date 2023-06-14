const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({

    owner: {
        type: String
    },
    description: {
        type: String
    },

    createAt: {
        type: String,
    },



    likes: [{
        owner: String,
        ownerEmail: String,
        createAt: String,
    }],

    comments: [
        {
            
            body: String,
            owner: String,
            ownerEmail: String,
            createAt: String
        }
    ],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }






})


module.exports = mongoose.model("Post", postSchema);