var router = require('express').Router(),
    service = require('../services/upload');

router.post('/', service.postUpload);

module.exports = router;