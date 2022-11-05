const express = require('express');

const router = express.Router();

router.use(checkOperater);

router.get('/', require('../controllers/operater/operaterController'));

router.post('/newTermin', require('../controllers/operater/newTerminController'));

function checkOperater(req, res, next) {
    let user = req.session.user;
    if (user) {
        if (user.role == "operater") {
            next();
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
}

module.exports = router;