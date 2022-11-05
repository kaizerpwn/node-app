const mongojs = require('mongojs');
const savjetnikController = require('../savjetnik/savjetnikController');

const db = mongojs('fullapp', ['termini']);

const savjetnikTerminiController = (req, res) => {
    let name = req.params.name;
    let user = req.session.user;

    db.termini.find({ savjetnik: name }, (err, termini) => {
        res.render('admin/savjetnikTermini', {
            name: name,
            termini: termini
        });
    })
}
module.exports = savjetnikTerminiController;