const surveyReducer = (state = {transparency: 5, environmental: 5, humanRights: 5
}, action) => {
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