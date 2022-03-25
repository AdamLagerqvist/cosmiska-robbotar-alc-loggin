var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

/* GET users listing. */
router.post('/login', async function(req, res, next) {
  
  await pool.promise()
        .query('SELECT * FROM tasks WHERE id = ?', [id])
        .then(([rows, fields]) => {
            res.json({
                task: {
                    data: rows
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                task: {
                    error: 'Error getting tasks'
                }
            })
        });
});

router.get('/test', function(req, res, next) {
  let password = req.query.password;
  bcrypt.hash(password, 10,function(err, hash){
    res.send(hash);
    console.log(hash)
  });
});

module.exports = router;
