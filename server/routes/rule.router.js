const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
});

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('In rule router POST', req.body);
    const queryText = `
        INSERT INTO "membership_rule"
            ("organization", "points", "industry", "value_id")
        VALUES
            ($1, $2, $3, $4)
        ;`;
        // WHERE "user".auth_level = 1 (don't remember the right way to write this)
    const queryParams = [req.body.organization, req.body.points, req.body.industry, req.body.value_id];
});

module.exports = router;

