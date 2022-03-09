const axios = require('axios');
const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:company', rejectUnauthenticated, (req, res) => {
    console.log('in company details router GET');
    console.log('req.params.company:', req.params.company);
    
    const query = encodeURI(req.params.company)
    console.log('this is encoded params', query);
    

    // get company details
    axios.get(`
    https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exchars=1200&titles=${query}&explaintext=true
    `)
    .then(wikiDescription => {
       // console.log('result:', wikiDescription.data.query.pages);
        res.status(200).send(wikiDescription.data.query.pages)
    })
    .catch(err => {
        console.log('Error fetching company details', err);
        res.status(500).send(err);
    })
    
}) // end GET endpoint



module.exports = router;