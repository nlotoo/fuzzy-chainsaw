const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String,
        required: true,
    },
});

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
    },

    images: [imageSchema],




})


module.exports = mongoose.model("Post", postSchema);