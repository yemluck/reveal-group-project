import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewRule(action) {
    console.log('In addNewRule');
    try {
        yield axios.post('/rules', action.payload);
        yield put({
            type:   'FETCH_RULES'
        });
    }
    catch (err) {
        console.log('Error in addNewRule', err);
    }
}

function* ruleSaga() {
  yield takeLatest('ADD_MEMBERSHIP_RULE', addNewRule);
}

export default ruleSaga;
