import React, { useEffect } from 'react';
import {Link , useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MetricBreakdown from '../MetricBreakdown/MetricBreakdown';

function CompanyDetails() {

  // from useParams
  let { 
    name: companyName,
    wikiName: wikiDetail 
  } = useParams();

  const dispatch = useDispatch();

  // for cases with no wikipedia description
  // null returns wikipedia description of null
  if (wikiDetail === "null"){
    wikiDetail = companyName
  }

  useEffect(() => {
    // dispatch to fetch description
    dispatch({ 
      type:'FETCH_COMPANY_DETAILS',
      payload: wikiDetail
    });
    // dispatch to fetch data
    dispatch({
      type: 'FETCH_COMPANY_DATA',
      payload: companyName
    });
  },[companyName])
  
  const details = useSelector(store => store.companyDetails)
  const keys = Object.keys(details);
//   console.log('details keys:',keys[0]);
  const abc = keys[0]
//   console.log('details from store', details);

  return (
    <div className="container">
      <div>
        <h2>Company Details</h2>
        <h3>{companyName} </h3>
        <p>{details[abc].extract}</p> 
        <Link to="/companies"><button> Back </button></Link>
      </div>

      {/* show metric breakdown for selected company */}
      <MetricBreakdown />
    </div>
  );
}

export default CompanyDetails;

