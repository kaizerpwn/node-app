const mongojs = require('mongojs');

const db = mongojs('fullapp', ['termini']);

const izvjestajController = (req, res) => {
    let id = req.params.id;
    db.termini.update({ _id: mongojs.ObjectID(id) }, {
        $set: {
            active: false
        }
    }, (err, docs) => {
        res.redirect('/savjetnik');
    })
}

module.exports = izvjestajController;