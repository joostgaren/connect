var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/', express.static('dist/de-DE', { redirect: false}));

router.get('*', function (req, res, next) {
    res.sendFile(path.resolve('dist/de-DE/index.html'))
});

module.exports = router;

