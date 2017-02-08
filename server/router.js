const Authentication = require('./controllers/authentication');
const router = require('express').Router();

router.use('/signup', Authentication.signup);

module.exports = router;