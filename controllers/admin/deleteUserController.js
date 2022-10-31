const mongojs = require('mongojs');

const db = mongojs('fullapp', ['users'])

const deleteUserController = (req, res) => {
    let userId = req.params.userId;
    db.users.remove({ _id: mongojs.ObjectID(userId) }, (err, docs) => {
        res.send('Ok');
    })
}

module.exports = deleteUserController;