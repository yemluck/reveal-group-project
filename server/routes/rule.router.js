const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
});

router.post('/membership', rejectUnauthenticated, (req, res) => {
    console.log('In rule router POST', req.body);
    let queryText = '';
    if(req.user.auth_level === 1) {
    queryText = `
        INSERT INTO "membership_rule"
            ("organization", "points", "industry", "value_id")
        VALUES
            ($1, $2, $3, $4)
        ;`;
    }
    const queryParams = [req.body.organization, req.body.points, req.body.industry, req.body.value];
    pool.query(queryText, queryParams)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Rule POST error', err);
        res.sendStatus(500);
    });
});

router.post('/score', rejectUnauthenticated, (req, res) => {
    console.log('In rule router POST', req.body);
    let queryText = '';
    if(req.user.auth_level === 1) {
    queryText = `
        INSERT INTO "score_rule"
            ("metric", "result", "points", "industry", "value_id")
        VALUES
            ($1, $2, $3, $4, $5)
        ;`;}
    const queryParams = [req.body.metric, req.body.result, req.body.points, req.body.industry, req.body.value_id];
    pool.query(queryText, queryParams)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Rule POST error', err);
        res.sendStatus(500);
    });
});

// GET membership rules
router.get('/membership', rejectUnauthenticated, (req, res) => {
    console.log('in rule router GET membership');

    let queryText = '';

    // only admins can GET membership rules
    if (req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            SELECT * FROM "membership_rule";
        `;
    }

    // send SQL command to database
    pool.query(queryText)
        .then((results) => {
            console.log('GET membership_rule', results.rows);
            res.send(results.rows);
        })
        .catch((err) => {
            console.error('rule router membership GET ERROR', err);
            res.sendStatus(500);
        });
}); // end GET membership rules

// GET membership rules
router.get('/score', rejectUnauthenticated, (req, res) => {
    console.log('in rule router GET score');

    let queryText = '';

    // only admins can GET score rules
    if (req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            SELECT * FROM "score_rule";
        `;
    }

    // send SQL command to database
    pool.query(queryText)
        .then((results) => {
            console.log('GET score_rule', results.rows);
            res.send(results.rows);
        })
        .catch((err) => {
            console.error('rule router score GET ERROR', err);
            res.sendStatus(500);
        });
}); // end GET membership rules

// PUT membership rule
router.put('/membership/:id', rejectUnauthenticated, (req, res) => {
    console.log('in rule router PUT membership', id);

    let queryText = '';

    // only admins can GET score rules
    if (req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            UPDATE "membership_rule"
            
        `;
    }
});

module.exports = router;

