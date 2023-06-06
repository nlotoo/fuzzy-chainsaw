const mongoose = required('mongoose');

const commnetSchema = new mongoose.Schema({

    owner: {
        type: String
    },
    body: {
        type: String
    },
    createdAt: {
        type: String
    },


});




module.exports = mongoose.model("Comment", commnetSchema);