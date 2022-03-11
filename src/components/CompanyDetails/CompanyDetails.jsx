import React, { useEffect } from 'react';
import {Link , useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CompanyDetails() {
  //const params = useParams;
  let { name: companyName } = useParams();
  //console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch to fetch description
    dispatch({ 
      type:'FETCH_COMPANY_DETAILS',
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
  },[companyName])
  
  const details = useSelector(store => store.companyDetails)
  const keys = Object.keys(details);
//   console.log('details keys:',keys[0]);
  const abc = keys[0]
//   console.log('type of key', typeof keys[0]); 
//   console.log('details from store', details);

  return (
    <div className="container">
      <div>
        <h2>Company Details</h2>
        <h3>{companyName} </h3>
        <p>{details[abc].extract}</p> 
        <Link to="/companies"><button> Back </button></Link>
      </div>

    </div>
  );
}

export default CompanyDetails;

