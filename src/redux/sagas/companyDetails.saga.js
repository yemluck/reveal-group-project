import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCompanyDetails(action) {
    // console.log('This is the action:', action);

    try {
        // console.log('this is action.payload:',action.payload);
        const company = encodeURI(action.payload);
        // console.log('encoded company:', company);

        const results = yield axios.get(`api/companyDetails/${company}`);
        //console.log('result from API:', results.data);
        yield put ({
            type: "SET_COMPANY_DETAILS",
            payload: results.data
        })
    } catch (error) {
        // console.log('Error fetching company details', error);
    }
    
} // end function fetchCompanyDetails

function* fetchCompanyData(action) {
    // console.log('This is the action in fetchCompanyData', action);

    try {
        const company = encodeURI(action.payload);
        // console.log('encoded company:', company);

        const companyData = yield axios.get(`api/companyDetails/data/${company}`); 
        // console.log('this is companyData going to redux store:',companyData.data.items);
        
        yield put ({
            type: 'SET_COMPANY_DATA',
            payload: companyData.data.items
        })
    } catch (error) {
        console.error('Error fetching company data', error);
        
    }


    
    
}


function* companyDetailsSaga() {
    yield takeLatest('FETCH_COMPANY_DETAILS', fetchCompanyDetails);
    yield takeLatest('FETCH_COMPANY_DATA', fetchCompanyData)

}

export default companyDetailsSaga;