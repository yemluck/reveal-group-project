import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import score from './score';

import MetricBreakdown from '../MetricBreakdown/MetricBreakdown';

function CompanyDetails() {
    //const params = useParams;
    let { name: companyName } = useParams();
    //console.log(params);
    const dispatch = useDispatch();
    const details = useSelector(store => store.companyDetails)

    // rename these as necessary when the reducers are all done & populated
    // const companyData = useSelector(store => store.companyData)
    // const membershipRules = useSelector(store => store.membershipRules)
    // const scoreRules = useSelector(store => store.scoreRules)
    
    const keys = Object.keys(details);
    //   console.log('details keys:',keys[0]);
    const abc = keys[0]
    //   console.log('type of key', typeof keys[0]); 
    //   console.log('details from store', details);
    let totalScore = {
        transparencyTotal: 0,
        transparencyScore: 0,
        humanRightsTotal: 0,
        humanRightsScore: 0,
        environmentTotal: 0,
        environmentScore: 0,
    }

    

    useEffect(async () => {
        // dispatch to fetch description
        dispatch({
            type: 'FETCH_COMPANY_DETAILS',
            payload: companyName
        });
        // dispatch to fetch data
        await dispatch({
            type: 'FETCH_COMPANY_DATA',
            payload: companyName
        });
        
        // dispatch to receive rules
        // await dispatch({
        //     type: 'FETCH_RULES',
        //     payload: companyName
        // });

        // add viewed company as current active company
        dispatch({
            type: 'SET_ACTIVE_COMPANY',
            payload: companyName
        });

        // reenable this to run it
        // await totalScore = score({ membershipRules, scoreRules}, companyData);
    }, [companyName])


    return (
        <div className="container">
            <div>
                <h2>Company Details</h2>
                <h3>{companyName} </h3>
                <p>{details[abc].extract}</p>
                <p>Transparency: {totalScore.transparencyScore} / {totalScore.transparencyTotal}: {totalScore.transparencyScore / totalScore.transparencyTotal}</p>
                <p>Environment: {totalScore.environmentScore} / {totalScore.environmentTotal}: {totalScore.environmentScore / totalScore.environmentTotal}</p>
                <p>Human Rights: {totalScore.humanRightsScore} / {totalScore.humanRightsTotal}: {totalScore.humanRightsScore / totalScore.humanRightsTotal}</p>
                <Link to="/companies"><button> Back </button></Link>
            </div>
        </div>
    );
}

export default CompanyDetails;

