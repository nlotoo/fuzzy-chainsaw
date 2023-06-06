
module.exports.validatorReisterInput = (email, password, rePassword) => {

    const errors = {};

    if (email.trim() === '') {
        errors.email = 'Email must not be empty'
    } else {
        const regEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!email.match(regEX)) {
            errors.email = 'Email must be a valid email address'
        }
    }

    if (password.trim() === '') {
        errors.password = 'Password must not be empty'
    } else if (password == rePassword) {
        errors.rePassword = 'Passwords must match'
    }


    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}