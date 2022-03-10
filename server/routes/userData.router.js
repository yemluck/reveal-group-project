const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


router.get('/usernames', rejectUnauthenticated, (req, res) => {
    console.log('In user emails router GET');

    let queryText = '';
    if (req.user.auth_level === 1) {

        queryText = `
            SELECT "email_address" from "user";
            ;`;
    }
    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Cannot retrieve email addresses from db.', err);
            res.sendStatus(500);
        })
});

module.exports = router;