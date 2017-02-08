const User = require('../models/user');

function signup(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !pasword) {
        res.status(400).send('Email required');
    }

    User.findOne({ email: email });
}

module.exports = {
    signup: signup
};