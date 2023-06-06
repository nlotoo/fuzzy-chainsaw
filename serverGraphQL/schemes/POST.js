const mongoose = required('mongoose');



const postSchema = new mongoose.Schema({

    owner: {
        type: String
    },
    description: {
        type: String
    },
    tumbsUP: {
        type: String
    },
    tumbsDown: {
        type: String
    },






})


module.exports = mongoose.model("Post", postSchema);