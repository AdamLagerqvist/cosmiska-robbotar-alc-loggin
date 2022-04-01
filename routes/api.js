var express = require('express');
var session = require('express-session');
var bcrypt = require('bcrypt');
const pool = require('../database');
var router = express.Router();

/* GET users listing. */
router.post('/login', async function (req, res, next) {

    const username = req.body.user;
    const password = req.body.password;

    await pool.promise()
        .query('SELECT * FROM login WHERE user = ?', [username])
        .then(([rows, fields]) => {
            
            const user = rows[0];

            if(user) {
                bcrypt.compare(password, user.password, (err, result) => {  

                    if(result) {
                        req.session.user = username;
                        console.log(req.session);
                        
                        return res.redirect("/secret");
                    } else {
                        res.status(500).redirect("/login?response=1");
                    }

                });

            } else throw "error";

        })
        .catch(err => {
            res.status(500).redirect("/login?response=1");
        });
});

router.get('/test', function (req, res, next) {
    let password = req.query.password;
    bcrypt.hash(password, 10, function (err, hash) {
        res.send(hash);
        console.log(hash)
    });
});

module.exports = router;
