import React from 'react';
//import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Companies() {

  const history = useHistory();
  const companies = ['apple', 'google', 'Netflix', 'meta'];

  const  selectCompany = (company) => {
    history.push(`/companies/${company}`)
  }

  return (
    <div className="container">
      <div>
        <p>TheCompanies</p>
        {
          companies.map((company, i) => {
            return(<div key={i}>
                <h3>{company}</h3>
                <button onClick={() => selectCompany(company)}> select </button>
            </div>)
          })
        }
      </div>
    </div>
  );
}

export default Companies;

