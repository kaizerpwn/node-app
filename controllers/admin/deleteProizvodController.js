const mongojs = require('mongojs');

const db = mongojs('fullapp', ['proizvodi'])

const deletProizvodController = (req, res) => {
    let proizvodId = req.params.proizvodId;
    db.proizvodi.remove({ _id: mongojs.ObjectID(proizvodId) }, (err, docs) => {
        if (err) console.log(err);
        res.send('Ok');
    })
}

module.exports = deletProizvodController;