
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



module.exports = router;