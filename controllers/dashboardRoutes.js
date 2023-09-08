const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', withAuth, (req, res)=>{
    res.render('all-posts', {layout: 'dashboard'});
})


module.exports = router;