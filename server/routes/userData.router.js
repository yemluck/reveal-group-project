const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/userPreferences', rejectUnauthenticated, (req, res) => {
    // console.log('In user preferences router GET');

    let queryText = '';
    if (req.user.auth_level === 1) {
        queryText = `
            SELECT AVG("priority") as "value_avg", "value_id"
                FROM "preference"
                GROUP BY value_id;
        `;
    }
    pool.query(queryText)
        .then((result) => {
            // console.log(result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.error('Cannot retrieve user preferences from db.', err);
            res.sendStatus(500);
        });
});

router.get('/usernames', rejectUnauthenticated, (req, res) => {
    // console.log('In user emails router GET');

    let queryText = '';
    if (req.user.auth_level === 1) {

        queryText = `
            SELECT "id", "email_address" 
                FROM "user";
            ;`;
    }
    pool.query(queryText)
        .then((result) => {
            // console.log(result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.error('Cannot retrieve email addresses from db.', err);
            res.sendStatus(500);
        });
});

module.exports = router;