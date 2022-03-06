import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCompanies(){

    return null
}

function* fetchActiveCompany(){

    return null
}


function* companiesSaga() {
    yield takeLatest('FETCH_COMPANIES', fetchCompanies);
    yield takeLatest('FETCH_ACTIVE_COMPANY', fetchActiveCompany);
  }
  
  export default companiesSaga;
  