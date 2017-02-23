const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = {
    usernameField: 'email'
};

const localSignin = new LocalStrategy(localOptions, function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                return done(err);
            }

            if (!isMatch) {
                return done(null, false);
            }

            return done(null, user);
        })
    });
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtSignin = new JwtStrategy(jwtOptions, function(payload, done) {
    // `sub` is the `subject` of the token, in this case the user's ID
    User.find(payload.sub, function(err, user) {
        if (err) {
            return done(err, false);
        }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtSignin);
passport.use(localSignin);