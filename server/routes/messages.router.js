const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles GET request for admin messages
router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log('in messages router GET');

    let queryText = '';

    // only admin can gain access
    if (req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            SELECT
                "comments"."id",
                "user"."email_address",
                "comments"."name",
                "comments"."comment"
            FROM "comments"
            JOIN "user"
                ON "comments"."user_id" = "user"."id";
        `;
    }

    // send command to database
    pool.query(queryText)
        .then((results) => {
            // send back data to messages saga
            res.send(results.rows);
        })
        .catch((err) => {
            console.error('messages GET ERROR', err);
            res.sendStatus(500);
        })
}); // end GET

// Handles POST request for user's message
router.post('/', rejectUnauthenticated, (req, res) => {
    // console.log('in messages router POST');
    // check variables to POST
    console.log('user id', req.user.id);
    console.log('message saga payload', req.body.userMessage);

    let queryText = '';
    // only users can POST
    if (req.user.id) {
        // setup SQL command
        queryText = `
            INSERT INTO "comments"
            ( "comment", "name", "user_id" )
            VALUES
            ( $1, $2, $3 );
        `;
    }

    const queryParams = [
        req.body.userMessage.message,
        req.body.userMessage.name,
        req.user.id
    ];

    // send command to database
    pool.query(queryText, queryParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            // give error for failure
            console.error('messages POST ERROR!', err);
            res.sendStatus(500);
        });
}); // end POST

// handled DELETE/:id for admin message
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // console.log('in messages router DELETE');
    // check variable to DELETE
    // console.log('DELETE id', req.params.id);

    let queryText = '';
    // only admin can gain access
    if (req.user.auth_level === 1) {
        // setup SQL command
        queryText = `
            DELETE FROM "comments"
            WHERE "id" = $1;
        `;
    }

    const queryParams = [ req.params.id ];

    // send command to database
    pool.query(queryText, queryParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.error('message DELETE ERROR', err);
            res.sendStatus(500);
        })
}); // end DELETE/:id

module.exports = router;