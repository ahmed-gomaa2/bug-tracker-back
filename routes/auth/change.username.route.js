const connection = require('../../config/database');
const auth = require('../../middlewares/auth.middleware');

const checkUserOwnProfile = (req, res, next) => {
    const user = req.user;
    const query = 'SELECT * FROM user WHERE id = ?';
    connection.query(query, user, (findUserError, findUserRes) => {
        if(findUserError) {
            res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}})
        }else if(findUserRes.length === 0) {
            res.status(404).json({error: {type: 'client', msg: 'THIS USER DOES NOT EXIST!'}})
        }else {
            next();
        }
    });
}

module.exports = app => {
    app.post('/edit-username', auth, checkUserOwnProfile, (req, res) => {
        const user = req.user;
        const username = req.body.username;
        const query = 'UPDATE user SET username = ? WHERE id = ?';
        connection.query(query, [username, user], (err, queryRes) => {
            if(err) return res.status(500).json({error: {type: 'server', msg: 'SOMETHINGS WENT WRONG WITH THE SERVER!', err: err}});

            res.status(200).send(username);
        });
    });
}