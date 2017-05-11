const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const router = require('express').Router();

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.get('/', requireAuth, function (req, res, next) {
    res.send({ message: 'Super secret code is ABC123' });
});

router.post('/signin', requireSignin, Authentication.signin);

router.post('/signup', Authentication.signup);

module.exports = router;