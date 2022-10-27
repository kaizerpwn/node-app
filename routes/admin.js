const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/admin/adminController'));
router.get('/create', (req, res) => {
    res.render('admin/adminCreateForm');
});

router.get('/create/grad', (req, res) => {
    res.render('admin/createGrad');
})

router.get('/create/proizvod', (req, res) => {
    res.render('admin/createProizvod');
})

router.post('/create/save', require('../controllers/admin/saveController'));
router.post('/create/grad/save', require('../controllers/admin/saveGradController'));
router.post('/create/proizvod/save', require('../controllers/admin/saveProizvodController'));

module.exports = router;