const express = require('express');

const router = express.Router();

router.get('/', require('../controllers/savjetnik/savjetnikController'));
router.get('/termin/:id', require('../controllers/savjetnik/showTerminController'));

module.exports = router;