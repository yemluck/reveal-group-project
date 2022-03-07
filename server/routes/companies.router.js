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
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in companies router GET');
    console.log(req.body.query)
    //TODO
    // need to check validity of input box with. wikirate api...maybe need an encodeURI, maybe don't.
    
    // const query = encodeURI(req.body.query)


    // // get list of companies
    // axios.get(`
    // https://wikirate.org/Commons+Standard_Industrial_Classification_Code.json?filter%5Bcompany_name%5D=${query}&filter%5Bnot_ids%5D=&limit=20&offset=0
    // `)
    // .then(result => {
    //     console.log('result:', result)
    //     // TODO
    //     // examine & traverse the JSON that is returned for list of companies
    //     // or.......traverse the JSON in front end
    //     // res.status(200).send(result)
    // })
    // .catch(err => {
    //     console.error(err);
    //     res.status(500).send(err)
    // })

}); // end GET



module.exports = router;