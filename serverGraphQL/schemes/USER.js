const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        // minLength: 4,
        // maxLength: 30,
    },

    password: {
        type: String,
        required: true,
        // minLength: 4,
        // maxLength: 30,
    },

    createdAt: {
        type: String,
    },

    Comment: []

})

//make collection
// const User = new mongoose.model("User", userSchema);

// const createDocument = async () => {

// const reactList = new User({
//     username: {
//         type: String,
//         requred: true,
//         minLength: 4,
//         maxLength: 30,
//     },

//     password: {
//         type: String,
//         requred: true,
//         minLength: 4,
//         maxLength: 30,
//     },
// })
// const result = await reactList.save();
// console.log(result);
module.exports = mongoose.model("User", userSchema);