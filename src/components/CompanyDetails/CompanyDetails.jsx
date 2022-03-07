import React from 'react';
import {Link , useParams} from 'react-router-dom';

function CompanyDetails() {
  const params = useParams;
  let { name: companyName } = useParams();
  console.log(params)

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

