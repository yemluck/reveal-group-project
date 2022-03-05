const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in messages router GET');

    // setup SQL command
    const queryText = `
        SELECT
            "user"."email_address",
            "comments"."name",
            "comments"."comment"
        FROM "user"
        JOIN "comments"
            ON "user"."id" = "comments"."user_id";
    `;

    pool.query(queryText)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((err) => {
            console.error('messages GET ERROR', err);
            res.sendStatus(500);
        })
});

// Handles POST request for user's message
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in messages router POST');
    // check variales to POST
    console.log('user id', req.user.id);
    console.log('message saga payload', req.body.message);

    // setup SQL command
    const queryText = `
        INSERT INTO "comments"
        ( "comment", "name", "user_id" )
        VALUES
        ( $1, $2, $3 );
    `;

    const queryParams = [
        req.body.userMessage.message,
        req.body.userMessage.name,
        req.user.id
    ];

    // send SQL command to database
    pool.query(queryText, queryParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            // give error for failure
            console.error('messages POST ERROR!', err);
            res.sendStatus(500);
        });
});

module.exports = router;