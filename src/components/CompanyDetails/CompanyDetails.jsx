import React from 'react';
import {Link , useParams} from 'react-router-dom';

function CompanyDetails() {
  const params = useParams;
  let { id: company } = useParams();
  console.log(params)

  return (
    <div className="container">
      <div>
        <p>CompanyDetails</p>
        <p>Name: {company} (this is grabbed from url in address bar)</p>
        <Link to="/companies"><button> Back </button></Link>
      </div>
    </div>
  );
}

export default CompanyDetails;

