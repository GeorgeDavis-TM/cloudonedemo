var router = require('express').Router(),
    service = require('../services/cmd');

router.get('/health', service.getHealth);

router.post('/run', service.sendCommand);

module.exports = router;    