const axios = require('axios');
const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:company', rejectUnauthenticated, (req, res) => {
    //console.log('in company details router GET');
    
    const query = encodeURI(req.params.company)
    

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

router.get('/data/:company', rejectUnauthenticated, (req,res) => {
    let query1 = encodeURI(req.params.company);
    // Sometimes query ends with "." which breaks url
    // steps: split query into individual character
    let query2 = query1.split('');
    // check if last character is a ".". if so, remove it
    if (query2[query2.length - 1] === '.'){
        query2.pop()
    }
    // join array to form a string
    const query = query2.join('');

    // get company data
    // insert encoded and fixed query into third party API
    axios.get(`
    https://wikirate.org/${query}+Answer.json?filter%5Bmetric_name%5D=
    `)
    .then(wikiData => {
      // console.log('data result:', wikiData.data);
      // Send data back to saga
      res.status(200).send(wikiData.data);
    })
    .catch( err => {
        console.log('Error fetching data from wikiRate', err);
        res.status(500).send(err)
    })
}) // end GET company data


module.exports = router;