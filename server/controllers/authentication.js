const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();

    return jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);
}

function signin(req, res, next) {
    res.send({ token: tokenForUser(req.user) });
}

function signup(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'Email required' });
    }

    User.findOne({ email: email }, function(err, existingUser) {
        if (err) {
            return next(err);
        }

        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(function (err){
            if (err) {
                return next(err);
            }

            return res.json({ token: tokenForUser(user) });
        });
    });
}

module.exports = {
    signup: signup,
    signin: signin
};