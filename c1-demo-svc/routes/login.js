var router = require('express').Router(),
    service = require('../services/login');

router.post('/', service.postLogin);

module.exports = router;