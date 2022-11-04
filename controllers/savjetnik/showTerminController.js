const mongojs = require('mongojs');

const db = mongojs('fullapp', ['termini']);

const showTerminController = (req, res) => {
    let user = req.session.user;
    let id = req.params.id;

    db.termini.find({ _id: mongojs.ObjectID(id) }, (err, termin) => {
        res.render('savjetnik/showTermin', {
            name: user.first_name,
            termin: termin[0]
        })
    })
}

module.exports = showTerminController;