import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCompanyDetails(action) {
    console.log('This is the action:', action);

    try {
        console.log('this is action.payload:',action.payload);
        const company = encodeURI(action.payload);
        console.log('encoded company:', company);

        const results = yield axios.get(`api/companyDetails/${company}`);
        console.log('result from API:', results.data);
        
        
        
    } catch (error) {
        console.log('Error fetching company details', error);
    }
    
}


function* companyDetailsSaga() {
    yield takeLatest('FETCH_COMPANY_DETAILS', fetchCompanyDetails)
}

export default companyDetailsSaga