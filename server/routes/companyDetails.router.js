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
    // axios.get(`
    // https://wikirate.org/${query}
    // `)
    // .then(wikiRateResult => {

    // })
    
    
})



module.exports = router;