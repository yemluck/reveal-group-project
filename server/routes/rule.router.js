const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
});

router.post('/addnewrule', rejectUnauthenticated, (req, res) => {
    console.log('In rule router POST');
    const queryText = `
        INSERT INTO "membership_rule"
            ("organization", "points", "industry")
        VALUES
            ($1, $2, $3)
        WHERE "user".auth_level = 1
        ;`;
    const queryParams = [req.body.organization, req.body.points, req.body.industry];
    console.log(queryText);
});

module.exports = router;

