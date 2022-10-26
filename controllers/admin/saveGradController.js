const mongojs = require('mongojs');

const db = mongojs('fullapp', ["users", "gradovi"]);

const saveGradController = (req, res) => {
    let name = req.body.imeMjesta;
    let zip = req.body.postanskiBroj;

    db.gradovi.insert({ name: name, zip: zip }, (err, docs) => {
        if (err) {
            // ako ima error
        } else {
            res.redirect('/admin');
        }
    })
}

module.exports = saveGradController;