const mongojs = require('mongojs');

const db = mongojs('fullapp', ["users", "proizvodi"]);

const saveProizvodController = (req, res) => {
    let imeProizvoda = req.body.imeProizvoda;
    let cijena = req.body.cijena;

    db.proizvodi.insert({ name: imeProizvoda, price: cijena }, (err, docs) => {
        if (err) {
            // ako ima error
        } else {
            res.redirect('/admin');
        }
    })
}

module.exports = saveProizvodController;