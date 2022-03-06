const surveyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PREFERENCE':
            return action.payload;
        default:
            return state;
    }
}

export default surveyReducer;