import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* companiesSaga() {
    yield takeLatest('FETCH_COMPANIES', null);
    yield takeLatest('FETCH_ACTIVE_COMPANY', null);
  }
  
  export default companiesSaga;
  