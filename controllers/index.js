const router = require('express').Router();

router.use('/', require('./homeRoutes'));
router.use('/dashboard', require('./dashboardRoutes'))
router.use('/api', require('./api'));


module.exports = router;