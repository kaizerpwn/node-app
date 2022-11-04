const mongojs = require('mongojs');

const db = mongojs('fullapp', ['termini']);

const savjetnikController = (req, res) => {
    let user = req.session.user;

    db.termini.find({ savjetnik: user.first_name + " " + user.last_name, active: true }, (err, termini) => {
        res.render("savjetnik/index", {
            name: user.first_name,
            termini: termini
        });
    })
}

module.exports = savjetnikController;