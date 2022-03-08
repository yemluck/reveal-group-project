import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addMembershipRule(action) {
    console.log('In addNewRule');
    try {
        yield axios.post('/api/rules/membership', action.payload);
        yield put({
            type:   'FETCH_RULES'
        });
    }
    catch (err) {
        console.log('Error in addMembershipRule', err);
    }
}

function* addScoreRule(action) {
    console.log('In addScoreRule');
    try {
        yield axios.post('/api/rules/score', action.payload);
        yield put({
            type:   'FETCH_RULES'
        });
    }
    catch (err) {
        console.log('Error in addScoreRule', err);
    }
}

// worker Saga: will be fired on "DELETE_MESSAGE" action
function* fetchRules() {
    console.log('in addRules');

    // passport security
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send request to messages router
        yield axios.get(`/api/addRules/${id}`, { config, id });

        // then call fetchMessages function
        yield put({ type: 'FETCH_MESSAGES' });
        } catch (error) {
            console.log('message saga POST failed', error);
    }
}

// watch for functions
function* ruleSaga() {
    console.log('ruleSaga');
<<<<<<< HEAD
    yield takeEvery('ADD_MEMBERSHIP_RULE', addMembershipRule);

    yield takeEvery( 'FETCH_RULES', fetchRules );
=======
  yield takeEvery('ADD_MEMBERSHIP_RULE', addMembershipRule);
  yield takeEvery('ADD_SCORE_RULE', addScoreRule);
>>>>>>> 69caa53466e86a39cbfaf670afcbac9389b624d6
}

export default ruleSaga;
