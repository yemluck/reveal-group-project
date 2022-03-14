const companyDetailsReducer = (state = {"0":{extract:""}}, action) => {
    switch (action.type) {
        case 'SET_COMPANY_DETAILS':
            return action.payload;
        case 'CLEAR_INFO':
            return { "0": { extract: "" } };
        default:
            return state;
    }
}

export default companyDetailsReducer;