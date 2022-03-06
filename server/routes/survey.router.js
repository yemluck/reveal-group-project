
const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles GET request for ser
router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.send(req.user);
    console.log('reg.user');

});

// POST endpoint
router.post('/survey', rejectUnauthenticated, (req, res) => {
    console.log('this is req.body', req.body);
    
    const queryText = `
        INSERT INTO "preference" ("user_id", "value_id", "priority")
        VALUES ($4, 1, $1  ), ($4, 2, $2), ($4, 3, $3);
    `;

    const queryParams = [
        req.body.transparency,
        req.body.environmental,
        req.body.humanRights,
        req.user.id
    ];

    pool.query(queryText, queryParams)
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log('Create Preference failed:', err);
            res.sendStatus(500);
            
        })
    
    
})

router.get('/survey', rejectUnauthenticated, (req,res) => {

    const queryText = `
        SELECT 
            ARRAY_AGG ("priority") FROM "preference"
            WHERE user_id = $1
            GROUP BY user_id;
    `;

    const queryParams = [req.user.id];

    pool.query(queryText, queryParams)
        .then( result => {
            res.send(result.rows[0])
            console.log('this is result.rows:', result.rows[0])
        })
        .catch( err => {
            console.log('Error getting preference', err);
            res.sendStatus(500);
            
        })
} )

router.put('/survey', rejectUnauthenticated, (req, res) => {
    console.log('this is req.body in put', req.body);

    const queryText = `
        UPDATE "preference"
        SET "priority" = CASE value_id
            WHEN 1 THEN $1
            WHEN 2 THEN $2
            WHEN 3 THEN $3
        ELSE priority END
        WHERE user_id = $4
    `
    const queryParams = [
        req.body.transparency,
        req.body.environmental,
        req.body.humanRights,
        req.user.id
    ]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('Error making database query', error);
            res.sendStatus(500);
            
        })
    
})


module.exports = router;