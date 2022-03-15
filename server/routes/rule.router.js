const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// POST membership rule
router.post('/membership', rejectUnauthenticated, (req, res) => {
    // console.log('In membership rule router POST', req.body);
    let queryText = '';
    // only admins can POST membership rules
    if(req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            INSERT INTO "membership_rule"
                ("organization", "points", "industry", "value_id")
            VALUES
                ($1, $2, $3, $4)
            ;`;
    }
    const queryParams = [req.body.organization, req.body.points, req.body.industry, req.body.value];
    // send SQL command to database
    pool.query(queryText, queryParams)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.error('Rule POST error', err);
        res.sendStatus(500);
    });
});// end POST membership rule

// POST score rule
router.post('/score', rejectUnauthenticated, (req, res) => {
    // console.log('In score rule router POST', req.body);
    let queryText = '';
    // only admins can POST membership rules
    if(req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            INSERT INTO "score_rule"
                ("metric", "result", "points", "industry", "value_id")
            VALUES
                ($1, $2, $3, $4, $5)
            ;`;
    }
    const queryParams = [req.body.metric, req.body.result, req.body.points, req.body.industry, req.body.value_id];
    // send SQL command to database
    pool.query(queryText, queryParams)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.error('Rule POST error', err);
        res.sendStatus(500);
    });
});// end POST score rule

// GET membership rules
router.get('/membership', rejectUnauthenticated, (req, res) => {
    // console.log('in rule router GET membership');

    let queryText = '';

    // only admins can GET membership rules
    if (req.user.id) {
        // setup SQL command
        queryText = `
            SELECT * FROM "membership_rule";
        `;
    }

    // send SQL command to database
    pool.query(queryText)
        .then((results) => {
            // console.log('GET membership_rule', results.rows);
            res.send(results.rows);
        })
        .catch((err) => {
            console.error('rule router membership GET ERROR', err);
            res.sendStatus(500);
        });
}); // end GET membership rules

// GET membership rules
router.get('/score', rejectUnauthenticated, (req, res) => {
    // console.log('in rule router GET score');

    let queryText = '';

    // only admins can GET score rules
    if (req.user.id) {
        // setup SQL command
        queryText = `
            SELECT * FROM "score_rule";
        `;
    }

    // send SQL command to database
    pool.query(queryText)
        .then((results) => {
            // console.log('GET score_rule', results.rows);
            res.send(results.rows);
        })
        .catch((err) => {
            console.error('rule router score GET ERROR', err);
            res.sendStatus(500);
        });
}); // end GET membership rules

// DELETE membership rules
router.delete('/membership/:id', rejectUnauthenticated, (req, res) => {
    // console.log('in rule router DELETE membership', req.params.id);

    let queryText = '';

    // only admins can GET score rules
    if (req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            DELETE FROM "membership_rule"
            WHERE "id" = $1;
        `;
    }

    const queryParams = [ req.params.id ];

    // send SQL command
    pool.query(queryText, queryParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.error('rule router score DELETE ERROR', err);
            res.sendStatus(500);
        });
}); // end DELETE membership rules

// DELETE score rules
router.delete('/score/:id', rejectUnauthenticated, (req, res) => {
    // console.log('in rule router DELETE score', req.params.id);

    let queryText = '';

    // only admins can GET score rules
    if (req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            DELETE FROM "score_rule"
            WHERE "id" = $1;
        `;
    }

    const queryParams = [ req.params.id ];

    // send SQL command
    pool.query(queryText, queryParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.error('rule router score DELETE ERROR', err);
            res.sendStatus(500);
        });
}); // end DELETE score rules

module.exports = router;

