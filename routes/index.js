const express = require('express');

const router = express.Router();

router.use('/', require('./home'));

router.use('/login', require('../controllers/loginController'));

router.use('/logout', require('./logout'));

router.use('/admin', require('./admin'));

router.use('/operater', require('./operater'));

router.use('/savjetnik', require('./savjetnik'));


module.exports = router;