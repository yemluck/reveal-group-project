import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER_PREFERENCES" action
function* fetchUserPreferences() {
    console.log('In fetchUserPreferences');
    try {
        const response = yield axios.get('/api/userData/userPreferences');
        const preferences = response.data;
        yield put({
            type:   'SET_USER_PREFERENCES',
            payload: preferences
        });
    }
    catch (err) {
        console.log('Error in fetchUserPreferences', err);
    };
}

// worker Saga: will be fired on "FETCH_USER_EMAILS" action
function* fetchUserEmails() {
    console.log('In fetchUserEmails');
    try {
        const response = yield axios.get('/api/userData/usernames');
        const emails = response.data;
        yield put({
            type:   'SET_USER_EMAILS',
            payload: emails
        });
    }
    catch (err) {
        console.log('Error in fetchUserEmails', err);
    };
}

// direct all dispatch calls to their respective functions
function* userData() {
    console.log('In userData');
    yield takeEvery('FETCH_USER_PREFERENCES', fetchUserPreferences);

    yield takeEvery('FETCH_USER_EMAILS', fetchUserEmails);

}

export default userData;