const mongojs = require('mongojs');

const db = mongojs('fullapp', ['gradovi'])

const deletGradController = (req, res) => {
    let gradId = req.params.gradId;
    db.gradovi.remove({ _id: mongojs.ObjectID(gradId) }, (err, docs) => {
        if (err) console.log(err);
        res.send('Ok');
    })
}

module.exports = deletGradController;