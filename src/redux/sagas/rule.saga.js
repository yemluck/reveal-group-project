import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addMembershipRule(action) {
    console.log('In addNewRule', action);
    try {
        yield axios.post('/admin/addrule', action.payload);
        yield put({
            type:   'FETCH_RULES'
        });
    }
    catch (err) {
        console.log('Error in addNewRule', err);
    }
}

function* ruleSaga() {
    console.log('ruleSaga');
  yield takeEvery('ADD_MEMBERSHIP_RULE', addMembershipRule);
}

export default ruleSaga;
