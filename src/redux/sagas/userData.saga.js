import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER_PREFERENCES" action
// fetch averages of all user preferences for each category  
function* fetchUserPreferences() {
    // console.log('In fetchUserPreferences');
    try {
        const response = yield axios.get('/api/userData/userPreferences');
        const preferences = response.data;
        yield put({
            type:   'SET_USER_PREFERENCES',
            payload: preferences
        });
    }
    catch (err) {
        console.error('Error in fetchUserPreferences', err);
    };
}// end function fetchUserPreferences

// worker Saga: will be fired on "FETCH_USER_EMAILS" action
// fetch usernames (email addresses)
function* fetchUserEmails() {
    // console.log('In fetchUserEmails');
    try {
        const response = yield axios.get('/api/userData/usernames');
        const emails = response.data;
        yield put({
            type:   'SET_USER_EMAILS',
            payload: emails
        });
    }
    catch (err) {
        console.error('Error in fetchUserEmails', err);
    }
}// end function fetchUserEmails

// direct all dispatch calls to their respective functions
function* userData() {
    // console.log('In userData');
    yield takeEvery('FETCH_USER_PREFERENCES', fetchUserPreferences);

    yield takeEvery('FETCH_USER_EMAILS', fetchUserEmails);
}// end function userData 

export default userData;