import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_MESSAGE" action
function* createMessage(action) {
    // console.log('in createMessage saga');
    // check payload
    // console.log('massages saga payload', action.payload);

    // setup action payload to be sent
    const userMessage = action.payload;

    // passport security
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to messages router
        yield axios.post('/api/messages', { config, userMessage });

        // then call fetchMessages function
        yield put({ type: 'FETCH_MESSAGES' });
    } catch (error) {
        console.error('message saga POST failed', error);
    }
}

// worker Saga: will be fired on "FETCH_MESSAGES" action
function* fetchMessages() {
    // console.log('in fetchMessages saga');

    // passport security
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to messages router
        const response = yield axios.get('/api/messages', { config });
        // check response
        // console.log('messages saga GET response', response.data);

        // then send response to messages reducer
        yield put({
            type: 'SET_MESSAGES',
            payload: response.data
        });
        } catch (error) {
            console.error('message saga POST failed', error);
    }
}

// worker Saga: will be fired on "DELETE_MESSAGE" action
function* deleteMessage(action) {
    // console.log('in deleteMessage saga');
    const id = action.payload;

    // passport security
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to messages router
        yield axios.delete(`/api/messages/${id}`, { config, id });

        // then call fetchMessages function
        yield put({ type: 'FETCH_MESSAGES' });
        } catch (error) {
            console.error('message saga POST failed', error);
    }
}

// watch for functions
function* messagesSaga() {
    yield takeLatest( 'CREATE_MESSAGE', createMessage );

    yield takeLatest( 'FETCH_MESSAGES', fetchMessages );

    yield takeLatest( 'DELETE_MESSAGE', deleteMessage );
}

export default messagesSaga;