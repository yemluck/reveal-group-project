const surveyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PREFERENCE':
            return action.payload;
        case 'UPDATE_ACTIVE_SURVEY':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default surveyReducer;