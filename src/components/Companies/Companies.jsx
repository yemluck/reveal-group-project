import { useEffect } from 'react';
//import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


// sub components to add to this page:
/*************************************
- search bar (form) component to send queries & filter the companies list*/
import CompanySearch from './CompanySearch';

//- a company list component to hold & display the companies, either raw or filtered lists
import List from './List';
//   - company item components to render individual companies in redux.store.companies
//- pagination component to interact with api & offset #
//*************************************/



function Companies() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch to clear details store
    dispatch({
      type: 'CLEAR_INFO'
    })
  })

  return (
    <div className="container">
      <div>
        <CompanySearch />
        <p>Companies</p>
        <List />
      </div>
    </div>
  );
}

export default Companies;

