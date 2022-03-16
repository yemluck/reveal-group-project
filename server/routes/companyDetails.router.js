const axios = require('axios');
const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:company', rejectUnauthenticated, (req, res) => {
    //console.log('in company details router GET');
    
    // edge case for oil companies

    if (req.params.company === 'Total S.A.') {
        req.params.company = 'TotalEnergies'
    }
    
    const query = encodeURI(req.params.company)

    

    // get company details
    axios.get(`
    https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exchars=1200&titles=${query}&explaintext=true
    `)
    .then(wikiDescription => {
        res.status(200).send(wikiDescription.data.query.pages)
    })
    .catch(err => {
        console.error('Error fetching company details', err);
        res.status(500).send(err);
    })
    
}) // end GET endpoint

router.get('/data/:company', rejectUnauthenticated, (req,res) => {
    
    // edge case
    if (req.params.company === 'Total S.A.') {
        req.params.company = 'Total_S_A'
    }

    let query1 = encodeURI(req.params.company);
    // Sometimes query ends with "." which breaks url
    // steps: split query into individual character
    let query2 = query1.split('');

    // // check if there are "." characters. If so, remove them
    let query3 = query2.filter(char => char !== '.')
    // join array to form a string
    const query = query3.join('');

    // get company data
    // insert encoded and fixed query into third party API
    axios.get(`
    https://wikirate.org/${query}+Answer?filter%5Bmetric_name%5D=&limit=5000&api_key=${process.env.WIKIRATE_API_KEY}&format=json
    `)
    .then(wikiData => {
      // console.log('data result:', wikiData.data);
      // Send data back to saga
      res.status(200).send(wikiData.data);
    })
    .catch( err => {
        console.error('Error fetching data from wikiRate', err);
        res.status(500).send(err)
    })
}) // end GET company data


module.exports = router;