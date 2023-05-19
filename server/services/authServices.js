const User = require('../schemes/USER.js');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const { SALT_ROUNDS, JWT_SECRET } = require('../config/config.js');




async function CreateUser(data) {

    // console.log(data)
    let { email, password, } = data;

    // console.log(email,password)

    let obj = {
        email: email.toLowerCase().trim(),
        password: password.toLowerCase().trim(),
    }

    let emailExist = await User.findOne({ email: obj.email })


    if (emailExist) {
        throw "This email is  exist"
    }
    
    
    emailExist = ''
    if (obj.email.length < 5) {
        throw new Error('User name is to short!')
    }
    
    if (obj.password.length < 6) {
        new Error('User password is to short!')
    }
    
    
    const hash = bcrypt.hashSync(password.trim(), SALT_ROUNDS);
    
    obj.password = hash
    
    let newUserData = new User(obj)
    
    console.log(newUserData)


    return newUserData.save()
};

async function loginUser(data) {


    let { username, password } = data;
    let user = await User.find({ username: data.username }).exec();

    console.log(user);


    if (user.length == 0) {
        // throw 'Incorect email or password';
        throw 'Incorect User';
    }

    itTrue = bcrypt.compareSync(data.password, user[0].password)


    if (!itTrue) {
        throw 'Incorect email or password'
    }

    let token = jwt.sign({ 'username': username, 'id': user[0]._id, }, JWT_SECRET);


    let localStorageObj = {
        'username': `${user[0].username}`,
        'userID': user[0]._id,
        'token': token,
    }

    return localStorageObj
};


module.exports = {
    CreateUser,
    loginUser,
};