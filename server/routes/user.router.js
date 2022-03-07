const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {

  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `
    WITH first_insert AS (
      INSERT INTO "user" ("email_address", "password")
      VALUES ($1, $2)
      RETURNING id AS user_id
    )
    INSERT INTO "preference" ("user_id", "value_id", "priority")
      VALUES((SELECT user_id FROM first_insert), 1, 5),
            ((SELECT user_id FROM first_insert), 2, 5),
            ((SELECT user_id FROM first_insert), 3, 5);
  
  `
  // const queryText = `INSERT INTO "user" (email_address, password)
  //   VALUES ($1, $2) RETURNING id;

  //   INSERT INTO "preference" ("user_id", "value_id", "priority")
  //   VALUES(id, 1, 5), (id, 2, 5), (id, 3, 5)
    
  //   `;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
