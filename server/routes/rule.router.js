const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
});

router.post('/addrule', rejectUnauthenticated, (req, res) => {
    console.log('In rule router POST');
    const queryText = `
        INSERT INTO "membership_rule"
            ("organization", "points", "industry")
        VALUES
            ($1, $2, $3)
        WHERE "user".id = $4
        ;`;
    const queryParams = [req.body.membershipName, req.body.pointEarned, req.body.industryCategory, req.user.id];
});

module.exports = router;

