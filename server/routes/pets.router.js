const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// This route *should* return the logged in users pets
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('/pet GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);


        let queryText = `SELECT * FROM "pets"`;
        pool.query(queryText).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });


    // if(req.isAuthenticated()) {
    //     let queryText = `SELECT * FROM "pets"`;
    //     pool.query(queryText).then((result) => {
    //         res.send(result.rows);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
    // } else {
    //     res.sendStatus(403);
    // }


});

// This route *should* add a pet for the logged in user
router.post('/', (req, res) => {
    console.log('/pet POST route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    res.sendStatus(200);
    
});

module.exports = router;