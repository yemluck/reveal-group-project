import { combineReducers } from "redux";

const userEmailsReducer = (state = [], action) => {
    console.log(action.type);
    switch (action.type) {
        case 'SET_USER_EMAILS':
            return action.payload.email_address;
        default:
            return state;
    }
};


const userData = combineReducers({
    userEmailsReducer,

}) 

export default userData;