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
        ;`;}
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

module.exports = router;

