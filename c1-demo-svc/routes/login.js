var router = require('express').Router(),
    service = require('../services/login');

router.post('/login', service.postLogin);

module.exports = router;