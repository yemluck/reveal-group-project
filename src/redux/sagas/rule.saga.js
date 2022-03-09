import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addMembershipRule(action) {
    console.log('In addMembershipRule');
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

function* ruleSaga() {
    console.log('ruleSaga');
  yield takeEvery('ADD_MEMBERSHIP_RULE', addMembershipRule);
  yield takeEvery('ADD_SCORE_RULE', addScoreRule);
}

export default ruleSaga;
