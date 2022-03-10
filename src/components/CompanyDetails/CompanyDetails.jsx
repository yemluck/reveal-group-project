import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import score from './score';

function CompanyDetails() {
    //const params = useParams;
    let { name: companyName } = useParams();
    //console.log(params);
    const dispatch = useDispatch();
    const details = useSelector(store => store.companyDetails)
    const companyData = useSelector(store => store.companyData)
    const membershipRules = useSelector(store => store.membershipRules)
    const scoreRules = useSelector(store => store.scoreRules)
    const keys = Object.keys(details);
    //   console.log('details keys:',keys[0]);
    const abc = keys[0]
    //   console.log('type of key', typeof keys[0]); 
    //   console.log('details from store', details);

    const pointTotal = score({ membershipRules, scoreRules}, companyData);

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
        })
    }, [companyName])


    return (
        <div className="container">
            <div>
                <h2>Company Details</h2>
                <h3>{companyName} </h3>
                <p>{details[abc].extract}</p>
                <p>Transparency: {pointTotal.transparencyScore} / {pointTotal.transparencyTotal}: {pointTotal.transparencyScore / pointTotal.transparencyTotal}</p>
                <p>Environment: {pointTotal.environmentScore} / {pointTotal.environmentTotal}: {pointTotal.environmentScore / pointTotal.environmentTotal}</p>
                <p>Human Rights: {pointTotal.humanRightsScore} / {pointTotal.humanRightsTotal}: {pointTotal.humanRightsScore / pointTotal.humanRightsTotal}</p>
                <Link to="/companies"><button> Back </button></Link>
            </div>
        </div>
    );
}

export default CompanyDetails;

