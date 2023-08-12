const mongoose = require("mongoose");
const { FileModel } = require("./FILE");


const imageSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },

    filename: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});

const postSchema = new mongoose.Schema({

    owner: {
        type: String
    },
    link: {
        type: String
    },
    description: {
        type: String
    },
    locationPath: {
        type: String,
    },

    createAt: {
        type: String,
    },
    offertDetails: {
        title: String,
        body: String,
        normalPrice: String,
        curentPrice: String,
        voucherCode: String,
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

    categories: [
        {
            categories: String
        }
    ],

    periodOfPost: [{
        type: String,
    }
    ]


})


module.exports = mongoose.model("Post", postSchema);