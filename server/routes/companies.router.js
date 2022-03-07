const axios = require('axios');
const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// not using database, so don't need pool
// const pool = require('../modules/pool');


// TODO
// need to add the cache function in here, and set the options somehow




const router = express.Router();

// expecting an object like this:
/*  {
*       query: searchBarInput
*   }
*/
// Handles GET request for admin messages
router.get('/:search', rejectUnauthenticated, (req, res) => {
    console.log('in companies router GET');
    // console.log(req.params.search)
    // //TODO
    // need to check validity of input box with. wikirate api...maybe need an encodeURI, maybe don't.

    const query = encodeURI(req.params.search)

    // get list of companies
    axios.get(`
    https://wikirate.org/Commons+Standard_Industrial_Classification_Division+Answer.json?filter%5Bcompany_name%5D=${query}&filter%5Bnot_ids%5D=
    `)
        .then(wrResult => {
            // console.log('result:', result.data.items)
            // TODO
            // examine & traverse the JSON that is returned for list of companies
            // or.......traverse the JSON in front end
            res.status(200).send(wrResult.data.items);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })

}); // end GET



module.exports = router;