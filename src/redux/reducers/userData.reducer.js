import { combineReducers } from "redux";

// provides list of averages for all user preferences 
// in each value category
const userPreferencesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_PREFERENCES':
            return action.payload;
        default:
            return state;
    }
};// end userPreferencesReducer

// provides list of all user email addresses, 
// and the total user count
const userEmailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_EMAILS':
            return action.payload;
        default:
            return state;
    }
};// end userEmailsReducer

const userData = combineReducers({
    userPreferencesReducer,
    userEmailsReducer,
})// end userData  

export default userData;