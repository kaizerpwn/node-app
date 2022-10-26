const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/admin/adminController'));
router.get('/create', (req, res) => {
    res.render('admin/adminCreateForm');
});

router.get('/create/grad', (req, res) => {
    res.render('admin/createGrad');
})

router.post('/create/save', require('../controllers/admin/saveController'));
router.post('/create/grad/save', require('../controllers/admin/saveGradController'));

module.exports = router;