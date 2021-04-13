var router = require('express').Router(),
    service = require('../services/upload');

router.post('/upload', service.postUpload);

module.exports = router;