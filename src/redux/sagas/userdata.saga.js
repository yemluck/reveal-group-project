import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER_PREFERENCES" action
function* fetchUserPreferences() {
    console.log('In fetchUserPreferences');
    try {
        yield axios.get('/userData');
        yield put({
            type:   'SET_USER_PREFERENCES'
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
        yield axios.get('/api/userData/usernames');
        yield put({
            type:   'SET_USER_EMAILS',
        });
    }
    catch (err) {
        console.log('Error in fetchUserEmails', err);
    };
}

function* userData() {
    console.log('In userData');
    yield takeEvery('FETCH_USER_PREFERENCES', fetchUserPreferences);

    // yield takeEvery('FETCH_USER_COUNT', fetchUserCount);

    yield takeEvery('FETCH_USER_EMAILS', fetchUserEmails);

}

export default userData;