import React, { useEffect, useState } from 'react';
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
    const errors = useSelector(store => store.errors)

    const companyData = useSelector(store => store.companyData)
    const membershipRules = useSelector(store => store.membershipRules)
    const scoreRules = useSelector(store => store.scoreRules)

    const keys = Object.keys(details);
    //   console.log('details keys:',keys[0]);
    const abc = keys[0]
    //   console.log('type of key', typeof keys[0]); 
    //   console.log('details from store', details);
    const [totalScore, setTotalScore] = useState({
        transparencyTotal: null,
        transparencyScore: null,
        humanRightsTotal: null,
        humanRightsScore: null,
        environmentTotal: null,
        environmentScore: null,
        calculated: false
    });



    useEffect(() => {
        // dispatch to fetch description
        dispatch({
            type: 'FETCH_COMPANY_DETAILS',
            payload: companyName
        });
        // dispatch to fetch data
        dispatch({
            type: 'FETCH_COMPANY_DATA',
            payload: companyName
        });

        // add viewed company as current active company
        dispatch({
            type: 'SET_ACTIVE_COMPANY',
            payload: companyName
        });

        // dispatch to fetch rules
        dispatch({
            type: 'FETCH_MEMBERSHIP_RULES'
        });
        dispatch({
            type: 'FETCH_SCORE_RULES'
        });
    }, [companyName]);

    useEffect(() => {
        setTotalScore(score({ membershipRules, scoreRules }, companyData));

        if (totalScore.transparencyTotal !== 0) {
            dispatch({ type: 'CLEAR_DATA_ERROR' });
        }

    }, [scoreRules, membershipRules, companyData]);

    return (
        <div className="container">
            <div>
                <h2>Company Details</h2>
                <h3>{companyName} </h3>
                <p>{details[abc].extract}</p>
                <p>{errors.dataMessage}</p>
                {totalScore.environmentTotal !== 0 &&
                    <div>
                        <p>Transparency: {totalScore.transparencyScore} / {totalScore.transparencyTotal}: {totalScore.transparencyScore / totalScore.transparencyTotal}</p>
                        <p>Environment: {totalScore.environmentScore} / {totalScore.environmentTotal}: {totalScore.environmentScore / totalScore.environmentTotal}</p>
                        <p>Human Rights: {totalScore.humanRightsScore} / {totalScore.humanRightsTotal}: {totalScore.humanRightsScore / totalScore.humanRightsTotal}</p>
                    </div>
                }
                <Link to="/companies"><button> Back </button></Link>
            </div>
        </div>
    );
}

export default CompanyDetails;

