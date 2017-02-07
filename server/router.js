var router = require('express').Router();

router.use(function(req, res, next) {
    res.send(['a', 'b', 'c']);
});

module.exports = router;