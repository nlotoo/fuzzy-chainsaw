const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../config');
const { AuthenticationError } = require('apollo-server');

module.exports = (context) => {
    // context ={... headers}

    const authHeader = context.req.headers.authorization

    console.log(authHeader)

    if (authHeader) {
        // Bearer
        const token = authHeader.split('Bearer ')[1];

        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY);
                return user
            } catch (err) {
                throw new AuthenticationError("Invalid/Expired token");
            }

        }
        throw new Error("Authication token must be 'Bearer [token]' ");
    }
    throw new Error("Authetication header must be provided");

}