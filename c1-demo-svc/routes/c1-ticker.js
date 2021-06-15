var router = require('express').Router(),
    service = require('../services/c1-ticker');

router.get('/fss', service.getFssTicks);
router.get('/app-sec', service.getAppSecTicks);
router.get('/workload-sec', service.getWorkloadSecTicks);

module.exports = router;