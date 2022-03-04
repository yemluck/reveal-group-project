import React from 'react';
import { Link } from 'react-router-dom';

function CompanyDetails() {


  return (
    <div className="container">
      <div>
        <p>CompanyDetails</p>
        <Link to="/companies"><button> Back </button></Link>
      </div>
    </div>
  );
}

export default CompanyDetails;

