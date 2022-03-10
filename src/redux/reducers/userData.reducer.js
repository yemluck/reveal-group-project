import { combineReducers } from "redux";

const userEmailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_EMAILS':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};


const userData = combineReducers({
    userEmailsReducer,

}) 

export default userData;