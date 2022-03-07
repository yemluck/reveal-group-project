import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addNewRule(action) {
    console.log('In addNewRule');
    try {
        yield axios.post('/addrule', action.payload);
        yield put({
            type:   'FETCH_RULES'
        });
    }
    catch (err) {
        console.log('Error in addNewRule', err);
    }
}

function* ruleSaga() {
  yield takeEvery('ADD_MEMBERSHIP_RULE', addNewRule);
}

export default ruleSaga;
