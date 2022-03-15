import { combineReducers } from "redux";

const userPreferencesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_PREFERENCES':
            // console.log(action);
            return action.payload;
        default:
            return state;
    }
};

// provides
const userEmailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_EMAILS':
            // console.log(action);
            return action.payload;
        default:
            return state;
    }
};

const userData = combineReducers({
    userPreferencesReducer,
    userEmailsReducer,
}) 

export default userData;