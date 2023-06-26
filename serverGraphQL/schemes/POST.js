const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lastModified: {
        type: Number
    },

    size: {
        type: Number
    },
    type:{
        type:String
    },
    webkitRelativePath: {
        type: String
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