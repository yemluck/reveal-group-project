import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_MEMBERSHIP_RULE" action
function* addMembershipRule(action) {
    console.log('In addMembershipRule');
    try {
        yield axios.post('/admin/addnewrule', action.payload);
        yield put({
            type:   'FETCH_RULES'
        });
    }
    catch (err) {
        console.log('Error in addNewRule', err);
    }
}

// worker Saga: will be fired on "ADD_SCORE_RULE" action
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

// worker Saga: will be fired on "FETCH_MEMBERSHIP_RULES" action
function* fetchMembershipRules() {
    console.log('in fetchMembershipRules saga');

    // passport security
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send request to rule router
        const response = yield axios.get('/api/rules/membership', { config });
        const membershipRules = response.data;

        // then store membership rules in membershipRules reducer
        yield put({ 
            type: 'SET_MEMBERSHIP_RULES',
            payload: membershipRules
        });

        } catch (error) {
            console.log('message saga POST failed', error);
    }
}

// worker Saga: will be fired on "FETCH_SCORE_RULES" action
function* fetchScoreRules() {
    console.log('in fetchScoreRules saga');

    // passport security
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send request to rule router
        const response = yield axios.get('/api/rules/score', { config });
        const scoreRules = response.data;

        // then store score rules in scoreRules reducer
        yield put({ 
            type: 'SET_SCORE_RULES',
            payload: scoreRules
        });
        
        } catch (error) {
            console.log('message saga POST failed', error);
    }
}

// worker Saga: will be fired on "EDIT_MEMBERSHIP_RULE" action
function* editMembershipRule(action) {
    console.log('in editMembershipRule sage', action.payload);
    const id = action.payload;

    // passport security
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send request to rule router
        yield axios.put(`/api/rules/membership/${id}`, { config, id });

        // then call fetchMembershipRules function
        yield put({ type: 'FETCH_MEMBERSHIP_RULE' });
        
        } catch (error) {
            console.log('message saga POST failed', error);
    }
}

// watch for functions
function* ruleSaga() {
    console.log('ruleSaga');
    yield takeEvery('ADD_MEMBERSHIP_RULE', addMembershipRule);

    yield takeEvery( 'ADD_SCORE_RULE', addScoreRule );

    yield takeEvery( 'FETCH_MEMBERSHIP_RULES', fetchMembershipRules );

    yield takeEvery( 'FETCH_SCORE_RULES', fetchScoreRules );

    yield takeEvery( 'EDIT_MEMBERSHIP_RULE', editMembershipRule );
}

export default ruleSaga;
