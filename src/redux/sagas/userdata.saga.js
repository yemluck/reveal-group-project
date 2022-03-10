import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER_PREFERENCES" action
function* fetchUserPreferences() {
    console.log('In fetchUserPreferences');
    try {
        yield axios.post('/userdata');
        yield put({
            type:   'SET_USER_PREFERENCES'
        });
    }
    catch (err) {
        console.log('Error in fetchUserPreferences', err);
    };
}

// worker Saga: will be fired on "FETCH_USER_COUNT" action
function* fetchUserCount() {
    console.log('In fetchUserCount');
    try {
        yield axios.post('/userdata');
        yield put({
            type:   'SET_USER_COUNT'
        });
    }
    catch (err) {
        console.log('Error in fetchUserCount', err);
    };
}

// worker Saga: will be fired on "FETCH_USER_PREFERENCES" action
function* fetchUserEmails() {
    console.log('In fetchUserEmails');
    try {
        yield axios.post('/userdata');
        yield put({
            type:   'SET_USER_EMAILS'
        });
    }
    catch (err) {
        console.log('Error in fetchUserEmails', err);
    };
}

function* userDataSaga() {
    console.log('userDataSaga');
    yield takeEvery('FETCH_USER_PREFERENCES', fetchUserCount);

    yield takeEvery('FETCH_USER_COUNT', fetchUserCount);

    yield takeEvery('FETCH_USER_EMAILS', fetchUserEmails);

}

export default userDataSaga;