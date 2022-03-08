import React, { useEffect } from 'react';
import {Link , useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CompanyDetails() {
  //const params = useParams;
  let { name: companyName } = useParams();
  //console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ 
      type:'FETCH_COMPANY_DETAILS',
      payload: companyName
    })
  },[companyName])
  
  

  return (
    <div className="container">
      <div>
        <h2>Company Details</h2>
        <h3>{companyName} </h3>
        <Link to="/companies"><button> Back </button></Link>
      </div>
    </div>
  );
}

export default CompanyDetails;

